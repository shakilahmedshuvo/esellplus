const SingleBanner = ({ slider }) => {
    const { img, name, shortDes, price, offer } = slider;
    // console.log(slider);

    return (
        <div>
            <img className="w-full" src={img} alt="" />
        </div>
    );
};

export default SingleBanner;