import { useEffect, useState } from "react";
import SingleDealProductCard from "./SingleDealProductCard";

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
                    <SingleDealProductCard
                        key={item.id}
                        item={item}
                    ></SingleDealProductCard>
                ))
            }
            {/* map section end */}
        </div >
    );
};

export default LeftDealOfTheWeek;