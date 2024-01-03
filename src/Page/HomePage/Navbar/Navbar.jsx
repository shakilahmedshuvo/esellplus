import TopNavbar from "./TopNavbar";
import logo from "../../../../public/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <TopNavbar />

            <div className="max-w-7xl mx-auto grid grid-cols-12">

                {/* logo section start */}
                <div className="col-span-2">
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
                    <div className="dropdown w-full h-fit col-span-2 border rounded-md mt-4">
                        <div
                            tabIndex={0}
                            role="button"
                            className="flex items-center justify-between px-5 py-3">

                            <div>
                                <p className="text-xs text-gray-300">
                                    Your Location
                                </p>
                                <h2 className="text-[#223994] font-medium">
                                    Your Location
                                </h2>
                            </div>
                            <IoIosArrowDown className="text-xl" />

                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-gray-50 rounded-box w-52 font-medium">
                            <li><a>Dhaka</a></li>
                            <li><a>Gazipur</a></li>
                            <li><a>Norshindi</a></li>
                            <li><a>Sylhet</a></li>
                            <li><a>Noakhali</a></li>
                            <li><a>Borishal</a></li>
                        </ul>
                    </div>
                </div>
                {/* drop down section end */}

            </div>

    );
};

export default Navbar;