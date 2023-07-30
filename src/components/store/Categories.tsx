"use client";

import useDeviceSize from "@/lib/useDeviceSize";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Categories = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { width } = useDeviceSize();

  let size;

  switch (true) {
    case width > 768:
      size = 8;
      break;
    case width >= 550:
      size = 5.5;
      break;
    case width >= 375:
      size = 4.5;
      break;
    case width < 375:
      size = 3.5;
      break;
    default:
      size = 2;
      break;
  }

  return (
    <section className="pt-2">
      <Swiper slidesPerView={size} spaceBetween={10} className=" w-full">
        {categories.map((category, index) => (
          <SwiperSlide key={category._id}>
            <Link
              href={`/store/${category.value.toLowerCase()}`}
              className="grid justify-items-center pb-4 relative link-hover"
              onClick={() => setActiveTab(index)}
            >
              <figure>
                <Image
                  src={category.icon}
                  width={60}
                  height={60}
                  alt={category.value}
                />
              </figure>
              <span className="text-sm whitespace-nowrap">
                {category.value}
              </span>
              <div
                className={clsx(
                  activeTab === index ? "w-full" : "",
                  "h-[1px] w-0 absolute left-0 bottom-0 red-line bg-red-600 transition-transform"
                )}
              ></div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Categories;

const categories = [
  {
    _id: "64aff184478b0249323b175d",
    label: "All",
    value: "All",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689255007/ecom/hardware_qwn4oo.png",
  },
  {
    _id: "64aff204478b0249323b1761",
    label: "Mobiles",
    value: "Mobiles",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689255007/ecom/communication_i7nnnm.png",
  },
  {
    _id: "64aff270478b0249323b1764",
    label: "Laptops",
    value: "Laptops",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689255007/ecom/notebook-computer_zpw7iv.png",
  },
  {
    _id: "64aff368478b0249323b1768",
    label: "Accessories",
    value: "Accessories",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689255008/ecom/earphones_tb48kt.png",
  },
  {
    _id: "64aff420478b0249323b176b",
    label: "Smart watches",
    value: "Smart watches",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689255007/ecom/smart-watch_qqlxpr.png",
  },
  {
    _id: "64b6865624cf32db35118af8",
    label: "TV & Display",
    value: "TV & Display",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689255007/ecom/smart-tv_cb19bi.png",
  },
  {
    _id: "64c5e5580c06622dfd4f94db",
    label: "Tablet",
    value: "Tablet",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1690690818/ecom/tablet_inlinb.png",
  },
];
