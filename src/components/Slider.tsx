"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "./ui/button";
import { priceFormat } from "@/lib/utils";
import Link from "next/link";

const Slider = () => {
  return (
    <section className=" relative">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        className="sm:h-[350px] h-[200px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <Link href={`/${slide.id}`}>
              <figure className="h-full">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill={true}
                  quality={100}
                  className="max-sm:object-cover"
                />
              </figure>
              <div className="absolute left-12 top-1/2 -translate-y-1/2 md:max-w-sm max-w-xs">
                <h2 className="md:text-6xl text-4xl">{slide.title}</h2>
                <div className="flex items-center gap-2 py-4">
                  <span className="text-2xl">{priceFormat(slide.price)}</span>
                  <del className="text-gray-500 text-xl">
                    {priceFormat(slide.discountPrice)}
                  </del>
                </div>
                <div>
                  <Button>Buy now</Button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;

const slides = [
  {
    id: "64ba6b7c9a61845ba6b4f5a5",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932562/ecom/slider/realmebuds_wnxmdx.webp",
    title: "realme Buds Wireless 3",
    price: 1799,
    discountPrice: 2399,
    align: "left",
  },
  {
    id: "64ba67d69a61845ba6b4f5a4",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932563/ecom/slider/1_Nord35G-desktop_mgdkzw.webp",
    title: "OnePlus nord 3 5G",
    price: 39999,
    discountPrice: 42999,
    align: "left",
  },
  {
    id: "64ba6ec19a61845ba6b4f5a6",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932564/ecom/slider/mi-12_lens37.webp",
    title: "Xiomi 12 pro",
    price: 41999,
    discountPrice: 79999,
    align: "left",
  },
];
