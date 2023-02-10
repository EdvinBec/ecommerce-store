import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";
import hamburgerMenu from "../assets/img/hamburgerMenu.png";
import logo from "../assets/img/logo-colored.png";
import person from "../assets/img/person.svg";
import shoppingCart from "../assets/img/shopping_cart.svg";
import heart from "../assets/img/heart.svg";
import message from "../assets/img/message.svg";

type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <div className="w-[90%]">
      <div className="flex items-center justify-between pt-4 w-full">
        <div className="flex items-center gap-[18px]">
          <button>
            <Image
              src={hamburgerMenu}
              alt="hamburgerMenu"
              className="md:hidden"
            />
          </button>
          <Image src={logo} alt="logo" className="w-[116px] md:w-[150px]" />
        </div>
        <div className="hidden md:block md:h-[70px] w-[55%]">
          <SearchBar />
        </div>
        <div className="flex items-center md:gap-6 gap-[20px]">
          <button className="flex flex-col items-center justify-between md:h-[40px]">
            <Image src={shoppingCart} alt="shoppingCart" />
            <label className="text-xs hidden md:block">Cart</label>
          </button>
          <button className="md:flex flex-col items-center justify-between md:h-[40px] hidden">
            <Image src={message} alt="messages" />
            <label className="text-xs hidden md:block">Messages</label>
          </button>
          <button className="md:flex flex-col justify-between items-center md:h-[40px] hidden">
            <Image src={heart} alt="orders" />
            <label className="text-xs hidden md:block">Orders</label>
          </button>
          <button className="flex flex-col items-center justify-between md:h-[40px]">
            <Image src={person} alt="person" />
            <label className="text-xs hidden md:block">Profile</label>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default NavigationBar;
