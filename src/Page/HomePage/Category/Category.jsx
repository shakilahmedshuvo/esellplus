import shirt from "../../../../public/category/shirt.png";
import tShirt from "../../../../public/category/t-shirt.png";
import jeans from "../../../../public/category/jens.png";
import blezer from "../../../../public/category/blezer.png";
import hoddie from "../../../../public/category/hoddie.png";
import jacket from "../../../../public/category/jacket.png";
import snakers from "../../../../public/category/snekers.png";
import watch from "../../../../public/category/watch.png";
import belt from "../../../../public/category/belt.png";

const Category = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12 mt-28">

            <div className="col-span-2 border py-12 px-6 rounded-s-md">
                <div className="flex items-center justify-center">
                    <img
                        className="w-[90%]"
                        src={shirt}
                        alt="" />
                </div>

                <div className="text-center mt-1">
                    <p className="font-medium">
                        Mens Shirt
                    </p>
                    <p className="text-gray-400 text-xs">50+ items</p>
                </div>

            </div>

            <div className="col-span-10 grid grid-cols-4">

                <div className="grid grid-row-2">

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">

                        <img
                            src={tShirt}
                            alt="" />

                        <div className="col-span-2">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">

                        <img
                            src={jeans}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>

                    </div>
                </div>

                <div className="grid grid-row-2">

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">
                        <img
                            src={blezer}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">
                        <img
                            src={hoddie}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-row-2">

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">
                        <img
                            src={jacket}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">
                        <img
                            src={snakers}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-row-2">

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">
                        <img
                            src={watch}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 px-4 pt-12 border h-36">
                        <img
                            src={belt}
                            alt="" />
                        <div className="text-center">
                            <p className="font-medium">
                                Mens Shirt
                            </p>
                            <p className="text-gray-400 text-xs">50+ items</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Category;