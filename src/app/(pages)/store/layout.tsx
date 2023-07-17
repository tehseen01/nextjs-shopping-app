"use client";

import Categories from "@/components/store/Categories";
import Filters from "@/components/store/Filters";
import { IAllProducts, IBrand, ICategory, IProduct } from "@/lib/interface";
import { useAppDispatch } from "@/redux/hooks";
import { setAllProducts } from "@/redux/slice/productSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const { isLoading, data } = useQuery(["products"], {
    queryFn: async (): Promise<IAllProducts[]> => {
      const { data } = await axios.get(`/api/products/all?limit=5`);

      return data;
    },
  });

  const { data: catData } = useQuery(["category"], {
    queryFn: async (): Promise<ICategory[]> => {
      const { data } = await axios.get(`/api/category`);
      return data;
    },
  });

  const { data: brandData } = useQuery(["brand"], {
    queryFn: async (): Promise<IBrand[]> => {
      const { data } = await axios.get(`/api/brand`);
      return data;
    },
  });

  useEffect(() => {
    dispatch(setAllProducts(data));
  }, [dispatch, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="">
      <div className="grid">
        {catData && <Categories data={catData} />}
        <section className="grid grid-cols-[300px_1fr] border-t">
          {brandData && <Filters brandData={brandData} />}
          {children}
        </section>
      </div>
    </main>
  );
};

export default StoreLayout;
