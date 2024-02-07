import { FaAirFreshener } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { LuBadgePercent, LuBadgeDollarSign } from "react-icons/lu";
import newsFooter from "../../../assets/Footer/footer.png";
import { CiMail } from "react-icons/ci";

const NewsFooter = () => {
    return (
        <div>
            <div className="bg-[#233A95]">
                <div className="container mx-auto grid lg:grid-cols-2">
                    <div className="text-white mt-20 pb-20 ms-36">
                        <p>
                            $20 discount for your first order
                        </p>

                        <h2 className="text-2xl font-medium mt-2">
                            Join our newsletter and get...
                        </h2>

                        <p className="text-gray-400 text-sm mt-4">
                            Join our email subscription now to get updates on
                            <br />
                            promotions and coupons.
                        </p>

                        <div className="grid lg:grid-cols-12 items-center bg-white py-1 px-1 w-[70%] rounded-md mt-8">
                            <div className="text-2xl text-gray-500 px-2 py-2 col-span-2 flex items-center justify-center">
                                <CiMail />
                            </div>
                            <input type="text" className="w-full col-span-7 text-sm" placeholder="Your email address" />
                            <div className="col-span-3 bg-[#233A95] text-center py-4 text-sm rounded-md">
                                Subscribe
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end">
                        <img src={newsFooter} alt="" />
                    </div>
                </div>

            </div>


            <div className="bg-[#F7F8FD]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-4 lg:py-6 lg:px-0 px-5 pt-3 lg:pt-0">

                    <div
                        className="flex items-center lg:justify-center text-gray-600 lg:py-3 py-2 border-r border-gray-200 cursor-pointer text-xs lg:text-sm">
                        <p className="lg:text-2xl text-lg mr-3">
                            <FaAirFreshener />
                        </p>
                        <p>Everyday Quality Products</p>
                    </div>

                    <div
                        className="flex items-center lg:justify-center text-gray-600 lg:py-3 py-2 border-r border-gray-200 cursor-pointer text-xs lg:text-sm">
                        <p className="lg:text-2xl text-lg mr-3">
                            <FaTruckFast />
                        </p>
                        <p>Free Delivery For Order Over 70$</p>
                    </div>

                    <div
                        className="flex items-center lg:justify-center text-gray-600 lg:py-3 py-2 border-r border-gray-200 cursor-pointer text-xs lg:text-sm">
                        <p className="lg:text-2xl text-lg mr-3">
                            <LuBadgePercent />
                        </p>
                        <p>Daily Mega Discounts</p>
                    </div>

                    <div
                        className="flex items-center lg:justify-center text-gray-600 lg:py-3 py-2 curs text-xs lg:text-sm cursor-pointer">
                        <p className="lg:text-2xl text-lg mr-3">
                            <LuBadgeDollarSign />
                        </p>
                        <p>Best Price On The Market</p>
                    </div>

                </div>
            </div>

            <div className="bg-[#F7F8FD] pt-5">
                <hr className="border border-gray-200 max-w-7xl mx-auto" />
            </div>
        </div>
    );
};

export default NewsFooter;