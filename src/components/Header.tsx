"use client";

import { Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b stick">
      <nav className="flex items-center gap-8 w-[95%] m-auto h-header">
        <div className="font-medium text-lg">Shop.io</div>

        <ul className="flex items-center gap-4 flex-1">
          <li>
            <Link href={"#"}>Phones</Link>
          </li>
          <li>
            <Link href={"#"}>LifeStyle</Link>
          </li>
          <li>
            <Link href={"#"}>Laptop & Tablets</Link>
          </li>
          <li>
            <Link href={"#"}>Accessories</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Search className="" size={20} />
          </button>
          <button>
            <ShoppingBag className="" size={20} />
          </button>
          <button>
            <User className="" size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
