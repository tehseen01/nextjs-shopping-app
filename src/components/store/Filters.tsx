"use client";

import React, { ChangeEvent } from "react";
import { Checkbox } from "../ui/checkbox";
import { IBrand } from "@/lib/interface";
import { Slider } from "../ui/slider";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setBrand,
  setOffer,
  setOpenFilter,
  setRating,
  setSort,
} from "@/redux/slice/filterSlice";
import clsx from "clsx";
import useDeviceSize from "@/lib/useDeviceSize";
import { Star, X } from "lucide-react";
import { Toggle } from "../ui/toggle";

const Filters = () => {
  const dispatch = useAppDispatch();
  const { width } = useDeviceSize();

  const { openFilter, sort, rating, offer } = useAppSelector(
    (state) => state.filter
  );

  const handleBrand = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    dispatch(setBrand(value));
  };

  return (
    <>
      <aside
        className={clsx(
          openFilter ? "max-md:translate-y-0" : "max-md:translate-y-[100%]",
          "border-r py-2 px-6 max-md:fixed max-md:inset-x-0 max-md:bottom-0 max-md:h-[80%] max-md:overflow-y-scroll max-md:z-30 bg-white  transition-transform"
        )}
      >
        {width < 768 && (
          <div className="flex items-center pb-4 pt-2">
            <h2 className="flex-1 font-medium text-2xl">Sort and filter</h2>
            <button onClick={() => dispatch(setOpenFilter(false))}>
              <X strokeWidth={1.25} />
            </button>
          </div>
        )}

        {/* ------SORT FILTER------ */}
        <div className="mb-8">
          <h3 className="font-medium mb-4">Sort</h3>
          <div>
            {sortBy.map((sortItem) => (
              <div className="flex items-center gap-4" key={sortItem.id}>
                <input
                  type="radio"
                  id={sortItem.field + sortItem.order}
                  value={sortItem.order}
                  onChange={(e) =>
                    dispatch(
                      setSort({ field: sortItem.field, order: e.target.value })
                    )
                  }
                  checked={sort.order === sortItem.order}
                />
                <label htmlFor={sortItem.field + sortItem.order}>
                  {sortItem.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* ------BRAND FILTER------ */}
        <div>
          <h3 className="font-medium mb-4">Brands</h3>
          <div>
            {brands.map((brand) => (
              <div key={brand._id} className="flex items-center gap-4">
                <input
                  type="checkbox"
                  id={brand.value}
                  value={brand.value}
                  onChange={handleBrand}
                />
                <label htmlFor={brand.label}>{brand.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* ------RATING FILTER------ */}
        <div className="mt-8">
          <h3 className="font-medium mb-4">Rating</h3>
          <div className="grid grid-cols-5 justify-items-center">
            {[1, 2, 3, 4, 5].map((btn) => (
              <button
                key={btn}
                value={btn}
                onClick={(e) => dispatch(setRating(e.currentTarget.value))}
                className={clsx(
                  rating === btn.toString() ? "bg-black text-white" : "",
                  "border hover:bg-black/80 hover:text-white rounded-md  w-10 h-10 flex items-center justify-center"
                )}
              >
                {btn}
                <Star
                  className="text-orange-500"
                  size={16}
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                />
              </button>
            ))}
          </div>
        </div>

        {/* ------OFFER FILTER------ */}
        <div className="mt-8">
          <h3 className="font-medium mb-4">Offer</h3>
          <div className="grid grid-cols-5 justify-items-center">
            {[10, 20, 30, 40, 50].map((offerBtn) => (
              <button
                key={offerBtn}
                value={offerBtn}
                onClick={(e) => dispatch(setOffer(e.currentTarget.value))}
                className={clsx(
                  offer === offerBtn.toString() ? "bg-black text-white" : "",
                  "border hover:bg-black/80 hover:text-white rounded-md  w-10 h-10 flex items-center justify-center"
                )}
              >
                {offerBtn}%
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-medium mb-4">Price Range</h3>
          <div>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Filters;

const sortBy = [
  {
    id: 1,
    field: "price",
    order: "asc",
    label: "Price(Low to High)",
  },
  {
    id: 2,
    field: "price",
    order: "desc",
    label: "Price(High to Low)",
  },
];

const brands = [
  {
    _id: "64b11d92d8bcaa5798a67e48",
    label: "Xiaomi",
    value: "Xiaomi",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689329009/ecom/brands/xiaomi_fqal8m.png",
    __v: 0,
  },
  {
    _id: "64b11dd4d8bcaa5798a67e4b",
    label: "Samsung",
    value: "Samsung",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689329010/ecom/brands/samsung_1_stpivj.png",
    __v: 0,
  },
  {
    _id: "64b11e3bd8bcaa5798a67e4e",
    label: "OnePlus",
    value: "OnePlus",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689329010/ecom/brands/one-plus_i3qqjc.png",
    __v: 0,
  },
  {
    _id: "64b12301b2c9cda6b0dec0e2",
    label: "Apple",
    value: "Apple",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689329010/ecom/brands/apple-logo_pehtlu.png",
    __v: 0,
  },
  {
    _id: "64ba715e9a61845ba6b4f5a8",
    label: "Realme",
    value: "realme",
    icon: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689940283/ecom/brands/Realme_qn5kpe.png",
    __v: 0,
  },
];
