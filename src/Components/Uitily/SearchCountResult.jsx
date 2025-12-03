import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { TextInitial } from "lucide-react";

const SearchCountResult = ({ title }) => {
  return (
    <div className="flex justify-between items-center pt-3 px-2">
      {/* Title */}
      <div className="text-gray-800 font-medium">{title}</div>

      {/* Dropdown */}
      <Menu as="div" className="relative inline-block text-left text-white">
        <MenuButton className="inline-flex items-center px-3 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
          <TextInitial />
          Sort By
        </MenuButton>

        <MenuItems className=" absolute right-0 mt-2 w-56 origin-top-right bg-gray-900 divide-y divide-gray-700 rounded-lg shadow-lg focus:outline-none z-50">
          <div className="px-1 py-1">
            {[
              "Best Selling",
              "Highest Rated",
              "Price: Low to High",
              "Price: High to Low",
            ].map((item, idx) => (
              <MenuItem key={idx}>
                {({ disabled }) => (
                  <button
                    className="
                      group flex rounded-md items-center w-full px-4 py-2 text-sm text-white transition-colors
                      data-active:bg-gray-700
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                    disabled={disabled}
                  >
                    {item}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default SearchCountResult;
