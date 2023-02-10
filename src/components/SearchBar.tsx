import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="search w-full h-[40px] mt-4 pl-8 rounded-md bg-lightGray border-darkerGray border-[1px] "
    />
  );
};

export default SearchBar;
