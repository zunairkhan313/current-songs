"use client"

import Image from "next/image";
import logo from '../../public/Images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";



export default function Footer() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    return (

        <div style={{"backgroundColor":"#ff3333"}} className="container-fluid mt-4" >
            <div className="container">
             

                <div className="row ">
                    <div className="col-lg-4 flex flex-wrap justify-center align-center">
                        <div>

                            <Image
                                style={{ "marginLeft": "55px" }}
                                width={160}
                                src={logo}
                                alt='logo'
                            />
                            <h1 className="text-2xl font-bold text-center text-black">Get in touch with us!</h1>
                            <div className="font-normal text-[18px] mt-3">
                                <p className="icon-hover">
                                    <FaPhoneAlt className="inline mr-2 text-black" />
                                    <a href="tel:+923337009944" className="hover:text-black text-black ">Tel: +92 333 7009944</a>
                                </p>
                                <p className="icon-hover">
                                    <MdAttachEmail className="inline mr-2 text-black" />
                                    <a href="mailto:Info@songchuantools.pk" className="hover:text-black text-black ">Email: Info@songchuantools.pk</a>
                                </p>
                            </div>
                            <div className="flex justify-center mt-4">
                                <Link href={"./contact"}>
                                <button className="text-white bg-black text-sm p-3 hover:rounded-[10px] rounded-[5px]">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 flex flex-wrap justify-center align-center mt-5">
                        <div>
                            <h3 className="text-center font-bold tracking-widest text-2xl text-white">EXPLORE</h3>
                            <div className="mt-5">

                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="/">Home</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="/about">About Us</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="/product">Products</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">News</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Knowledge</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="/contact">Contact Us</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 flex flex-wrap justify-center align-center mt-5">
                        <div>
                            <h3 className="text-center font-bold tracking-widest text-2xl text-white">PRODUCTS</h3>
                            <div className="mt-5">

                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Decoration Tools</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Electronic Tools</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Scissor</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Cutting Tools</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Automotive Tools</a></p>
                                <p className="mt-2 text-md text-center hover:text-white text-black"><a href="">Pneumatic Tools</a></p>
                            </div>
                        </div>
                    </div>
                </div><br />

                <div className="flex flex-wrap justify-center align-center bg-black py-3 justify-around">

                    <div className="mt-1">
                        <p className="text-white text-[13px]">Copyright ©️ 2024 <span className="text-white font-bold">SONGCHUAN</span> - All Rights Reserved</p>
                    </div>
       
                        <div className="flex justify-center items-center ">
                            <a href="https://www.facebook.com/profile.php?id=61558927092217" className="hover:text-blue-500" onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaFacebook className={hoveredIcon === 'facebook' ? 'text-[#0866FF] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.tiktok.com/@songchuantools" className="hover:text-blue-400" onMouseEnter={() => setHoveredIcon('tiktok')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaTiktok className={hoveredIcon === 'tiktok' ? 'text-[#E62A5D] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.instagram.com/songchuantools/" className="hover:text-pink-500" onMouseEnter={() => setHoveredIcon('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaInstagram className={hoveredIcon === 'instagram' ? 'text-[#B606E7] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/102889347/admin/dashboard/" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('linkedin')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaLinkedin className={hoveredIcon === 'linkedin' ? 'text-[#0A66C2] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC8CzedJLiiWPN10OfZ3eQ3g" className="hover:text-blue-700" onMouseEnter={() => setHoveredIcon('youtube')} onMouseLeave={() => setHoveredIcon(null)}>
                                <FaYoutube className={hoveredIcon === 'youtube' ? 'text-[#FF0000] mx-2' : 'text-white mx-2'} size={24} />
                            </a>
                        </div>
                 
                </div><br />



            </div>
        </div>
    )
}