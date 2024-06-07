"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const getAllCheckouts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/checkout", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error loading topics: ", error);
    return null; // Return null in case of error
  }
};

const UserAddress = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data: session } = useSession();

  let userId = session?.user?.id;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCheckouts();
      console.log("userId", userId);
      console.log("checkouts", result?.Checkouts);
      setData(
        result?.Checkouts?.filter(
          (item) => item?.user_id === userId
        )?.reverse()[0]
      );
      setLoading(false);
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading topics or no topics available.</div>;
  }

  return (
    <>
      {
        <div key={data?._id}>
          <p>Email : {data?.email}</p>
          <br />
          {/* <h6 className="font-sans font-bold">
                        Shipping Address
                    </h6> */}

          <p>Name : {data?.name}</p>
          <br />
          <p>Country : {data?.country}</p>
          <br />
          <p>Address : {data?.address}</p>
          <br />
        </div>
      }
    </>
  );
};

export default UserAddress;
