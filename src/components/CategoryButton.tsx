import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  icon?: any;
};

const CategoryButton = ({ label, icon }: Props) => {
  return (
    <button className="px-4 h-[36px] bg-lightGray rounded-md text-accentColor whitespace-nowrap md:bg-[#fff] md:flex md:items-center md:gap-2 md:font-medium md:text-xs md:text-[#000] md:hover:opacity-60 transition-all duration-300 cursor-pointer">
      {icon && (
        <Image
          src={icon}
          alt="hamburgerMenu"
          className="w-[18px] hidden md:block"
        />
      )}
      {label}
    </button>
  );
};

export default CategoryButton;
