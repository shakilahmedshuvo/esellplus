import pictureOne from "../../../assets/pictureOne.jpg";
import pictureTwo from "../../../assets/pictureTwo.jpg";

const PictureSection = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-2 my-8">

            <div className="mr-5 relative">
                <div>
                    <img
                        className="rounded-lg"
                        src={pictureOne}
                        alt="" />
                </div>

                <div className="absolute top-10 left-10">

                    <p className="text-[#FF6083] font-medium bg-red-700 bg-opacity-10 w-fit rounded-3xl px-4 py-1">
                        WEEKEND DISCOUNT 40%
                    </p>

                    <h2 className="text-3xl font-medium pt-4">
                        Cloth and Fashion
                    </h2>

                    <p className="text-xs text-gray-500 mt-2 font-medium">
                        ESellPlus Discount
                    </p>

                    <div className="w-fit bg-[#233A95] text-white rounded-full py-2 text-xs px-5 mt-12">
                        Shop Now
                    </div>
                </div>
            </div>

            <div className="ms-5 relative">
                <div>
                    <img
                        className="rounded-lg"
                        src={pictureTwo}
                        alt="" />
                </div>

                <div className="absolute top-10 right-10">

                    <p className="text-black font-medium bg-white bg-opacity-70 w-fit rounded-3xl px-4 py-1">
                        WEEKEND DISCOUNT 30%
                    </p>

                    <h2 className="text-3xl font-medium pt-4 text-end text-white">
                        Cloth and Fashion
                    </h2>

                    <p className="text-xs text-gray-200 mt-2 font-medium text-end">
                        ESellPlus Discount
                    </p>

                    <div className="flex items-center justify-end">
                        <div className="w-fit bg-[#ED174A] text-white rounded-full py-2 text-xs px-5 mt-12">
                            Shop Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PictureSection;