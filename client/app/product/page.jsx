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

        {/* <div className="flex flex-wrap justify-around">
          {allImage.map((el, index) => (
            <div
              key={index}
              style={{ height: "100%", width: 300 }}
              className="mt-5 shadow p-3 mb-5 bg-body-tertiary rounded"
            >
              <div className="flex flex-wrap justify-around">
                <Image
                  src={el.image}
                  className="rounded"
                  width={300}
                  height={100}
                  alt="Uploaded Image"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-2xl ml-2 font-bold tracking-wider">
                  Tools
                </h4>
                <br />
              </div>
              <div className="mt-1">
                <h4 className="text-md ml-2">Hand Tools Power Tools</h4>
              </div>
              <div className="mt-2">
                <h4 className="text-md ml-2 font-bold">$0.00</h4>
                <br />
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
                  >
                    Buy now
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Product;
