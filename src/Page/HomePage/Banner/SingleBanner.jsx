import { FaLongArrowAltLeft } from "react-icons/fa";

const SingleBanner = ({ slider }) => {
    const { img, name, shortDes, price, offer } = slider;
    // console.log(slider);

    return (
        <div>
            <img
                className="w-full"
                src={img}
                alt="" />

            <div className="absolute top-0 right-0 mt-20 mr-40">

                <div className="flex justify-end">
                    <p className="bg-gradient-to-r from-[#93D0C9] text-green-800 px-4 rounded-full text-lg font-medium">
                        {offer}
                    </p>
                    <p className="font-medium text-gray-700">
                        EXCLUSIVE OFFER
                    </p>
                </div>

                <div className="flex justify-end mt-8">
                    <h2 className="font-semibold text-6xl text-end w-[65%] text-gray-900">
                        {name}
                    </h2>
                </div>

                <p className="text-end text-gray-750 mt-4">
                    {shortDes}
                </p>
                <div className="flex items-end justify-end mt-4">
                    <p className="font-medium text-gray-800 mr-2">from</p>
                    <p className="text-5xl font-medium text-[#D51243]">
                        {price}
                    </p>
                </div>

                <div className="flex justify-end mt-16">
                    <p className="flex items-center w-fit px-8 py-3 bg-[#2BBEF9] text-white rounded-full">
                        <FaLongArrowAltLeft className="text-2xl mr-2" />Shop Now
                    </p>
                </div>

            </div>


        </div>
    );
};

export default SingleBanner;