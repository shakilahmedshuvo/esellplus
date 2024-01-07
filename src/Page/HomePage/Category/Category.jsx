import shirt from "../../../../public/category/shirt.png";
import tShirt from "../../../../public/category/t-shirt.png";
import jeans from "../../../../public/category/jens.png";
import blezer from "../../../../public/category/blezer.png";
import hoddie from "../../../../public/category/hoddie.png";
import jacket from "../../../../public/category/jacket.png";
import snakers from "../../../../public/category/snekers.png";
import watch from "../../../../public/category/watch.png";
import belt from "../../../../public/category/belt.png";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-28">

            <Link
                to={"/"}
                className="col-span-2 border py-12 px-6 rounded-s-md">
                <div className="flex items-center justify-center">
                    <img
                        className="w-[90%]"
                        src={shirt}
                        alt="" />
                </div>

                <div className="col-span-2 cursor-pointer text-center mt-1">
                    <p className="font-medium text-gray-700">
                        Mens Shirt
                    </p>
                    <p className="text-gray-400 text-xs">
                        100+ items
                    </p>
                </div>

            </Link>

            <div className="col-span-10 grid grid-cols-4">

                <div className="grid grid-row-2">

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36">

                        <img
                            src={tShirt}
                            alt="" />

                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Mens T-Shirt
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>

                    </Link>

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36">

                        <img
                            src={jeans}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Mens Jeans
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>

                    </Link>
                </div>

                <div className="grid grid-row-2">

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36">
                        <img
                            src={blezer}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Mens Blazer
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>
                    </Link>

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36">
                        <img
                            src={hoddie}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Mens Hoodie
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-row-2">

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36">
                        <img
                            src={jacket}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Mens Jacket
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>
                    </Link>

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36">
                        <img
                            src={snakers}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Shoe & Sneakers
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-row-2">

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36 rounded-tr-md">
                        <img
                            src={watch}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Watch & Accessories
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>
                    </Link>

                    <Link
                        to={"/"}
                        className="grid grid-cols-3 px-6 pt-7 border h-36 rounded-br-md">
                        <img
                            src={belt}
                            alt="" />
                        <div className="col-span-2 cursor-pointer ms-5 mt-1">
                            <p className="font-medium text-gray-700">
                                Luxury Accessories
                            </p>
                            <p className="text-gray-400 text-xs">
                                100+ items
                            </p>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Category;