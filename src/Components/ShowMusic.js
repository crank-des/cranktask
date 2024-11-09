import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IconContext } from "react-icons";
// import { IconContext } from "react-icons/lib/iconContext";
const ShowMusic = () => {
    const [openDropdown, setOpenDropdown] = useState("");
    const handleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? "" : menu);
    };
    return (_jsx("nav", { className: "bg-black text-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8", children: _jsxs("div", { className: "relative flex items-center justify-between h-16", children: [_jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: _jsx("button", { type: "button", className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none", "aria-controls": "mobile-menu", "aria-expanded": "false", children: _jsx(IoMdMenu, {}) }) }), _jsxs("div", { className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("img", { className: "hidden lg:block h-8 w-auto", src: "https://i.pinimg.com/originals/33/85/ba/3385ba649152c101df1a13b21241c3bd.png", alt: "Logo" }) }), _jsx("div", { className: "hidden sm:block sm:ml-6", children: _jsx("div", { className: "flex space-x-4", children: ["Collections", "Apparel", "Accessories", "Music"].map((menu) => (_jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: () => handleDropdown(menu), className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center", children: [menu, _jsx(FaChevronDown, {})] }), openDropdown === menu && (_jsxs("div", { className: "origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10", children: [_jsx("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Option 1" }), _jsx("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Option 2" })] }))] }, menu))) }) })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "relative flex items-center", children: [_jsx("div", { className: " ", children: _jsx(CiSearch, {}) }), _jsx("input", { type: "text", placeholder: "Search our store", className: "bg-gray-800 text-gray-300 placeholder-gray-500 rounded-md pl-2 py-1 ml-2" })] }), _jsx(IconContext.Provider, { value: { color: "white", size: "26px" }, children: _jsxs("div", { className: "relative cursor-pointer", children: [_jsx(FaShoppingCart, {}), _jsx("span", { className: "absolute -top-1 -right-1 bg-red-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs", children: "0" })] }) })] })] }) }) }));
};
export default ShowMusic;
