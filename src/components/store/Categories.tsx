"use client";

import { ICategory } from "@/lib/interface";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Categories = ({ data }: { data: ICategory[] }) => {
  return (
    <section>
      <div className="grid grid-cols-8 p-4 pb-0">
        {data.map((cat) => (
          <Link
            href={`/store/${cat.value.toLowerCase()}`}
            key={cat._id}
            className="grid justify-items-center pb-4 relative link-hover"
          >
            <figure>
              <Image src={cat.icon} width={60} height={60} alt={cat.value} />
            </figure>
            <span className="text-sm whitespace-nowrap">{cat.value}</span>
            <div className="h-[1px] w-0 absolute left-0 bottom-0 red-line bg-red-600 transition-transform"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
