"use client";
import { setAllProducts, setProductLoading } from "@/redux/slice/productSlice";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { IAllProducts } from "./interface";
import axios from "axios";
import { useAppDispatch } from "@/redux/hooks";

const useFetchProducts = (query: string) => {
  const dispatch = useAppDispatch();

  const { isLoading, data } = useQuery(["products"], {
    queryFn: async (): Promise<IAllProducts[]> => {
      const { data } = await axios.get(`/api/products/all?limit=10`);

      return data;
    },
    refetchOnWindowFocus: false,
  });

  const { isLoading: filterLoading, data: filterData } = useQuery(
    ["products", query],
    {
      queryFn: async (): Promise<IAllProducts[]> => {
        const { data } = await axios.get(`/api/products/all?limit=10${query}`);

        return data;
      },
      enabled: !!query,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (query) {
      dispatch(setProductLoading(filterLoading));
      dispatch(setAllProducts(filterData));
    } else {
      dispatch(setProductLoading(isLoading));
      dispatch(setAllProducts(data));
    }
  }, [dispatch, data, query, filterData, filterLoading, isLoading]);

  return null;
};

export default useFetchProducts;
