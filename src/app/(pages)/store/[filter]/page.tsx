import ProductList from "@/components/store/ProductList";
import React from "react";

const Page = ({ params }: { params: { filter: string } }) => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default Page;
