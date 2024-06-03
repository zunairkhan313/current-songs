"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "../Components/hr.css";
import config from "@/utils/config";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [code, setCode] = useState("");

  const handleUploadImage = (e) => {
    const files = e.target.files;
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        urls.push(e.target.result);
        if (urls.length === files.length) {
          setImg(urls);
        }
      };

      reader.readAsDataURL(files[i]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/products`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, img , price , code}),
      });

      if (res.ok) {
        alert("Product created successfully");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <div className="container mt-5">
        <div className="lg:text-5xl md:text-3xl sm:text-2xl font-extrabold tracking-wider bgVideoText">
          <h1 className="heading text-black font-bold">Admin Panel</h1>
        </div>
        <div className="hr-admin"></div>
        <br />
        <br />
        <div className="flex justify-around">
          <div className="col-lg-6 col-md-6">
            <form onSubmit={handleSubmit}>
              <div
                style={{ border: "1px solid gray" }}
                className="container mt-5 p-4 rounded border-gray-200"
              >
                <h1 className="text-3xl font-bold text-center mb-1">
                  Add Product
                </h1>
                <hr />
                <br />
                <label>Title</label>
                <br />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                  type="text"
                  placeholder="Title"
                />
                <br />
                <br />
                <label>Description</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                  type="text"
                  placeholder="Description"
                />
                <br />
                <br />
                <label>Price</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                  type="text"
                  placeholder="Price"
                />
                <br />
                <br />
                <label>Code</label>
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                  type="text"
                  placeholder="Code"
                />
                <br />
                <br />
                <label
                  htmlFor="file-upload"
                  className="custom-file-upload1 w-[100%]"
                >
                  <div className="flex justify-between">
                    <div>Image Upload</div>
                    <div>
                      <ControlPointIcon />
                    </div>
                  </div>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="w-[100%]"
                  onClick={handleUploadImage}
                />
                <br />
                <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
                  <button
                    type="submit"
                    className="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;