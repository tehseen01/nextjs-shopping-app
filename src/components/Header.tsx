"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTotal } from "@/redux/slice/cartSlice";
import clsx from "clsx";
import { ChevronRight, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { setAuthStatus } from "@/redux/slice/userSlice";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const { authStatus, user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(setTotal());
  }, [dispatch]);

  return (
    <>
      <header className="border-b stick">
        <nav className="flex items-center gap-8 w-[95%] m-auto h-12">
          <div className="font-medium text-lg">
            <Link href={"/"}>dev.shopp</Link>
          </div>

          <div className="md:hidden flex-1"></div>
          <ul className="md:flex hidden items-center gap-4 flex-1">
            {links.map((elm) => (
              <li key={elm.id}>
                <Link href={elm.path}>{elm.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button title="Search">
              <Search strokeWidth={1.25} />
            </button>
            <Link href={"/cart"} title="Cart" className="relative">
              <ShoppingBag strokeWidth={1.25} />
              {totalQuantity > 0 && (
                <div className="absolute top-[-5px] right-[-7px] bg-red-400 text-white w-5 h-5 rounded-full text-sm flex items-center justify-center">
                  {totalQuantity}
                </div>
              )}
            </Link>
            {authStatus ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    {user && (
                      <Avatar className="max-md:hidden">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback className="font-semibold text-lg uppercase">
                          {user?.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={"/orders"}>Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        signOut(auth), dispatch(setAuthStatus(false));
                      }}
                      className="cursor-pointer"
                    >
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link href={"/signin"} className="max-md:hidden" title="Profile">
                <User strokeWidth={1.25} />
              </Link>
            )}
            <button
              className="md:hidden inline-block"
              onClick={() => setOpenMenu(!openMenu)}
              title="Menu"
            >
              <Menu strokeWidth={1.25} />
            </button>
          </div>
        </nav>
      </header>
      <section
        className={clsx(
          openMenu ? "translate-x-0" : "translate-x-[100vw]",
          "fixed inset-0 bg-white transition-transform z-50"
        )}
      >
        <div className="flex p-4">
          <div className="flex-1"></div>
          <button
            className=" hover:border-gray-300 border border-white transition-opacity"
            onClick={() => setOpenMenu(!openMenu)}
            title="Close"
          >
            <X strokeWidth={1.25} />
          </button>
        </div>

        <div className="px-4">
          {authStatus ? (
            <div className="border-b pb-2 grid gap-2 ">
              <div className="flex items-center gap-4">
                {user && (
                  <Avatar>
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="font-semibold text-lg capitalize">
                      {user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                )}
                <h3 className="capitalize text-xl font-medium">{user?.name}</h3>
              </div>
              <Button variant={"ghost"} className="justify-start px-0">
                <Link href={"/orders"} onClick={() => setOpenMenu(!openMenu)}>
                  Orders
                </Link>
              </Button>

              <Button
                variant={"ghost"}
                className="justify-start px-0"
                onClick={() => {
                  signOut(auth), dispatch(setAuthStatus(false));
                }}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link
              href={"/signin"}
              className="flex items-center py-2 mt-3 border-b hover:bg-gray-100"
            >
              <div className="flex-1 flex items-center">
                <div className="rounded-lg bg-gray-100 p-2 mr-2">
                  <User strokeWidth={1.25} size={20} />
                </div>
                <span className="text-sm">Sign In / Sign Up</span>
              </div>
              <div>
                <ChevronRight strokeWidth={1.25} />
              </div>
            </Link>
          )}

          <div className="py-4 grid gap-1">
            {links.map((elm) => (
              <Link
                key={elm.id}
                className="hover:bg-gray-100 py-2 px-1 font-medium"
                href={elm.path}
                onClick={() => setOpenMenu(!openMenu)}
              >
                {elm.name}
              </Link>
            ))}
          </div>

          <div className="grid border-t pt-4">
            <Link
              className="hover:bg-gray-100 py-2 px-1 text-sm"
              href={"/"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Home
            </Link>

            <Link
              className="hover:bg-gray-100 py-2 px-1 text-sm"
              href={"/"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              About
            </Link>

            <Link
              className="hover:bg-gray-100 py-2 px-1 text-sm"
              href={"/"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

const links = [
  {
    id: 1,
    path: "/store",
    name: "Store",
  },
  {
    id: 2,
    path: "/store/mobiles",
    name: "Mobiles",
  },
  {
    id: 3,
    path: "/store/tv",
    name: "TV & display",
  },
  {
    id: 4,
    path: "/store/laptop",
    name: "Laptop",
  },
  {
    id: 5,
    path: "/store/accessories",
    name: "Accessories",
  },
];
