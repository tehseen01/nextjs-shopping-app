"use client";

import Cards from "@/components/Card";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { allProducts } = useAppSelector((state) => state.product);

  return (
    <div className="p-4">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {allProducts &&
          allProducts?.products.map((product) => (
            <Link key={product._id} href={`/${product._id}`}>
              <Cards product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Page;
