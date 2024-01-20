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
        <div className="max-w-7xl mx-auto">

            <div></div>
            <div className="grid grid-cols-5">
                {/* map section start */}
                {
                    data.slice(7, 12).map(item => (
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