import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-end">
      <input
        type="text"
        placeholder="Search"
        className="search w-full h-[40px] mt-4 pl-8 rounded-md bg-lightGray border-accentColor border-[1.5px] md:border-r-0 md:rounded-r-none "
      />
      <button className="h-[40px] px-8 bg-accentColor rounded-md rounded-l-none text-[#fff] hidden md:block hover:opacity-60 transition-all duration-200 cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
