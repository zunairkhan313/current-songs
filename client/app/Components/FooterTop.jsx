import React from 'react'
import truck from "../../public/Images/truck.webp"
import logo24 from "../../public/Images/24.webp"
import mastercard from "../../public/Images/mastercard.webp"
import delievery from "../../public/Images/delievery.webp"
import Image from 'next/image'


const FooterTop = () => {
    return (
        <div className='bg-white'>
            <div style={{ "backgroundColor": "#ff3333" }} className="container-fluid mt-5 p-5">

                <div className="flex flex-wrap justify-around">
                    <div className="flex gap-3">
                        <div className="font-bold text-6xl">
                            <Image
                                src={truck}
                                width={"80px"}
                                alt="truck"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-white mt-1">Low Cost Shipping.</p>
                            <p style={{ "color": "rgb(240, 240, 240)" }} className="text-sm mt-2 ">No one rejects, dislikes.</p>
                        </div>
                    </div>
                    <div style={{ borderLeft: "1px solid rgb(240, 240, 240)" }} ></div>
                    <div className="flex gap-3">
                        <div className="font-bold text-6xl">
                            <Image
                                src={logo24}
                                width={"80px"}
                                alt="truck"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-white mt-1">
                                24/7 Support.</p>
                            <p style={{ "color": "rgb(240, 240, 240)" }} className="text-sm mt-2">Friendly Online Support</p>
                        </div>
                    </div>
                    <div style={{ borderLeft: "1px solid rgb(240, 240, 240)" }} ></div>
                    <div className="flex gap-3">
                        <div className="font-bold text-6xl">
                            <Image
                                src={mastercard}
                                width={"80px"}
                                alt="truck"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-white mt-1">Online Payment.</p>
                            <p style={{ "color": "rgb(240, 240, 240)" }} className="text-sm mt-2 ">Also Pay Through Card</p>
                        </div>
                    </div>
                    <div style={{ borderLeft: "1px solid rgb(240, 240, 240)" }} ></div>
                    <div className="flex gap-3">
                        <div style={{marginLeft:"-24px"}} className="font-bold text-6xl">
                            <Image
                                src={delievery}
                                width={"80px"}
                                alt="truck"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-white mt-1">Fast Delivery.</p>
                            <p style={{ "color": "rgb(240, 240, 240)" }} className="text-sm mt-2">Under 3-5 Working Days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
