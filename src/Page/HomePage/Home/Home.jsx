import Banner from "../Banner/Banner";
import BestSeller from "../BestSeller/BestSeller";
import Category from "../Category/Category";
import DealOfTheWeek from "../DealOfTheWeek/DealOfTheWeek";
import PictureSection from "../PictureSection/PictureSection";
import Save from "../Save/Save";

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <DealOfTheWeek />
            <PictureSection />
            < BestSeller />
            <Save />
        </>
    );
};

export default Home;