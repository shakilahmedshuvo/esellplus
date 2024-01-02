import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <div>

            <>
                <p className="text-white bg-[#233A95] text-center py-2 text-xs px-6 lg:px-0">
                    Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay
                </p>
            </>

            <div className="border-b-2 border-gray-200 hidden lg:block">
                <div className="max-w-7xl mx-auto grid grid-cols-12">

                    <div className="col-span-4 flex justify-between text-sm pr-28 text-gray-600 items-center">
                        <p>About Us</p>
                        <p>My account</p>
                        <p>Wishlist</p>
                        <p>Order Tracking</p>
                    </div>

                    <div className="col-span-8 flex justify-end text-sm text-gray-500">
                        <p className="border-r-2 my-2 px-5 flex items-center">
                            <VscWorkspaceTrusted className="text-black text-xl mr-1" />100% Secure delivery without contacting the courier
                        </p>
                        <p className="border-r-2 flex items-center px-5">
                            Need help? Call Us: <span className="text-[#2BBEF9] font-bold ms-1">+ 0020 500</span>
                        </p>

                        <div className="flex items-center mx-2">

                            <p className="px-3 py-3 flex items-center font-normal">
                                English<MdKeyboardArrowDown />
                            </p>
                            <p className="px-3 py-3 flex items-center font-normal">
                                BDT<MdKeyboardArrowDown />
                            </p>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;