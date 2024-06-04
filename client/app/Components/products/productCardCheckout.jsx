"use client";
import React from "react";
// import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// import { addCart } from "@/redux/slices/cartSlice";

export default function ProductCardCheckout() {
  //   const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  //   const removeFromCart = (id) => {
  //     let tempArr = [...cart].filter((item) => item.id !== id);
  //     dispatch(addCart(tempArr));
  //   };

  return cart?.length > 0
    ? cart?.map((item, index) => (
        <div
          key={index}
          style={{ height: "100%", width: "100%" }}
          className="mt-2 shadow p-2 bg-body-white rounded"
        >
          <div className="flex flex-wrap gap-3 justify-around">
            <Image

              className="rounded"
              height={100}
              width={100}
              src={item.image}
              alt={"logo"}
            />

            <div className="mt-2">
              <h4 className="font-sans text-lg font-bold">{item.title}</h4>
              <p className=" line-clamp-1">{item.description}</p>
              <h5 style={{fontWeight:"bold"}} className="font-sans font-bold line-clamp-1">{item.code}</h5>
            </div>

            <div className="flex gap-2">
              <div></div>
              <div></div>
            </div>
            <div className="flex gap-2 mt-3">
              <div className="price mt-4">
                <h5 className="font-sans font-bold">${item.price}</h5>
              </div>
            </div>
          </div>
        </div>
      ))
    : "No items in cart";
}
