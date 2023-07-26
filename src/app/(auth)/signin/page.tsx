"use client";

import SignIn from "@/components/auth/SignIn";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-[100dvh]">
      <section className="grid justify-center content-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-medium">Welcome back to dev.shopp</h2>
          <p className="py-2">
            {"Don't"} have an account
            <Link href={"/signup"} className="underline">
              Create an account
            </Link>{" "}
            here.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid">
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
              </svg>
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <SignIn />
        </div>
      </section>
      <section className="max-md:hidden">
        <figure className="h-full">
          <Image
            src={
              "https://res.cloudinary.com/dayo1mpv0/image/upload/v1690116593/ecom/cart_rgb3gl.jpg"
            }
            width={500}
            height={500}
            alt="sign up"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
    </main>
  );
};

export default Page;
