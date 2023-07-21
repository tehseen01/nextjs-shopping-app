import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ProductImgSlider = ({ images }: { images: string[] }) => {
  return (
    <div className="bg-gray-50 md:h-[calc(100vh_-_120px)] max-md:aspect-square overflow-hidden flex-1">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        className="h-full swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <figure className="h-full">
              <Image
                src={img}
                width={500}
                height={500}
                alt={img}
                className="brightness-[0.98] w-full h-full object-scale-down"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImgSlider;
