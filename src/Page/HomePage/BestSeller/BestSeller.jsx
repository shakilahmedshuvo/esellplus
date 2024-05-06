import { useEffect, useState } from "react";
import SingleDealProductCard from "../DealOfTheWeek/SingleDealProductCard";

const BestSeller = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('DealOfTheWeek.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-16">

            <>
                <h2 className="text-xl font-semibold">
                    BEST SELLERS
                </h2>
                <p className="mb-3 text-[10px]">
                    Do not miss the current offers until the end of March.
                </p>
            </>

            <div className="grid grid-cols-5">
                {/* map section start */}
                {
                    data.slice(6, 11).map(item => (
                        <SingleDealProductCard
                            key={item.id}
                            item={item}
                        ></SingleDealProductCard>
                    ))
                }
                {/* map section end */}
            </div>
        </div>
    );
};

export default BestSeller;