import { useEffect, useState } from "react";

const LeftDealOfTheWeek = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("DealOfTheWeek.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div>
            {/* {
                product.map(item => (
                    <div key={item.id}>
                        <h2 >{item.name}</h2>
                        <p
                            className={`${item.inStock ? 'text-green-500' : 'text-red-500'}`}>
                            {
                                item.inStock ?
                                    'In Stock' : 'Out of Stock'
                            }
                        </p>
                    </div>
                ))
            } */}
        </div>
    );
};

export default LeftDealOfTheWeek;