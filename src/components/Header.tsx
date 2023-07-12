"use client";

import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navData = [
  {navTitle: 'Phones' , navLink: '/store'},
  {navTitle: 'TV & display' , navLink: '#'},
  {navTitle: 'Laptop & Tablets' , navLink: '#'},
  {navTitle: 'Accessories' , navLink: '#'}
]

const Header = () => {
  const [mobileScreen, setMobileScreen] = useState(true)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      width >= 768 ? setMobileScreen(true) : setMobileScreen(false)
      setShowNav(false)
    }

    handleResize()

    window.addEventListener('resize', handleResize)  
    
    return() =>{
      window.removeEventListener('resize', handleResize);
    }
  }, [])

 

  return (
    <>
      {mobileScreen ? (
        <header className="border-b stick">
          <nav className="flex items-center gap-8 w-[95%] m-auto h-12">
            <div className="font-medium text-lg">Shop.io</div>

            {
              mobileScreen && (
                <ul className="flex items-center gap-4 flex-1">
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
              )
            }

            <div className="flex items-center gap-4">
              <button>
                <Search size={20} />
              </button>
              <button>
                <ShoppingBag size={20} />
              </button>
              <button>
                <User size={20} />
              </button>
            </div>
          </nav>
        </header>
      ) : (
        <header className="border-b stick">
          <nav className="flex justify-between w-[95%] mx-auto my-2">
            <div className="font-medium text-lg">Shop.io</div>
            <div className="flex items-center gap-4">
              <button>
                <Search size={20} />
              </button>
              <button>
                <ShoppingBag size={20} />
              </button>
              <button>
                <User size={20} />
              </button>
            </div>
            <button role="button" aaria-label={showNav ? 'Close Menu' : 'Open Menu'} aria-expanded={showNav ? 'true' : 'false'} onClick={() => setShowNav(!showNav)} className="cursor-pointer">
              {showNav ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
          {
            showNav && (
              <nav className="my-5">
                <ul className="flex flex-col items-center gap-4 flex-1">
                  {
                    navData && navData.map((item)=>{
                      return (
                        <li>
                           <Link onClick={()=> setShowNav(!showNav)} href={item.navLink}>{item.navTitle}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </nav>
            )
          }
        </header>
      )}
    </>
  );
};

export default Header;
