import { useEffect, useState } from "react";
import SingleDealProductCard from "../DealOfTheWeek/SingleDealProductCard";

const ProductSection = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('DealOfTheWeek.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className="max-w-7xl mx-auto mb-8">
            <div className="grid lg:grid-cols-5">

                {/* map section start */}
                {
                    data.slice(11, 23).map(item => (
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

export default ProductSection;