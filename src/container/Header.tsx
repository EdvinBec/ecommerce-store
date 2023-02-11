import CategoryPicker from "@/components/CategoryPicker";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[90%] md:flex md:h-[400px] items-center md:border-[1px] border-darkerGray border-opacity-40 md:rounded-sm md:px-4 md:py-4">
        <CategoryPicker />
        <div className="w-full flex justify-center header-bg-image h-[220px] md:h-full">
          <div className="w-[90%]">
            <h1 className="text-2xl md:text-3xl md:mt-16 font-normal tracking-wide mt-8">
              Latest trending<br></br>{" "}
              <span className="font-medium tracking-wide">
                Electronic Items{" "}
              </span>
            </h1>
            <button className="px-2 mt-4 shadow-md bg-[#fff] py-1.5 rounded-md text-accentColor font- md:font-normal hover:opacity-90 transition-all duration-200 hover:scale-105">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
