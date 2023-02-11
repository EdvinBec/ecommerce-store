import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";
import hamburgerMenu from "../assets/img/hamburgerMenu.png";
import logo from "../assets/img/logo-colored.png";
import person from "../assets/img/person.svg";
import shoppingCart from "../assets/img/shopping_cart.svg";
import heart from "../assets/img/heart.svg";
import message from "../assets/img/message.svg";
import CategoryButton from "@/components/CategoryButton";
import CurrencySelector from "@/components/CurrencySelector";

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
          <Image src={logo} alt="logo" className="w-[30px] md:w-[40px]" />
        </div>
        <div className="hidden md:block w-[55%]">
          <SearchBar />
        </div>
        <div className="flex items-center md:gap-6 gap-[20px]">
          <button className="flex flex-col items-center justify-between md:h-[40px] hover:opacity-60 transition-all duration-300 cursor-pointer">
            <Image src={shoppingCart} alt="shoppingCart" />
            <label className="text-xs hidden md:block text-darkerGray">
              Cart
            </label>
          </button>
          <button className="md:flex flex-col items-center justify-between md:h-[40px] hidden hover:opacity-60 transition-all duration-300 cursor-pointer">
            <Image src={message} alt="messages" />
            <label className="text-xs hidden md:block text-darkerGray">
              Messages
            </label>
          </button>
          <button className="md:flex flex-col justify-between items-center md:h-[40px] hidden hover:opacity-60 transition-all duration-300 cursor-pointer">
            <Image src={heart} alt="orders" />
            <label className="text-xs hidden md:block text-darkerGray">
              Orders
            </label>
          </button>
          <button className="flex flex-col items-center justify-between md:h-[40px] hover:opacity-60 transition-all duration-300 cursor-pointer">
            <Image src={person} alt="person" />
            <label className="text-xs hidden md:block text-darkerGray">
              Profile
            </label>
          </button>
        </div>
      </div>
      <div className="md:hidden mt-4">
        <SearchBar />
      </div>
      <div className=" mt-4 flex items-center justify-between md:border-t md:border-b md:border-darkerGray md:border-opacity-40 md:border-[1.5px] md:border-r-0 md:border-l-0">
        <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
          <CategoryButton icon={hamburgerMenu} label="All category" />
          <CategoryButton label="Gadgets" />
          <CategoryButton label="Clothes" />
          <CategoryButton label="Accessories" />
          <CategoryButton label="Gift boxes" />
          <CategoryButton label="Electronics" />
        </div>
        <div>
          <CurrencySelector />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
