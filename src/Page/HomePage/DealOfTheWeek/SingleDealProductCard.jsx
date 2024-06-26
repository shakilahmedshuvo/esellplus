import { FaStar } from "react-icons/fa6";

const SingleDealProductCard = ({ item }) => {
    const { percentage, img, recommended, name, rating, ratingGiven, inStock, beforePrice, price } = item;

    return (
        <div
            className="border border-gray-100 group group/item cursor-pointer hover:shadow-xl duration-100">

            {/* img section start */}
            <div className="mx-5 mt-5">
                <h2
                    className="bg-[#2BBEF9] font-medium text-white text-center w-fit text-xs px-4 py-1 rounded-md">
                    {percentage}%
                </h2>

                <div className="flex items-center justify-center h-[155px]">
                    <img
                        className="w-[150px]"
                        src={img}
                        alt="" />
                </div>


                <div className="relative">
                    <h2
                        className={`${recommended ? 'absolute bottom-32 bg-[#71778E] font-medium w-fit text-[9.5px] text-white py-1 px-2 rounded-md' : ''}`}>
                        {
                            recommended ?
                                'RECOMMENDED' : ''
                        }
                    </h2>
                </div>


            </div>
            {/* img section end */}

            {/* details section start */}
            <div className="mx-6">

                <h2 className="text-gray-600">
                    {name}
                </h2>

                {/* 
                <div className="flex items-center justify-between"> */}
                {/* rating section start */}

                <p
                    className={`${inStock ? 'text-green-500 text-xs font-medium my-1' : 'text-red-500 text-xs font-medium my-1'}`}>
                    {
                        inStock ?
                            'In Stock' : 'Out of Stock'
                    }
                </p>
                <div className="my-2 text-xs flex items-center">
                    <div className="text-[#FFCD00] flex items-center">
                        {
                            rating?.map((one, index) => (
                                <p key={index + 1}>
                                    <FaStar />
                                </p>
                            ))
                        }
                    </div>

                    <p className="ms-2 text-gray-500">
                        ({ratingGiven})
                    </p>
                </div>
                {/* rating section end */}

                <div className="flex items-center font-semibold mt-2">

                    <h2 className="text-[#C2C2D3] line-through">
                        ${beforePrice}
                    </h2>

                    <p className="text-lg mx-2">
                        -
                    </p>

                    <h2 className="text-[#D61949] text-xl font-medium">
                        ${price}
                    </h2>

                </div>

                <button
                    // onClick={}
                    className="bg-[#233A95] text-white w-full text-center text-xs py-2 rounded-full mt-5 mb-4 opacity-0 group-hover:opacity-100 duration-500">
                    Add to the cart
                </button>

            </div>
            {/* details section end */}

        </div>
    );
};

export default SingleDealProductCard;