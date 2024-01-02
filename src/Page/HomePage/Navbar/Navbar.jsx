import TopNavbar from "./TopNavbar";
import logo from "../../../../public/logo.png";

const Navbar = () => {
    return (
        <div>
            <TopNavbar />

            <div className="max-w-7xl mx-auto grid grid-cols-12">

                {/* logo section start */}
                <div className="col-span-2">
                    <div className="flex">

                        {/* <div className="flex"> */}
                        <img
                            className="h-[70%] mt-2"
                            src={logo}
                            alt="" />
                        {/* </div> */}

                        <div>
                            <h2
                                className="text-2xl font-semibold text-[#223994] flex items-center justify-center pt-8 pl-3">
                                ESEllPLUS
                                {/* ESellPlus */}
                            </h2>

                        </div>
                    </div>
                    <p className="text-xs text-gray-400 ml-1">
                        Online Fashion Shopping Center
                    </p>
                </div>
                {/* logo section end */}

            </div>

        </div>
    );
};

export default Navbar;