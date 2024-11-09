import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const ShowMusic = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdown = (menu: React.SetStateAction<string>) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <IoMdMenu />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://i.pinimg.com/originals/33/85/ba/3385ba649152c101df1a13b21241c3bd.png"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {["Collections", "Apparel", "Accessories", "Music"].map(
                  (menu) => (
                    <div className="relative" key={menu}>
                      <button
                        onClick={() => handleDropdown(menu)}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        {menu}
                        <FaChevronDown />
                      </button>
                      {openDropdown === menu && (
                        <div className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Option 1
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Option 2
                          </a>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <div className=" ">
               
                <CiSearch />
              </div>
              <input
                type="text"
                placeholder="Search our store"
                className="bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md pl-2 py-1 ml-2"
              />
            </div>
            <IconContext.Provider value={{ color: "white", size: "26px" }}>
              <div className="relative cursor-pointer">
                <FaShoppingCart />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShowMusic;
