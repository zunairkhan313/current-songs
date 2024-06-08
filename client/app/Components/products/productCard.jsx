import { addCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import RemoveBtn from "../RemoveBtn";

export default function ProductCard({ item, onReload }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { cart } = useSelector((state) => state.cart);

  const addToCart = (id) => {
    let tempArr = [...cart];
    tempArr.push(item);
    dispatch(addCart(tempArr));
  };

  const removeFromCart = (id) => {
    console.log("id", id);
    let tempArr = [...cart].filter((item) => item._id !== id);
    dispatch(addCart(tempArr));
  };

  const isInCart = (id) => {
    return cart.some((item) => item._id === id);
  };

  return (
    <div
      style={{ height: "100%", width: 300 }}
      className="mt-5 shadow p-3 mb-5 bg-body-tertiary rounded"
    >
      <div className="flex flex-wrap justify-around">
        <img
          style={{ height: "250px" }}
          className="rounded object-cover"
          width={300}
          src={item?.image}
          alt={"tshirts"}
        />
      </div>
      <div className="mt-4">
        <h4 className="text-[25px] ml-2 font-bold tracking-wider">
          {item?.title}
        </h4>
        <br />
      </div>
      <div className="mt-1">
        <h4 className="text-[14px] ml-2">{item?.description}</h4>
      </div>
      <div className="flex justify-between">

    
      <div className="mt-3">
        <h4 className="text-[14px] ml-2 font-bold">${item?.price}</h4>
      </div>
      <div className="mt-3">
        <h4 className="text-[12px] ml-2 font-bold">{item?.code}</h4>
        <br />
      </div>
      </div>
      <div className="ml-1">
        <RemoveBtn id={item?._id} onReload={onReload} />
      </div>
      <div className="mt-2">
        <hr />
      </div>
      <div className="flex flex-wrap justify-around mt-3">
        <div>
          <button
            style={{ backgroundColor: "#ff3333" }}
            type="button"
            className="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              if (!isInCart(item?._id)) {
                addToCart(item?._id);
                router.push("/cart");
              }
            }}
          >
            {isInCart(item?._id) ? "Buy Now" : "Buy Now"}
          </button>
        </div>
        <div>
          <button
            type="button"
            className="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold"
            onClick={() =>
              isInCart(item._id)
                ? removeFromCart(item._id)
                : addToCart(item._id)
            }
          >
            {isInCart(item._id) ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
