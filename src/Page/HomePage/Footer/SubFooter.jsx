import { LiaPhoneVolumeSolid } from "react-icons/lia";
import android from "../../../../public/android.png";
import ios from "../../../../public/ios.png";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import Stripe from "./Icon/Stripe";
import Paypal from "./Icon/Paypal";
import Master from "./Icon/Master";
import Visa from "./Icon/Visa";
import { Link } from "react-router-dom";

const SubFooter = () => {
    return (
        <div className="max-w-7xl mx-auto pt-8">

            <div className="grid grid-cols-12">
                <div className="flex items-center col-span-2">

                    <div
                        className="text-2xl rounded-full border p-2 w-fit flex items-center justify-center">
                        <LiaPhoneVolumeSolid />
                    </div>

                    <div className="ms-4">
                        <h2 className="text-2xl font-medium pt-2">
                            8 800 555-55
                        </h2>
                        <p className="text-xs text-gray-400">
                            Working on 8:00 - 22:00
                        </p>
                    </div>
                </div>

                <div className="col-span-10 flex items-center justify-end">

                    <div className="mr-7">
                        <h2 className="font-medium pt-2 text-sm text-end">
                            Download App on Mobile :
                        </h2>
                        <p className="text-xs text-gray-400 text-end">
                            15% discount on your first purchase
                        </p>
                    </div>

                    <div className="w-[25%] flex items-center">
                        <Link
                            to={"/"}>
                            <img
                                src={android}
                                alt="" />
                        </Link>
                        <Link
                            to={"/"}
                            className="ms-2">
                            <img
                                src={ios}
                                alt="" />
                        </Link>
                    </div>

                    <div
                        className="text-[#233A95] flex items-center text-lg ms-5">

                        <div className="p-2 rounded-full border ms-2 cursor-pointer">
                            <FaFacebookF />
                        </div>

                        <div className="p-2 rounded-full border ms-2 cursor-pointer">
                            <SiTwitter />
                        </div>

                        <div className="p-2 rounded-full border ms-2 cursor-pointer">
                            <BsInstagram />
                        </div>

                    </div>
                </div>
            </div>

            <hr className="my-8" />

            <div className="grid grid-cols-2 pb-6">

                <div className="text-gray-400 text-xs flex items-center">
                    Copyright 2023 © ESellPlus. All rights reserved Shakil Ahmed.
                </div>

                <div className="flex items-center justify-end text-gray-400 text-xs gap-3">

                    <p className="hover:underline cursor-pointer">
                        Privacy Policy
                    </p>

                    <p className="hover:underline cursor-pointer">
                        Terms and Conditions
                    </p>

                    <p className="hover:underline cursor-pointer">
                        Cookie
                    </p>

                    {/* icons section start */}
                    <Stripe />
                    <Paypal />
                    <Master />
                    <Visa />
                    {/* icons section end */}

                </div>
            </div>

        </div>
    );
};

export default SubFooter;