import { IoIosArrowDown } from "react-icons/io";
import { VscMenu } from "react-icons/vsc";

const BottomNavbar = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-5">

            <div className="col-span-3">
                <div className="dropdown dropdown-hover w-[73%]">
                    <div
                        tabIndex={0}
                        role="button">

                        <div
                            className="bg-[#2BBEF9] text-white flex items-center rounded-full py-3 w-full">
                            <VscMenu className="text-base ms-6 my-1" /><p className="mt-1 text-sm font-medium ms-4">ALL CATEGORIES</p><IoIosArrowDown className="my-1 ms-8 text-lg" />
                        </div>

                        <div className="flex items-center justify-center">
                            <p className="relative bottom-2 text-[10px] bg-[#EDEEF5] w-fit font-medium px-3 rounded-full text-gray-500 mr-4">
                                TOTAL 100+ PRODUCTS
                            </p>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-span-10">

            </div>

        </div>
    );
};

export default BottomNavbar;