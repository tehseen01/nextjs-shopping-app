"use client";

import { priceFormat } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setOrder } from "@/redux/slice/orderSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Page = () => {
  const dispatch = useAppDispatch();

  const { orders } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(setOrder());
  }, [dispatch]);

  return (
    <>
      {orders !== null ? (
        <main className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
          <h2 className="text-3xl font-bold">Order Details</h2>
          <div className="mt-3 text-sm">
            Check the status of recent and old orders & discover more products
          </div>
          <div className="mt-8 flex flex-col overflow-hidden md:flex-row">
            <div className="w-full bg-gray-100 md:max-w-xs">
              <div className="p-8">
                {orders !== null && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order ID</div>
                      <div className="text-sm font-medium text-gray-700">
                        #4389927834982
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Total Amounts</div>
                      <div className="text-sm font-medium text-gray-700">
                        {priceFormat(orders?.totalPrice)}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order status</div>
                      <div className="text-sm font-medium text-gray-700">
                        Confirmed
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="p-8">
                <ul className="-my-7 divide-y divide-gray-200">
                  {orders !== null &&
                    orders.items.map((product) => (
                      <li key={product._id}>
                        <Link
                          href={product._id}
                          className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                        >
                          <div className="flex flex-1 items-stretch">
                            <div className="flex-shrink-0">
                              <Image
                                width={50}
                                height={50}
                                className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                src={product.img}
                                alt={product.img}
                              />
                            </div>

                            <div className="ml-5 flex flex-col justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900">
                                  {product.title}
                                </p>
                              </div>

                              <p className="mt-4 text-sm font-medium text-gray-500">
                                x {product.quantity}
                              </p>
                            </div>
                          </div>

                          <div className="ml-auto flex flex-col items-end justify-between">
                            <p className="text-right text-sm font-bold text-gray-900">
                              {priceFormat(product.price)}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
                <hr className="my-8 border-t border-t-gray-200" />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div>No Orders!</div>
      )}
    </>
  );
};

export default Page;
