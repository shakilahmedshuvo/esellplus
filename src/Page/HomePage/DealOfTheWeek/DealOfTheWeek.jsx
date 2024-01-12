import RightDealOfTheWeek from "./RightDealOfTheWeek";
import LeftDealOfTheWeek from "./LeftDealOfTheWeek";

const DealOfTheWeek = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-5">
            {/* right section div start */}
            <div className="col-span-2">
                <RightDealOfTheWeek />
            </div>

            {/* left section div */}
            <div className="col-span-3">
                <LeftDealOfTheWeek />
            </div>
        </div>
    );
};

export default DealOfTheWeek;