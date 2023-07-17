import React from "react";
import { CardContent, Card, CardHeader, CardFooter } from "./ui/card";
import { IProduct } from "@/lib/interface";
import Image from "next/image";
import { priceFormat } from "@/lib/utils";
import { Button } from "./ui/button";

const Cards = ({ product }: { product: IProduct }) => {
  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("hello world");
  };

  return (
    <Card className="rounded-none grid items-center h-full">
      <CardHeader className="bg-gray-50 aspect-1/85 items-center justify-center relative p-4">
        <figure className="h-full">
          <Image
            src={product.thumbnail}
            width={200}
            height={200}
            alt={product.title}
            className="brightness-[0.98] w-full h-full object-scale-down"
          />
        </figure>
      </CardHeader>
      <CardContent className="p-4 pb-2">
        <p className="">
          {product.title.length > 40
            ? product.title.slice(0, 40) + "..."
            : product.title}
        </p>
        <div className="text-[#f50514] text-sm">
          {product.discountPercentage}% OFF
        </div>
        <div className="flex items-center py-2 gap-3">
          <span className="text-lg">{priceFormat(product.price)}</span>
          <del className="text-gray-500 text-sm">
            {product.discountPrice && priceFormat(product.discountPrice)}
          </del>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
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
