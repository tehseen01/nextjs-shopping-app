"use client";

import { ICategory } from "@/lib/interface";
import useDeviceSize from "@/lib/useDeviceSize";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Categories = ({ data }: { data: ICategory[] }) => {
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
        {data.map((cat, index) => (
          <SwiperSlide key={cat._id}>
            <Link
              href={`/store/${cat.value.toLowerCase()}`}
              className="grid justify-items-center pb-4 relative link-hover"
              onClick={() => setActiveTab(index)}
            >
              <figure>
                <Image src={cat.icon} width={60} height={60} alt={cat.value} />
              </figure>
              <span className="text-sm whitespace-nowrap">{cat.value}</span>
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
