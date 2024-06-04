// components/ClientCart.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import card1 from "../../public/Images/card1.png";
import card2 from "../../public/Images/card2.png";
import card3 from "../../public/Images/card3.png";
import { useRouter } from "next/navigation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCardCart from "./products/productCardCart";
import { useSelector } from "react-redux";

export default function ClientCart() {
  const { cart } = useSelector((state) => state.cart);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(12);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSubTotal(
      new Number(
        cart.reduce((acc, item) => acc + parseInt(item.price), 0)
      ).toFixed(2)
    );
  }, [cart]);

  useEffect(() => {
    if (subTotal > 0) {
      setTotal(
        new Number(parseInt(subTotal) + parseInt(deliveryCharges)).toFixed(2)
      );
    }
  }, [subTotal]);

  // const onSubmitAddress = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "Card"), {
  //       Email: email,
  //       Name: name,
  //       Country: country,
  //       Address: address,
  //     });

  //     alert("Address submitted successfully");
  //     console.log("Document written with ID: ", docRef.id);
  //     router.push("/order"); // Navigate to the order page
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  const onSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/checkout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email , name , country , address }),
      });

      if (res.ok) {
        alert("Address submit successfully");
        router.push("/order");
      } else {
        throw new Error("Failed to submit address");
      }
    } catch (error) {
      console.error("Error creating topic:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-5xl font-extrabold tracking-wider bgVideoText ">
        <h1 className="heading text-black font-bold">Cart</h1>
      </div>
      <div className="hr-cart"></div>

      <Row>
        <Col sm={12} md={7}>
          <div className="container mt-5">
            <div className="flex flex-wrap">
              <ProductCardCart />
            </div>
          </div>
        </Col>

        {/* Price side */}
        <Col md={5}>
          <div className="container mt-5">
            <div className="flex flex-wrap">
              <div
                style={{ height: "100%", width: 600 }}
                className="mt-2 shadow p-3 bg-body-white rounded"
              >
                <div>
                  <h3 className="text-3xl text-center font-sans font-bold">
                    Shipping Information
                  </h3>
                  <br />
                  <hr />
                  <div className="flex flex-wrap justify-around gap-2">
                    <div>
                      <Image
                        className="img-fluid mt-3"
                        width={80}
                        src={card1}
                        alt={"card"}
                      />
                    </div>
                    <div>
                      <Image
                        className="img-fluid"
                        width={80}
                        src={card2}
                        alt={"card"}
                      />
                    </div>
                    <div>
                      <Image
                        className="img-fluid mt-2"
                        width={100}
                        src={card3}
                        alt={"card"}
                      />
                    </div>
                  </div>
                  <hr />
                  {/* <br />
                  <h6 className="font-sans font-bold">Shipping information</h6> */}
                  <br />
                  <p>Email</p>
                  <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-[100%] border border-gray-200 py-2 px-6 rounded"
                  />
                  <br />
                  <br />
                  <p>Shipping Address</p>
                  <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    required
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                    type="text"
                    placeholder="Country"
                  />
                  <input
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
                    type="text"
                    placeholder="Address"
                  />
                  <br />
                  <br />
                  <div className="flex flex-wrap justify-between p-2">
                    <div>
                      <h5 className="font-sans text-lg font-bold">Subtotal</h5>
                    </div>
                    <div>
                      <h6 className="font-sans text-lg font-bold">
                        ${subTotal}
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-wrap justify-between p-2">
                    <div>
                      <h5 className="font-sans text-lg font-bold">
                        Delivery Charges
                      </h5>
                    </div>
                    <div>
                      <h6 className="font-sans text-lg font-bold">
                        ${deliveryCharges}
                      </h6>
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-wrap justify-between p-2">
                    <div>
                      <h5 className="font-sans text-lg font-bold">Total</h5>
                    </div>
                    <div>
                      <h6 className="font-sans text-lg font-bold">${total}</h6>
                    </div>
                  </div>
                  <hr />

                  <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
                    <button
                      onClick={onSubmitAddress}
                      className="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
