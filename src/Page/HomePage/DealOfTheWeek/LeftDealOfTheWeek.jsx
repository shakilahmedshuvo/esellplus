import { useEffect, useState } from "react";

const LeftDealOfTheWeek = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("DealOfTheWeek.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className="grid grid-cols-3 mx-2">
            {/* map section start */}
            {
                product.slice(0, 6).map(item => (
                    // single card section start
                    <div
                        className="border border-gray-200"
                        key={item?.id}>

                        {/* img section start */}
                        <div className="mx-5 mt-4">
                            <h2
                                className="bg-[#2BBEF9] font-medium text-white text-center w-fit text-xs px-3 py-1 rounded-md">
                                {item?.percentage}%
                            </h2>

                            <div className="flex items-center justify-center">
                                <img
                                    className="w-[65%]"
                                    src={item?.img}
                                    alt="" />
                            </div>


                            <h2
                                className={`${item.recommended ? 'relative bottom-32 bg-[#71778E] font-medium w-fit text-xs text-white py-1 px-2 rounded-md' : ''}`}>
                                {
                                    item.recommended ?
                                        'RECOMMENDED' : ''
                                }
                            </h2>


                        </div>
                        {/* img section end */}

                        {/* <p
                            className={`${item.inStock ? 'text-green-500' : 'text-red-500'}`}>
                            {
                                item.inStock ?
                                'In Stock' : 'Out of Stock'
                            }
                        </p> */}
                    </div>
                    // single card section end
                ))
            }
            {/* map section end */}
        </div>
    );
};

export default LeftDealOfTheWeek;