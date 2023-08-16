import Link from "next/link"
import ShoppingCartComponent from "./shoppingCart"
import LogoComponent from "./logo.component"
import { shallowEqual, useSelector } from "react-redux";
import { useState } from "react";

export const NavbarComponent = ({}) => {
  const selected = useSelector(state => state.ui.selected,shallowEqual);
  const cartCount = useSelector(state => state.data.avocadosCart.length,shallowEqual);

  return (
    <nav className="h-[65px] flex flex-col justify-center  shadow-sm border-1 mb-10">
      <ul className="flex flex-row mm:justify-between sm:justify-center items-center">
        <li className="hover:bg-dimGray h-[63px] px-3 flex justify-center items-center">
          <Link href="/">
            <LogoComponent  selected={selected}/>
          </Link>
        </li>
        <div className="sm:w-[65%]"></div>
        <li className="hover:bg-dimGray h-[63px] px-3 flex justify-center items-center">
          <Link href="/cart">
            <ShoppingCartComponent cartCount={cartCount} selected={selected}/>
          </Link>
        </li>
      </ul>
    </nav>
  )
}