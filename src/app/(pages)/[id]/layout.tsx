import React, { Suspense } from "react";
import Loading from "../loading";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  );
};

export default ProductLayout;
