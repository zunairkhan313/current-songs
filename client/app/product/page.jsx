"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Link from "next/link";
import data_products from "../Assests/product";
import ProductCard from "../Components/products/productCard";
import React, { useState, useEffect } from "react";
import config from "@/utils/config";
import { useSearchParams } from "next/navigation";

const Product = () => {
  const { data: session } = useSession();
  let addButton;

  if (session?.user?.email === "admin123@gmail.com") {
    addButton = (
      <Link href={"/admin"}>
        <button className="custom-file-upload">
          <span className="font-bold">Add Product</span> <ControlPointIcon />
        </button>
      </Link>
    );
  }

  const params = useSearchParams();
  let id = params.get("id");

  const [allProducts, setAllProducts] = useState([]);

  const handleGetProducts = async () => {
    try {
      fetch(`http://localhost:3000/api/products`)
        .then((res) => res.json())
        .then((data) =>
          setAllProducts(
            data.Products.filter((item) => item.category_id === id) || []
          )
        )
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [id]);

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
              <h1 className="heading text-black font-bold">Products</h1>
            </div>
            <div className="mt-2">{addButton}</div>
          </div>
          <div className="hr-products"></div>
          <div className="flex flex-wrap justify-around">
            {allProducts?.length > 0 ? (
              allProducts.map((item, i) => (
                <ProductCard key={i} item={item} onReload={handleGetProducts} />
              ))
            ) : (
              <div className=" py-5 my-5 ">No products found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
