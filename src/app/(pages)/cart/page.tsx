"use client";

import { Button } from "@/components/ui/button";
import useDeviceSize from "@/lib/useDeviceSize";
import { priceFormat } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  decItem,
  incItem,
  removeCart,
  setTotal,
} from "@/redux/slice/cartSlice";
import { Plus, X } from "lucide-react";
import { Minus } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const Page = () => {
  const { width } = useDeviceSize();

  const dispatch = useAppDispatch();
  const { cart, totalPrice } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setTotal());
  }, [dispatch]);

  return (
    <main className="bg-gray-100 h-[100dvh] relative">
      <section className="py-4">
        {cart.length > 0 ? (
          cart.map((cart) => (
            <div
              className="flex items-center gap-4 p-4 md:px-8 bg-white mb-4"
              key={cart._id}
            >
              <div>
                <figure className="sm:w-28 sm:h-28 w-16 h-16">
                  <Image
                    src={cart.img}
                    width={width > 640 ? 100 : 60}
                    height={width > 640 ? 100 : 60}
                    alt={cart.title}
                    className="w-full h-full object-scale-down"
                  />
                </figure>
              </div>
              <div className="flex-1 flex sm:items-center max-sm:justify-between max-sm:flex-col">
                <h2 className="md:text-xl font-medium flex-1">{cart.title}</h2>
                <div className="flex-1 flex items-center">
                  <p className="md::text-lg flex-1">
                    {priceFormat(cart.price)}
                  </p>
                  <div className="flex-1 flex items-center md:justify-center justify-end">
                    <button
                      className="w-6 h-6 sm:w-8 sm:h-8 border flex items-center justify-center hover:bg-gray-100 disabled:cursor-not-allowed "
                      disabled={cart.quantity <= 1}
                      onClick={() => {
                        dispatch(decItem(cart._id));
                        dispatch(setTotal());
                      }}
                    >
                      <Minus strokeWidth={1.5} size={18} />
                    </button>
                    <span className="w-10 h-6 sm:w-12 sm:h-8 inline-flex items-center justify-center border-t border-b">
                      {cart.quantity}
                    </span>
                    <button
                      className="w-6 h-6 sm:w-8 sm:h-8 border flex items-center justify-center hover:bg-gray-100"
                      onClick={() => {
                        dispatch(incItem(cart._id));
                        dispatch(setTotal());
                      }}
                    >
                      <Plus strokeWidth={1.5} size={18} />
                    </button>
                  </div>
                  <div className="flex-1 hidden md:flex items-center justify-end">
                    <button
                      className=" w-4 h-4 hover:scale-125"
                      onClick={() => {
                        dispatch(removeCart(cart._id));
                        dispatch(setTotal());
                      }}
                    >
                      <X strokeWidth={1.5} size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center pt-8">
            <p className="text-4xl font-medium">Your cart is empty!</p>
          </div>
        )}
      </section>
      <div className="fixed bottom-0 inset-x-0 px-8 h-[72px] bg-white flex gap-8 items-center justify-end">
        <p className="font-medium text-xl">{priceFormat(totalPrice)}</p>
        <Button size={"lg"} className="rounded-none ">
          Checkout
        </Button>
      </div>
    </main>
  );
};

export default Page;
