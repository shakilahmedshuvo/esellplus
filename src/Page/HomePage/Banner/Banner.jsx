import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SingleBanner from './SingleBanner';

const Banner = () => {
    const [bannerSlider, setBannerSlider] = useState([]);
    useEffect(() => {
        fetch('Banner.json')
            .then(res => res.json())
            .then(data => setBannerSlider(data))
    }, []);

    return (
        <div className='hidden lg:block'>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
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
        </div>
    );
};

export default Banner;