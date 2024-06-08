"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Link from "next/link";
import data_products from "../Assests/product";
import ProductCard from "../Components/products/productCard";
import React, { useState, useEffect } from "react";
import config from "@/utils/config";
import CategoriesCard from "../Components/categories/CategoriesCard";
import "../Components/hr.css"
const Category = () => {
  const { data: session } = useSession();
  let addButton;

  if (session?.user?.email === "admin123@gmail.com") {
    addButton = (
      <Link href={"/admin"}>
        <button className="custom-file-upload">
          <span className="font-bold">Add Category</span> <ControlPointIcon />
        </button>
      </Link>
    );
  }

  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);

  const handleGetProducts = async () => {
    try {
      fetch(`http://localhost:3000/api/category`)
        .then((res) => res.json())
        .then((data) => setAllProducts(data.Categories || []))
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
            <div className="text-[39px] font-extrabold tracking-wider bgVideoText ">
              <h1 className="heading text-black font-bold">Categories</h1>
            </div>
            <div className="mt-2">{addButton}</div>
          </div>
          <div className="hr-category"></div>
          <div className="flex flex-wrap justify-around">
            {allProducts.map((items, i) => (
              <CategoriesCard key={i} items={items} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Category;
