import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SingleBanner from './SingleBanner';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [bannerSlider, setBannerSlider] = useState([]);
    useEffect(() => {
        fetch('Banner.json')
            .then(res => res.json())
            .then(data => setBannerSlider(data))
    }, []);

    return (
        <Link
            to={"/"}
            className='hidden lg:block'>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <>
                        {
                            bannerSlider.map((slider) => (
                                <SwiperSlide
                                    key={slider.id}>
                                    <SingleBanner slider={slider} />
                                </SwiperSlide>
                            ))
                        }
                    </>
                </Swiper>
            </>
        </Link>
    );
};

export default Banner;