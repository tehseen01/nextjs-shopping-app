import React from "react";
import { CardContent, Card, CardHeader, CardFooter } from "./ui/card";
import { IProduct } from "@/lib/interface";
import Image from "next/image";
import { priceFormat } from "@/lib/utils";
import { Button } from "./ui/button";
import useDeviceSize from "@/lib/useDeviceSize";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, setTotal } from "@/redux/slice/cartSlice";

const Cards = ({ product }: { product: IProduct }) => {
  const { width } = useDeviceSize();

  const {
    _id,
    price,
    title,
    thumbnail,
    discountPercentage,
    rating,
    discountPrice,
  } = product;

  const dispatch = useAppDispatch();

  const addToCartHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(addToCart({ _id, price, title, img: thumbnail, quantity: 1 }));
    dispatch(setTotal());
  };

  return (
    <Link href={`/${_id}`}>
      <Card className="rounded-none grid items-center h-full">
        <CardHeader className="bg-gray-50 aspect-1/85 items-center justify-center p-0">
          <figure className="h-full">
            <Image
              src={thumbnail}
              width={width < 400 ? 100 : 200}
              height={width < 400 ? 100 : 200}
              alt={title}
              className="brightness-[0.98] w-full h-full object-scale-down p-6"
            />
          </figure>
        </CardHeader>
        <CardContent className="md:p-4 md:pb-0 p-2 pb-0">
          <p className="">
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
          </p>
          <div className="flex items-center">
            <span className="text-[#f50514] text-sm flex-1">
              {discountPercentage}% OFF
            </span>
            <span>{rating}</span>
          </div>
          <div className="flex items-center py-2 gap-1">
            <span className="font-medium">{priceFormat(price)}</span>
            <del className="text-gray-500 text-xs">
              {discountPrice && priceFormat(discountPrice)}
            </del>
          </div>
        </CardContent>
        <CardFooter className="md:p-4 md:pt-0 p-2 pt-0">
          <Button
            className="border w-full h-10 rounded-none"
            onClick={(e) => {
              addToCartHandle(e);
            }}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Cards;
