"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import card1 from "../../public/Images/card1.png";
import card2 from "../../public/Images/card2.png";
import card3 from "../../public/Images/card3.png";
import ProductCardCheckout from "./products/ProductCardCheckout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function OrderPage({ addressData }) {
  const { cart } = useSelector((state) => state.cart);

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

  const onSubmitOrder = () => {
    alert("Order placed successfully!");
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
          <h1 className="heading text-black font-bold">Pay</h1>
        </div>
        <div className="hr-cart"></div>

        <Row>
          <Col sm={12} md={7}>
            <div className="container mt-5">
              <div className="flex flex-wrap">
                <ProductCardCheckout />
              </div>
            </div>
          </Col>

          <Col md={5}>
            <div className="container mt-5">
              <div className="flex flex-wrap">
                <div
                  style={{ height: "100%", width: 600 }}
                  className="mt-2 shadow p-3 bg-body-white rounded"
                >
                  <div>
                    <h3 className="text-3xl text-center font-sans font-bold">
                      Order Place
                    </h3>
                    <br />
                    <hr />
                    <div className="flex flex-wrap justify-around gap-2">
                      <div>
                        <Image
                          className="img-fluid mt-3"
                          width={80}
                          src={card1}
                          alt="card"
                        />
                      </div>
                      <div>
                        <Image
                          className="img-fluid"
                          width={80}
                          src={card2}
                          alt="card"
                        />
                      </div>
                      <div>
                        <Image
                          className="img-fluid mt-2"
                          width={100}
                          src={card3}
                          alt="card"
                        />
                      </div>
                    </div>
                    <hr />
                    <br />
                    <h6 className="font-sans font-bold">
                      Shipping information
                    </h6>
                    <br />
                    {addressData.map((card) => (
                      <div key={card.id}>
                        <p>Email : {card.Email}</p>
                        <br />
                        <h6 className="font-sans font-bold">
                          Shipping Address
                        </h6>
                        <br />
                        <p>Name : {card.Name}</p>
                        <br />
                        <p>Country : {card.Country}</p>
                        <br />
                        <p>Address : {card.Address}</p>
                        <br />
                      </div>
                    ))}
                    <br />
                    <div className="flex flex-wrap justify-between p-2">
                      <div>
                        <h5 className="font-sans text-lg font-bold">
                          Subtotal
                        </h5>
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
                        <h6 className="font-sans text-lg font-bold">
                          ${total}
                        </h6>
                      </div>
                    </div>
                    <hr />
                    <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
                      <button
                        onClick={onSubmitOrder}
                        className="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded"
                      >
                        Order Place
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

OrderPage.propTypes = {
  addressData: PropTypes.arrayOf(
    PropTypes.shape({
      Email: PropTypes.string,
      Name: PropTypes.string,
      Country: PropTypes.string,
      Address: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default OrderPage;
