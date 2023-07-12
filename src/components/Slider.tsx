"use client";

import clsx from "clsx";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const arr = ["yellow", "blue", "gray", "green"];

  return (
    <section className=" relative">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[200px]"
      >
        {arr.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={clsx(`bg-${slide}-400`)}>{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
