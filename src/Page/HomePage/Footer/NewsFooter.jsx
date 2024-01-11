import NewsFooterBg from "../../../../public/Footer/NewsFooter.png";
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
                <div className="max-w-7xl mx-auto grid grid-cols-4 my-6">

                    <div
                        className="flex items-center justify-center text-gray-600 py-1 border-r border-gray-200">
                        <p className="text-2xl mr-3">
                            <FaAirFreshener />
                        </p>
                        <p>Everyday Quality Products</p>
                    </div>

                    <div
                        className="flex items-center justify-center text-gray-600 py-1 border-r border-gray-200">
                        <p className="text-2xl mr-3">
                            <FaTruckFast />
                        </p>
                        <p>Free Delivery For Order Over 70$</p>
                    </div>

                    <div
                        className="flex items-center justify-center text-gray-600 py-1  border-r border-gray-200">
                        <p className="text-2xl mr-3">
                            <LuBadgePercent />
                        </p>
                        <p>Daily Mega Discounts</p>
                    </div>

                    <div
                        className="flex items-center justify-center text-gray-600 py-1">
                        <p className="text-2xl mr-3">
                            <LuBadgeDollarSign />
                        </p>
                        <p>Best Price On The Market</p>
                    </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <hr className="my-5 border border-gray-100" />
            </div>
        </div>
    );
};

export default NewsFooter;