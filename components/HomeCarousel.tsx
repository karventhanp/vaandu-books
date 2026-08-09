"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface HomeCarouselProps {
    id?: string;
}



export default function HomeCarousel({ id }: HomeCarouselProps) {
    let slides = [
        "/assets/carousel-1.jpg",
        "/assets/carousel-2.jpg",
        "/assets/carousel-3.jpg",
        "/assets/carousel-4.jpg",
        "/assets/carousel-5.jpg",
        "/assets/carousel-6.jpg",
        "/assets/carousel-7.jpg",
    ];

    if (id === "events") {
        slides = [
            "/assets/screen-1.jpg",
            "/assets/screen-2.jpg",
            "/assets/screen-3.jpg",
            "/assets/screen-4.jpg",
        ]
    }
    return (
        <Swiper className="w-full" modules={[Autoplay, Pagination]} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ clickable: true, el: `.swiper-pagination-${id}` }}>
            {slides.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}