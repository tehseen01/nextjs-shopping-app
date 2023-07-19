import React from "react";
import { CardContent, Card, CardHeader, CardFooter } from "./ui/card";
import { IProduct } from "@/lib/interface";
import Image from "next/image";
import { priceFormat } from "@/lib/utils";
import { Button } from "./ui/button";
import useDeviceSize from "@/lib/useDeviceSize";

const Cards = ({ product }: { product: IProduct }) => {
  const { width } = useDeviceSize();

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("hello world");
  };

  return (
    <Card className="rounded-none grid items-center h-full">
      <CardHeader className="bg-gray-50 aspect-1/85 items-center justify-center p-0">
        <figure className="h-full">
          <Image
            src={product.thumbnail}
            width={width < 400 ? 100 : 200}
            height={width < 400 ? 100 : 200}
            alt={product.title}
            className="brightness-[0.98] w-full h-full object-scale-down p-6"
          />
        </figure>
      </CardHeader>
      <CardContent className="md:p-4 md:pb-0 p-2 pb-0">
        <p className="">
          {product.title.length > 40
            ? product.title.slice(0, 40) + "..."
            : product.title}
        </p>
        <div className="flex items-center">
          <span className="text-[#f50514] text-sm flex-1">
            {product.discountPercentage}% OFF
          </span>
          <span>{product.rating}</span>
        </div>
        <div className="flex items-center py-2 gap-1">
          <span className="font-medium">{priceFormat(product.price)}</span>
          <del className="text-gray-500 text-xs">
            {product.discountPrice && priceFormat(product.discountPrice)}
          </del>
        </div>
      </CardContent>
      <CardFooter className="md:p-4 md:pt-0 p-2 pt-0">
        <Button
          className="border w-full h-10 rounded-none"
          onClick={(e) => {
            addToCart(e);
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
