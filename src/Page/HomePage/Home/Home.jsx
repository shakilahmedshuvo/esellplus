import Banner from "../Banner/Banner";
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
            <Save />
        </>
    );
};

export default Home;