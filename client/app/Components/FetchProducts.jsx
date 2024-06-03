// const getTopics = async () => {
//     try {
//         const res = await fetch("http://localhost:3000/api/topics", {
//             cache: "no-store",
//         });

//         if (!res.ok) {
//             throw new Error("Failed to fetch topics");
//         }

//         return res.json();
//     } catch (error) {
//         console.log("Error loading topics: ", error);
//     }
// };


// export default async function TopicsList() {
//     const { topics } = await getTopics();

//     return (
//         <>
//             {topics.map((t) => (
//                 <div
//                     key={t._id}
//                     style={{ height: "100%", width: 300 }}
//                     className="mt-5 shadow p-3 mb-5 bg-body-tertiary rounded"
//                 >
//                     <div className='flex flex-wrap justify-around'>

//                         {/* <Image
//                             style={{ "height": "250px" }}
//                             className='rounded object-cover'
//                             width={300}
//                             src={}
//                             alt={"tshirts"}
//                         /> */}
//                     </div>
//                     <div className="mt-4">
//                         <h4 className="text-2xl text-center font-bold tracking-wider">{t.title}</h4>
//                         <br />
//                     </div>
//                     <div className="mt-1">
//                         <h4 className="text-md ml-2">{t.description}</h4>
//                     </div>
//                     <div className="mt-2">
//                         <hr />
//                     </div>
//                     <div className="flex flex-wrap justify-around mt-3">
//                         <div>
//                             <button
//                                 style={{ backgroundColor: "#ff3333" }}
//                                 type="button"
//                                 className="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                             >
//                                 Buy now
//                             </button>
//                         </div>
//                         <div>
//                             <button
//                                 type="button"
//                                 className="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold"
//                             >
//                                 Add to cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// }


// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Image from 'next/image';

// // const getTopics = async () => {
// //     try {
// //         const res = await fetch("http://localhost:3000/api/topics", {
// //             cache: "no-store",
// //         });

// //         if (!res.ok) {
// //             throw new Error("Failed to fetch topics");
// //         }

// //         return res.json();
// //     } catch (error) {
// //         console.log("Error loading topics: ", error);
// //         return [];
// //     }
// // };

// // const fetchImages = async () => {
// //     try {
// //         const res = await fetch("http://localhost:8080/");
// //         if (!res.ok) {
// //             throw new Error("Failed to fetch images");
// //         }
// //         const data = await res.json();
// //         return data;
// //     } catch (error) {
// //         console.error("Error fetching images:", error);
// //         return [];
// //     }
// // };

// // const TopicsList = () => {
// //     const [topics, setTopics] = useState([]);
// //     const [allImage, setAllImage] = useState([]);


// //         const fetchData = async () => {
// //             const topicsData = await getTopics();
// //             setTopics(topicsData);

// //             const imagesData = await fetchImages();
// //             setAllImage(imagesData);
// //         };
// //         fetchData();


// //     return (
// //         <>
// //             {topics.map((t) => (
// //                 <div
// //                     key={t._id}
// //                     style={{ height: "100%", width: 300 }}
// //                     className="mt-5 shadow p-3 mb-5 bg-body-tertiary rounded"
// //                 >
// //                     <div className="flex flex-wrap justify-around">
// //                         {allImage.map((el, index) => (
// //                             <div key={index} className="m-4">
// //                                 <Image
// //                                     src={el.image}
// //                                     width={400}
// //                                     height={300}
// //                                     alt="Uploaded Image"
// //                                 />
// //                             </div>
// //                         ))}
// //                     </div>
// //                     <div className="mt-4">
// //                         <h4 className="text-2xl text-center font-bold tracking-wider">{t.title}</h4>
// //                         <br />
// //                     </div>
// //                     <div className="mt-1">
// //                         <h4 className="text-md ml-2">{t.description}</h4>
// //                     </div>
// //                     <div className="mt-2">
// //                         <hr />
// //                     </div>
// //                     <div className="flex flex-wrap justify-around mt-3">
// //                         <div>
// //                             <button
// //                                 style={{ backgroundColor: "#ff3333" }}
// //                                 type="button"
// //                                 className="text-white hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
// //                             >
// //                                 Buy now
// //                             </button>
// //                         </div>
// //                         <div>
// //                             <button
// //                                 type="button"
// //                                 className="text-red-700 hover:bg-[#ff3333] focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold"
// //                             >
// //                                 Add to cart
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             ))}
// //         </>
// //     );
// // };

// // export default TopicsList;
