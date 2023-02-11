import React from "react";

type Props = {};

const CurrencySelector = (props: Props) => {
  return (
    <select className="px-1 hidden bg-lightGray rounded-md text-accentColor whitespace-nowrap md:bg-[#fff] md:flex md:items-center md:gap-2 md:font-medium md:text-xs md:text-[#000] md:hover:opacity-60 transition-all duration-300 cursor-pointer">
      <option value="USD">USD</option>
      <option value="USD">EUR</option>
      <option value="USD">BAM</option>
      <option value="USD">RSD</option>
    </select>
  );
};

export default CurrencySelector;
