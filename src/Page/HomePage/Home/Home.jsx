import Banner from "../Banner/Banner";
import BestSeller from "../BestSeller/BestSeller";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import DealOfTheWeek from "../DealOfTheWeek/DealOfTheWeek";
import PictureSection from "../PictureSection/PictureSection";
import PictureSectionTwo from "../PictureSection/PictureSectionTwo";
import Save from "../Save/Save";

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <DealOfTheWeek />
            <PictureSection />
            <BestSeller />
            <Save />
            <PictureSectionTwo />
            <Blog />
        </>
    );
};

export default Home;