import React from 'react';
import "../Components/hr.css";
import about1 from "../../public/Images/slide6.JPG";
import about2 from "../../public/Images/slide1.jpg";
import about3 from "../../public/Images/slide2.JPG";
import about4 from "../../public/Images/slide3.JPG";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>
            <div className='bg-white'>

                <div className='bg-white mt-5 container p-3'>
                    <div className=" flex">
                        <div className="text-5xl font-extrabold tracking-wider bgVideoText ">
                            <h1 className="heading text-black font-bold">About Us</h1>
                        </div>
                    </div>
                    <div className="hr-about"></div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <h1 style={{ "color": "#ff3333" }} className="text-lg font-bold text-green-800 tracking-widest mt-4">COMPANY PROFILE</h1>
                            <h3 className="text-4xl font-bold text-black">WHO WE ARE</h3><br />
                            <p className="text-[16px]">The satisfaction of building something with your own hands has been a cornerstone of human ingenuity. At Songchuan Tools, we believe the journey of creation should be fueled by both precision and passion. That&apos;s why we offer a comprehensive selection of hand tools and power tools. <br /><br />
                                Our meticulously curated collection of hand tools boasts timeless classics like hammers, screwdrivers, saws, and wrenches, all crafted from the finest materials for exceptional durability and control. <br /><br />
                                But for those seeking to leverage the power of technology, we also offer a robust lineup of power tools. From high-performance drills and impact drivers to versatile saws and sanders, our selection empowers you to tackle demanding tasks with efficiency and accuracy. <br /><br />
                                We understand that every project is unique, and that&apos;s why we go beyond just tools. We offer a wealth of resources, including instructional guides and expert tips, to help you navigate your project with confidence.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about1}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ "height": "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-4">OUR FACTORY</h3><br />
                            <p className="text-[16px]">Songchuan takes pride in its position as a leading manufacturer of hand tools and power tools. Our state-of-the-art factories, humming with cutting-edge technology, leverage stringent quality control processes at every stage to ensure excellence. This meticulous attention to detail ensures that every tool we produce, from the classic essentials like hammers and wrenches that have built civilizations, to the innovative cordless drills and powerful saws that continue to push the boundaries of construction, meets the highest international standards. <br /><br />In addition to our commitment to quality, we are also deeply invested in sustainability and responsible manufacturing practices. Our factories are designed to minimize environmental impact, incorporating energy-efficient systems and sustainable materials wherever possible. By prioritizing eco-friendly practices, we not only produce superior tools but also contribute to a healthier planet. Our dedicated workforce, skilled in the latest manufacturing techniques, is continuously trained to uphold our standards of excellence and innovation. Choosing Songchuan isn&apos;t just selecting a brand; it&apos;s choosing a partner who understands the deep-seated value of hard work and dedication.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about2}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ "height": "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-3">OUR VISION</h3><br />
                            <p className="text-[16px]">Songchuan Tools envisions a limitless horizon for creativity. We imagine a world where power and hand tools become an extension of the user&apos;s will, effortlessly translating ideas into reality with unmatched efficiency and precision. This vision is fueled by our conviction that powerful yet intuitive and accessible tools hold the key to democratizing creation. We are committed to shaping a future where seasoned professionals and aspiring enthusiasts alike can access the tools they need to turn their dreams into tangible creations. <br /><br />
                                Songchuan Tools envisions a limitless horizon for creativity, where the boundaries of imagination are constantly expanded by the capabilities of our tools. We imagine a world where both power and hand tools seamlessly integrate into the user&apos;s workflow, becoming a natural extension of their will and skill. Our tools are designed to effortlessly translate ideas into reality with unmatched efficiency and precision, empowering creators at every level.
                                <br /><br />
                                This ambitious vision is fueled by our unwavering conviction that powerful yet intuitive and accessible tools are the cornerstone of democratizing creation. We believe that when creators, whether seasoned professionals or aspiring enthusiasts, are equipped with the right tools, the possibilities are boundless.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about3}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ "height": "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-4">OUR MISSION</h3><br />
                            <p className="text-[16px]">
                                We achieve this by offering a comprehensive selection of industry-leading power tools and dependable hand tools. We believe the right tools are vital for transforming ideas into reality. That&apos;s why we&apos;re committed to providing solutions that empower users to tackle any project with confidence.
                                <br /><br />
                                Our unwavering commitment to innovation fuels the development of cutting-edge power tools renowned for exceptional performance and durability. We invest heavily in research and development to ensure our power tools integrate the latest advancements, delivering unmatched efficiency and functionality to conquer even the most demanding tasks.
                                <br /><br />
                                We achieve this by offering a comprehensive selection of industry-leading power tools and dependable hand tools, meticulously designed to meet the diverse needs of our users. At Songchuan Tools, we believe that the right tools are vital for transforming ideas into reality. That&apos;s why we are committed to providing solutions that empower users to tackle any project with confidence, from simple DIY tasks to complex professional endeavors.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about4}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ "height": "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default About;
