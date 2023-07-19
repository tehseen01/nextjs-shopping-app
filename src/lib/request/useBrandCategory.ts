import { useQuery } from "@tanstack/react-query";
import { IBrand, ICategory } from "../interface";
import axios from "axios";

const useBrandCategory = () => {
  const { data: brandData } = useQuery(["brand"], {
    queryFn: async (): Promise<IBrand[]> => {
      const { data } = await axios.get(`/api/brand`);
      return data;
    },
  });

  const { data: catData } = useQuery(["category"], {
    queryFn: async (): Promise<ICategory[]> => {
      const { data } = await axios.get(`/api/category`);
      return data;
    },
  });

  return { brandData, catData };
};

export default useBrandCategory;
