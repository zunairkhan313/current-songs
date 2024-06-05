"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Link from "next/link";
import data_products from "../Assests/product";
import ProductCard from "../Components/products/productCard";
import React, { useState, useEffect } from "react";
import config from "@/utils/config";

const Product = () => {
  const { data: session } = useSession();
  let addButton;

  if (session?.user?.name === "ADMIN") {
    addButton = (
      <Link href={"/admin"}>
        <button className="custom-file-upload">
          <span className="font-bold">Add Product</span> <ControlPointIcon />
        </button>
      </Link>
    );
  }

  const [allProducts, setAllProducts] = useState([]);

  const handleGetProducts = async () => {
    try {
      fetch(`http://localhost:3000/api/products`)
        .then((res) => res.json())
        .then((data) => setAllProducts(data.Products || []))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>

      <div>
        <div className="container mt-5">
          <div className="flex justify-between">
            <div className="text-5xl font-extrabold tracking-wider bgVideoText ">
              <h1 className="heading text-black font-bold">Our Products</h1>
            </div>
            <div className="mt-2">{addButton}</div>
          </div>
          <div className="hr-products"></div>
          <div className="flex flex-wrap justify-around">
            {allProducts.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Product;
