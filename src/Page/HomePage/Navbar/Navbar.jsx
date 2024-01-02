import TopNavbar from "./TopNavbar";
import logo from "../../../../public/logo.png";

const Navbar = () => {
    return (
        <div>
            <TopNavbar />

            <div className="max-w-7xl mx-auto grid grid-cols-12">

                {/* logo section start */}
                <div className="flex">

                    <img
                        src={logo}
                        alt="" />

                    <div>
                        <h2 className="text-3xl font-semibold">
                            ESEllPLUS
                        </h2>
                    </div>
                </div>
                {/* logo section end */}

            </div>

        </div>
    );
};

export default Navbar;