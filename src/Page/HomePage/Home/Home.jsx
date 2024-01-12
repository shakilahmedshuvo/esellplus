import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import DealOfTheWeek from "../DealOfTheWeek/DealOfTheWeek";
import Save from "../Save/Save";

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <Save />
            <DealOfTheWeek />
        </>
    );
};

export default Home;