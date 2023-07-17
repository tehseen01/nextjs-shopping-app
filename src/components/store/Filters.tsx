"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { Checkbox } from "../ui/checkbox";
import { IBrand } from "@/lib/interface";
import { Slider } from "../ui/slider";
import { useAppDispatch } from "@/redux/hooks";
import { setCompany } from "@/redux/slice/filterSlice";

const Filters = ({ brandData }: { brandData: IBrand[] }) => {
  const dispatch = useAppDispatch();

  const handleCompany = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    dispatch(setCompany(value));
  };

  return (
    <aside className="border-r py-2 px-6">
      <div>
        <h3 className="font-medium mb-4">Brands</h3>
        <div>
          {brandData.map((brand) => (
            <div key={brand._id} className="flex items-center gap-4">
              <input
                type="checkbox"
                id={brand.value}
                value={brand.value}
                onChange={handleCompany}
              />
              <label htmlFor={brand.label}>{brand.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-4">Rating</h3>
        <div>
          <div className="flex items-center gap-4">
            <Checkbox id="ratig" value="ratig" />
            <label htmlFor="ratig">ratig</label>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-medium mb-4">Price Range</h3>
        <div>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </div>
    </aside>
  );
};

export default Filters;
