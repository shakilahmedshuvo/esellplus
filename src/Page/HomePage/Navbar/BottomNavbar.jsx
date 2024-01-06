import { IoIosArrowDown } from "react-icons/io";
import { VscMenu } from "react-icons/vsc";
import { useState } from 'react';
import { Link } from "react-router-dom";

const BottomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-6">

            <div className="relative col-span-3 w-[73%]">
                <button
                    onClick={toggleDropdown}
                    className="bg-[#2BBEF9] text-white flex items-center rounded-full py-3 w-full">
                    <VscMenu className="text-base ms-6 my-1" /><p className="mt-1 text-sm font-medium ms-4">ALL CATEGORIES</p><IoIosArrowDown className="my-1 ms-8 text-lg" />
                </button>
                <div className="flex items-center justify-center">
                    <p className="relative bottom-2 text-[10px] bg-[#EDEEF5] w-fit font-medium px-3 rounded-full text-gray-500 mr-4">
                        TOTAL 100+ PRODUCTS
                    </p>
                </div>
                {
                    isOpen &&
                    (
                        <div
                            className="absolute py-4 px-8 w-72 bg-white border border-gray-100 rounded-sm z-10 text-gray-800 font-normal text-sm grid">

                            <Link to={"/"}
                                className="my-2">
                                Clothes & Fashion
                            </Link>

                            <Link to={"/"}
                                className="my-2">
                                Men's Clothing
                            </Link>

                            <Link to={"/"}
                                className="my-2">
                                Women's Clothing
                            </Link>

                            <Link to={"/"}
                                className="my-2">
                                Kids' Clothing
                            </Link>

                            <hr className="my-3" />

                            <Link to={"/"}
                                className="my-2">
                                Value of the day
                            </Link>

                            <Link to={"/"}
                                className="my-2">
                                Top 100 Offers
                            </Link>

                            <Link to={"/"}
                                className="my-2">
                                New Arrivals
                            </Link>

                        </div>
                    )
                }
            </div >


            <div className="col-span-9 flex justify-end items-center text-sm">

                <Link
                    to={"/"}>
                    <div className="dropdown dropdown-hover">

                        <div
                            tabIndex={0}
                            role="button"
                            className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-5 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600 flex items-center justify-center">
                            Home <IoIosArrowDown className="text-base ms-2" />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content z-30 p-2 w-52 border border-gray-100 rounded-sm font-medium bg-white mt-1">

                            <li
                                className="text-sm my-4 px-4 hover:text-[#2BBEF9] duration-100">
                                <a>Home 1</a>
                            </li>
                            <li
                                className="text-sm my-4 px-4 hover:text-[#2BBEF9] duration-100">
                                <a>Home 2</a>
                            </li>
                            <li
                                className="text-sm my-4 px-4 hover:text-[#2BBEF9] duration-100">
                                <a>Home 3</a>
                            </li>
                            <li
                                className="text-sm my-4 px-4 hover:text-[#2BBEF9] duration-100">
                                <a>Home 4</a>
                            </li>
                            <li
                                className="text-sm my-4 px-4 hover:text-[#2BBEF9] duration-100">
                                <a>Home 5</a>
                            </li>

                        </ul>
                    </div>
                </Link>

                <Link
                    to={"/"}>
                    <div className="dropdown dropdown-hover">

                        <div
                            tabIndex={0}
                            role="button"
                            className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer text-gray-600 flex items-center justify-center">
                            Shop <IoIosArrowDown className="text-base ms-2" />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content z-30 p-2 w-[800px] border border-gray-100 rounded-sm grid grid-cols-3 px-6 pt-6 font-medium text-gray-600 bg-white mt-1">

                            <div className="grid">
                                <h2 className="font-semibold text-[#233a95] hover:text-[#66D0FB] duration-100">
                                    Shop Lists
                                </h2>

                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100 mt-5">
                                    Shop Default
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Shop Right Sidebar
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Shop Wide
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    List Left Sidebar
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Load More Button
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Infinite Scrolling
                                </Link>

                            </div>

                            <div className="grid">
                                <h2 className="font-semibold text-[#233a95] hover:text-[#66D0FB] duration-100">
                                    Product Detail
                                </h2>

                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100 mt-5">
                                    Product Default
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Product External
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Product Grouped
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Product Variable
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Product Downloadable
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Product With Video
                                </Link>
                            </div>

                            <div className="grid">
                                <h2 className="font-semibold text-[#233a95] hover:text-[#66D0FB] duration-100">
                                    Shop Pages
                                </h2>

                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100 mt-5">
                                    Cart
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Checkout
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    My account
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Wishlist
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Order Tracking
                                </Link>
                                <Link
                                    className="my-2 hover:text-[#66D0FB] duration-100">
                                    Order on WhatsApp
                                </Link>
                            </div>
                        </ul>
                    </div>
                </Link>

                <div
                    className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600">
                    Clothes & Fashion
                </div>

                <div
                    className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600">
                    Men's Clothing
                </div>

                <div
                    className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600">
                    Women's Clothing
                </div>

                <div
                    className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600">
                    Kids' Clothing
                </div>

                <div
                    className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600">
                    Blog
                </div>

                <div
                    className="w-fit hover:bg-[#F0FAFF] hover:text-[#2BBEF9] py-3 px-4 mx-1 rounded-full text-sm duration-500 cursor-pointer font-medium text-gray-600">
                    Contact
                </div>
            </div>

        </div>
    );
};

export default BottomNavbar;