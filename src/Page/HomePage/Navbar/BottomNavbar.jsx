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
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-5">

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
                        <div className="absolute py-4 px-8 w-72 bg-white border border-gray-100 rounded-sm z-10 text-gray-800 font-normal text-sm grid">

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
                                Kids' Clothing:
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

            <div className="col-span-10">

            </div>

        </div >
    );
};

export default BottomNavbar;