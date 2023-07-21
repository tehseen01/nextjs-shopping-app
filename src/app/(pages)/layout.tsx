import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { Suspense } from "react";
import Loading from "./loading";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        {children}
        <Footer />
      </Suspense>
    </>
  );
};

export default RootLayout;
