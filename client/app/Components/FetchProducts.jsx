
import React, { useEffect, useState } from 'react';

const getTopics = async () => {
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

const TopicsList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTopics();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data || !data.Checkouts) {
        return <div>Error loading topics or no topics available.</div>;
    }

    return (
        <>
            {data.Checkouts.map((t) => (
                <div
                    key={t._id}

                >
                    <p>Email : {t.email}</p>
                    <br />
                    {/* <h6 className="font-sans font-bold">
                        Shipping Address
                    </h6> */}
                
                    <p>Name : {t.name}</p>
                    <br />
                    <p>Country : {t.country}</p>
                    <br />
                    <p>Address : {t.address}</p>
                    <br />
                </div>
            ))}
        </>
    );
};

export default TopicsList;
