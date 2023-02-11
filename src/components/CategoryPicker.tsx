import React from "react";

type Props = {};

const CategoryPicker = (props: Props) => {
  return (
    <div className="md:flex flex-col justify-between w-[250px] h-full mr-4 hidden">
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Automobiles
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Clothes and wear
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Computer and tech
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Tools, equipments
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Sports and outdoor
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Animal and pets
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        Machinery tools
      </button>
      <button className="py-2 w-full px-2 text-left hover:text-[#000] hover:bg-accentColor hover:bg-opacity-10 rounded-sm text-sm text-text font-normal transition-all duration-150">
        More category
      </button>
    </div>
  );
};

export default CategoryPicker;
