"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "@/redux/slices/cartSlice";

export default function ProductCardCart() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const removeFromCart = (_id) => {
    let tempArr = [...cart].filter((item) => item._id !== _id);
    dispatch(addCart(tempArr));
  };

  return cart?.length > 0
    ? cart?.map((item, index) => (
      <div
        key={index}
        style={{ height: "100%", width: "100%" }}
        className="mt-2 shadow p-2 bg-body-white rounded"
      >
        <div className="flex flex-wrap gap-3 justify-around">
          <img
            style={{ height: "100px" }}
            className="rounded"
            width={100}
            // height={50}
            src={item.image}
            alt={"tools"}
          />

          <div className="mt-2">
            <h4 className="font-sans text-[20px] font-bold">{item.title}</h4>
            <p className=" line-clamp-1 text-[14px]">{item.description}</p>
            <h5 className="font-sans font-bold text-[14px] mt-1">{item.code}</h5>
          </div>

          <div className="flex gap-2">
            <div></div>
            <div></div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="price mt-4">
              <h5 className="font-sans font-bold">${item.price}</h5>
            </div>
          
            <div
            
              className="deleteicon mt-3"
              onClick={() => removeFromCart(item._id)}
            >
              <h3 style={{ marginTop: "7px",cursor:"pointer" }}>
                <HiOutlineTrash  size={20}/>
              </h3>
            </div>
          </div>
        </div>
      </div>
    ))
    : "No items in cart";
}
