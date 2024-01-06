import logo from "../../../../public/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";

const MiddleNavbar = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-3">

            {/* logo section start */}
            <div className="col-span-2 cursor-pointer">
                <div className="flex">

                    {/* <div className="flex"> */}
                    <img
                        className="h-[70%] mt-2"
                        src={logo}
                        alt="" />
                    {/* </div> */}

                    <div>
                        <h2
                            className="text-2xl font-semibold text-[#223994] flex items-center justify-center pt-8 pl-3">
                            ESEllPLUS
                            {/* ESellPlus */}
                        </h2>

                    </div>
                </div>
                <p className="text-xs text-gray-400 ml-1">
                    Online Fashion Shopping Center
                </p>
            </div>
            {/* logo section end */}

            {/* drop down section start */}
            <div className="dropdown w-full h-fit col-span-2 border rounded-lg mt-4 border-gray-300">
                <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center justify-between px-5 py-3">

                    <div>
                        <p className="text-xs text-gray-300">
                            Your Location
                        </p>
                        <h2 className="text-[#223994] font-medium">
                            Select a Location
                        </h2>
                    </div>
                    <IoIosArrowDown className="text-xl" />

                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-10 menu p-2 shadow bg-gray-50 rounded-sm w-52 font-medium mt-1">
                    <li><a>Dhaka</a></li>
                    <li><a>Gazipur</a></li>
                    <li><a>Norshindi</a></li>
                    <li><a>Sylhet</a></li>
                    <li><a>Noakhali</a></li>
                    <li><a>Borishal</a></li>
                </ul>
            </div>
            {/* drop down section end */}

            {/* input section start */}
            <div className="col-span-6">
                <form
                    className="grid grid-cols-12 ms-10 bg-[#F3F4F7] mt-4 rounded-lg">
                    <input
                        className="w-full bg-[#F3F4F7] py-5 ps-10 col-span-11 focus:outline-none rounded-lg"
                        placeholder="Search for products"
                        name="search"
                        type="text" />

                    <button>
                        <RiSearchLine className="text-2xl text-[#3E445A]" />
                    </button>

                </form>
            </div>
            {/* input section end */}

            {/* user section start */}
            <div className="col-span-2 flex items-center justify-between">

                {/* user profile section start */}
                <div className="mt-7 ms-6 mb-6">
                    <LuUser2 className="text-4xl p-2 border-2 rounded-full" />
                </div>
                {/* user profile section end */}

                {/* total dollar count section start */}
                <div className="text-gray-600 font-medium text-lg">
                    <p>$0.00</p>
                </div>
                {/* total dollar count section end */}

                {/* user cart section start */}
                <div className="flex items-center justify-center cursor-pointer">

                    <IoBagHandleOutline className="text-5xl bg-[#FFF1EE] text-[#EA2B0F] p-3 rounded-full" />
                    <p
                        className="relative right-4 bottom-4 text-white bg-[#EA2B0F] p-2 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        0
                    </p>

                </div>
                {/* user cart section end */}

            </div>
            {/* user section end */}

        </div>
    );
};

export default MiddleNavbar;