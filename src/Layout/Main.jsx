import { Outlet } from "react-router-dom";
import Navbar from "../Page/HomePage/Navbar/Navbar";
import Footer from "../Page/HomePage/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;