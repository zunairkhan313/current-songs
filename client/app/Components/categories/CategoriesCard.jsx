import { addCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import RemoveBtn2 from "../RemoveBtn2";
import Link from "next/link";

export default function CategoriesCard({ items }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const { cart } = useSelector((state) => state.cart);

    const addToCart = (id) => {
        let tempArr = [...cart];
        tempArr.push(items);
        dispatch(addCart(tempArr));
    };

    const removeFromCart = (id) => {
        console.log("id", id);
        let tempArr = [...cart].filter((items) => items._id !== id);
        dispatch(addCart(tempArr));
    };

    const isInCart = (id) => {
        return cart.some((items) => items._id === id);
    };

    return (
        <>
            <div
                style={{ height: "100%", width: 300 }}
                className="mt-5 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
                <Link href={"/product"}>
                    <div className="flex flex-wrap justify-around">
                        <img
                            style={{ height: "250px" }}
                            className="rounded object-cover"
                            width={300}
                            src={items?.image1}
                            alt={"tshirts"}
                        />
                    </div>
                    <div className="mt-4">
                        <h4 className="text-[25px] ml-2 font-bold tracking-wider text-center">
                            {items?.title1}
                        </h4>

                    </div>
                    <div className="mt-2">
                        <h4 className="text-[14px] ml-2 text-center">{items?.description1}</h4>
                    </div>

                </Link>

                <div className="ml-1">
                    <RemoveBtn2 id={items?._id} />
                </div>
            </div>
        </>
    );
}
