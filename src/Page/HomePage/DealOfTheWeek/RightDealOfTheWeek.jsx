import shirtPantCombo from "../../../assets/DealOfTheWeek/shirtPantCombo.png";
import { FaStar } from "react-icons/fa";

const RightDealOfTheWeek = () => {
    return (
        <div className="border-[2px] border-[#ED174A] rounded-md mx-2">

            {/* header section start */}
            <div className="mt-8 ms-8">
                <h2 className="text-[#354596] text-2xl">
                    Deal of the <span className="font-bold">week!</span>
                </h2>

                <div className="flex items-center text-white font-medium mt-2">
                    <div
                        className="bg-[#ED174A] rounded-lg w-12 h-12 p-3 flex items-center justify-center">
                        <p className="text-xl">88</p>
                    </div>

                    <p className="text-[#354596] mx-1 font-bold">:</p>

                    <div
                        className="bg-[#ED174A] rounded-lg w-12 h-12 p-3 flex items-center justify-center">
                        <p className="text-xl">12</p>
                    </div>

                    <p className="text-[#354596] mx-1 font-bold">:</p>

                    <div
                        className="bg-[#ED174A] rounded-lg w-12 h-12 p-3 flex items-center justify-center">
                        <p className="text-xl">31</p>
                    </div>

                    <p className="text-[#354596] mx-1 font-bold">:</p>

                    <div
                        className="bg-[#ED174A] rounded-lg w-12 h-12 p-3 flex items-center justify-center">
                        <p className="text-xl">56</p>
                    </div>
                </div>

                <p className="text-xs text-[#D5D5E0] mt-3">
                    Remains until the end of the offer
                </p>
            </div>
            {/* header section end */}

            {/* img section div start */}
            <div className="relative">

                <div className="flex items-center justify-center pt-5">
                    <img
                        className="w-[55%]"
                        src={shirtPantCombo}
                        alt="" />
                </div>

                <div
                    className="absolute top-2 right-8 rounded-full text-2xl bg-[#ED174A] text-white w-16 h-16 flex items-center justify-center font-medium">
                    <h2>19%</h2>
                </div>
            </div>
            {/* img section div end */}

            {/* price and details section start */}
            <div className="ms-8 mt-10">

                <div className="font-semibold flex items-center">
                    <p className="text-[#CECEDC] text-lg line-through mr-3">
                        $50.99
                    </p>
                    <p className="text-[#D51243] text-2xl">
                        &29.99
                    </p>
                </div>

                <h2 className="text-lg mt-4 mr-2">
                    Shirt Pant & Shoes Combo with Special Offer
                </h2>

                <p className="text-[#00B853] text-xs font-medium mt-2">
                    IN STOCK
                </p>

                <div className="flex items-center">

                    <div className="flex items-center text-[#FFCD00] mt-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <div className="mt-2 ms-1">
                        <h2 className="text-gray-500 text-xs">(501)</h2>
                    </div>
                </div>
            </div>
            {/* price and details section end */}
        </div>
    );
};

export default RightDealOfTheWeek;