// "use client";
// import { useRouter } from "next/router";
// import React from "react";

// export default function ProductCheckout() {
//   const router = useRouter();

//   const onSubmitAddress = async () => {
//     try {
//       //   const docRef = await addDoc(collection(db, "Card"), {
//       //     Email: email,
//       //     Name: name,
//       //     Country: country,
//       //     Address: address,
//       //   });

//       alert("Address submitted successfully");
//       router.push("/order");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <div className="flex flex-wrap">
//       <div
//         style={{ height: "100%", width: 600 }}
//         className="mt-2 shadow p-3 bg-body-white rounded"
//       >
//         <div>
//           <h3 className="text-3xl text-center font-sans font-bold">
//             Card Details
//           </h3>
//           <br />
//           <hr />
//           <div className="flex flex-wrap justify-around gap-2">
//             <div>
//               <Image
//                 className="img-fluid mt-3"
//                 width={80}
//                 src={card1}
//                 alt={"card"}
//               />
//             </div>
//             <div>
//               <Image
//                 className="img-fluid"
//                 width={80}
//                 src={card2}
//                 alt={"card"}
//               />
//             </div>
//             <div>
//               <Image
//                 className="img-fluid mt-2"
//                 width={100}
//                 src={card3}
//                 alt={"card"}
//               />
//             </div>
//           </div>
//           <hr />
//           <br />
//           <h6 className="font-sans font-bold">Shipping information</h6>
//           <br />
//           <p>Email</p>
//           <input
//             required
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email"
//             className="w-[100%] border border-gray-200 py-2 px-6 rounded"
//           />
//           <br />
//           <br />
//           <p>Shipping Address</p>
//           <input
//             required
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
//             type="text"
//             placeholder="Name"
//           />
//           <input
//             required
//             onChange={(e) => setCountry(e.target.value)}
//             className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
//             type="text"
//             placeholder="Country"
//           />
//           <input
//             required
//             onChange={(e) => setAddress(e.target.value)}
//             className="mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded"
//             type="text"
//             placeholder="Address"
//           />
//           <br />
//           <br />
//           <div className="flex flex-wrap justify-between p-2">
//             <div>
//               <h5 className="font-sans text-lg font-bold">Subtotal</h5>
//             </div>
//             <div>
//               <h6 className="font-sans text-lg font-bold">$0.00</h6>
//             </div>
//           </div>
//           <hr />
//           <div className="flex flex-wrap justify-between p-2">
//             <div>
//               <h5 className="font-sans text-lg font-bold">Delivery Charges</h5>
//             </div>
//             <div>
//               <h6 className="font-sans text-lg font-bold">$0.00</h6>
//             </div>
//           </div>
//           <hr />
//           <div className="flex flex-wrap justify-between p-2">
//             <div>
//               <h5 className="font-sans text-lg font-bold">Total</h5>
//             </div>
//             <div>
//               <h6 className="font-sans text-lg font-bold">$0.00</h6>
//             </div>
//           </div>
//           <hr />

//           <div className="container px-10 mx-0 min-w-full flex flex-col items-center">
//             <button
//               onClick={onSubmitAddress}
//               className="mt-3 bg-[#ff3333] text-white hover:bg-black font-bold py-2 px-4 rounded"
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
