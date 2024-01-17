import NewsFooterBg from "../../../assets/Footer/NewsFooter.png";
import { FaAirFreshener } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { LuBadgePercent, LuBadgeDollarSign } from "react-icons/lu";

const NewsFooter = () => {
    return (
        <div>
            <>
                <img
                    className="w-full"
                    src={NewsFooterBg}
                    alt="" />
            </>

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