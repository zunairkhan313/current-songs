"use client"
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide15 from "../../public/Images/slide15.JPG";
import slide1 from "../../public/Images/slide1.jpg";
import slide2 from "../../public/Images/slide2.JPG";
import slide3 from "../../public/Images/slide3.JPG";
import slide4 from "../../public/Images/slide4.JPG";
import slide5 from "../../public/Images/slide5.JPG";
import slide6 from "../../public/Images/slide6.JPG";
import slide7 from "../../public/Images/slide7.JPG";
import slide8 from "../../public/Images/slide8.JPG";
import slide9 from "../../public/Images/slide9.JPG";
import slide10 from "../../public/Images/slide10.jpg";
import slide11 from "../../public/Images/slide11.JPG";
import slide12 from "../../public/Images/slide12.JPG";
import slide13 from "../../public/Images/slide13.JPG";
import slide14 from "../../public/Images/slide14.JPG";
// Import Swiper styles
import 'swiper/css/grid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import Image from 'next/image';
import styles from './SpecialOffers.module.css';

export default function SpecialOffers() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Grid]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide12} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Drill Machines <br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide7} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Cutting Tools <br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide6} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Holding Tools <br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide4} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Tools Box <br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide3} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Screwdrive Series <br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide2} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Percussion Tools<br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide1} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Tools Set<br />  Company: Songchuan <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#ff3333" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
