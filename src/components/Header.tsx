"use client";

import clsx from "clsx";
import { ChevronRight, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="border-b stick">
        <nav className="flex items-center gap-8 w-[95%] m-auto h-12">
          <div className="font-medium text-lg">
            <Link href={"/"}>Shop.io</Link>
          </div>

          <div className="md:hidden flex-1"></div>
          <ul className="md:flex hidden items-center gap-4 flex-1">
            <li>
              <Link href={"/store"}>Store</Link>
            </li>
            <li>
              <Link href={"/store"}>Phones</Link>
            </li>
            <li>
              <Link href={"#"}>TV & display</Link>
            </li>
            <li>
              <Link href={"#"}>Laptop & Tablets</Link>
            </li>
            <li>
              <Link href={"#"}>Accessories</Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button title="Search">
              <Search strokeWidth={1.25} />
            </button>
            <button title="Cart">
              <ShoppingBag strokeWidth={1.25} />
            </button>
            <button className="max-md:hidden" title="Profile">
              <User strokeWidth={1.25} />
            </button>
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
          <Link
            href={"/"}
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

          <div className="py-4 grid gap-1">
            <Link
              className="hover:bg-gray-100 py-2 px-1 font-medium"
              href={"/store"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Store
            </Link>

            <Link
              className="hover:bg-gray-100 py-2 px-1 font-medium"
              href={"/store"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Phones
            </Link>

            <Link
              className="hover:bg-gray-100 py-2 px-1 font-medium"
              href={"#"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              TV & display
            </Link>

            <Link
              className="hover:bg-gray-100 py-2 px-1 font-medium"
              href={"#"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Laptop & Tablets
            </Link>

            <Link
              className="hover:bg-gray-100 py-2 px-1 font-medium"
              href={"/"}
              onClick={() => setOpenMenu(!openMenu)}
            >
              Accessories
            </Link>
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
