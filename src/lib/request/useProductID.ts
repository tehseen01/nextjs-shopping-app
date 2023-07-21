import { useAppDispatch } from "@/redux/hooks";
import { setProduct, setProductLoading } from "@/redux/slice/productSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

const useProductID = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery(["product", id], {
    queryFn: async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    },
  });

  useEffect(() => {
    dispatch(setProductLoading(isLoading));
    dispatch(setProduct(data));
  }, [data, dispatch, isLoading]);

  return data;
};

export default useProductID;
