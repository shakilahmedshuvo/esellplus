import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PictureSectionTwo = () => {
    // picture data load
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('Picture.json')
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, []);

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 my-8">

            {/* map section start */}
            {
                item?.map((item) => (
                    <div key={item?.id} className="relative">
                        <img
                            className="rounded-xl"
                            src={item?.img}
                            alt="" />

                        <div className="absolute top-0 mt-8 ms-10">

                            <h2 className="text-[#00B853] font-medium text-sm">
                                WEEKEND DISCOUNT
                                <br />
                                {item?.discount}%
                            </h2>

                            <h2 className="text-2xl font-bold text-[#3E445A] mt-2">
                                {item?.name}
                            </h2>

                            <p className="text-xs text-[#C2C2D3] font-normal mt-2 mb-10">
                                {item?.des}
                            </p>

                            <Link to={"/"}
                                className="w-fit bg-[#C2C2D3] text-white rounded-full px-6 py-3 text-xs">
                                Shop Now
                            </Link>

                        </div>
                    </div>
                ))
            }
            {/* map section end */}
        </div>
    );
};

export default PictureSectionTwo;