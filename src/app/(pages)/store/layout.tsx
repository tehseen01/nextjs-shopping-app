"use client";

import Categories from "@/components/store/Categories";
import Filters from "@/components/store/Filters";
import useFetchProducts from "@/lib/request/useFetchProducts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import useBrandCategory from "@/lib/request/useBrandCategory";
import { setOpenFilter } from "@/redux/slice/filterSlice";
import Loading from "../loading";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { brand, openFilter, sort, rating, offer } = useAppSelector(
    (state) => state.filter
  );

  const brandFilter = brand.length > 0 ? `&brand=${brand.join("&brand=")}` : "";
  const catFilter =
    params.filter === "all"
      ? ""
      : params.filter
      ? `&category=${params.filter}`
      : "";
  const sortFilter = sort.order !== "" ? `${(sort.field = sort.order)}` : "";
  const ratingFilter = rating !== "" ? `&rating=${rating}` : "";
  const offerFilter = offer !== "" ? `&discountPercentage=${offer}` : "";

  useFetchProducts(`${brandFilter}${catFilter}${ratingFilter}${offerFilter}`);
  const { brandData, catData } = useBrandCategory();

  return (
    <main className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        {catData && <Categories data={catData} />}
        <section className="grid lg:grid-cols-[300px_1fr] md:grid-cols-[250px_1fr] relative border-t">
          {openFilter && (
            <div
              className="fixed inset-0 bg-black/60"
              onClick={() => dispatch(setOpenFilter(false))}
            ></div>
          )}
          {brandData && <Filters brandData={brandData} />}
          {children}
        </section>
      </Suspense>
    </main>
  );
};

export default StoreLayout;
