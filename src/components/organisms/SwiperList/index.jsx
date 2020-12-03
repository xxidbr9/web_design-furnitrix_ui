/* eslint-disable-next-line */
import { useRef, useEffect, useState, useContext } from "react";
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// context
import { LoadingContext } from "utils/contexts/Loading";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Data from "./dataPhoto.json";

import ArrowNext from "assets/svg/arrow-right.svg";
import ArrowLeft from "assets/svg/arrow-left.svg";
import CardFurniture from "components/molecules/CardFurniture";

SwiperCore.use([Navigation, A11y, Autoplay]);

// eslint-disable-next-line
export default () => {
    const [swipeRef, setSwiperRef] = useState(null);
    // const [isRun, setIsRun] = useState(true);

    const { handlerLoad, loadRef } = useContext(LoadingContext);

    useEffect(() => {
    }, [swipeRef]);

    const handleMouseEnter = e => {
        swipeRef?.autoplay?.stop();
    };

    const handleMouseOut = e => {
        swipeRef?.autoplay?.start();
    };

    const handleNext = e => {
        swipeRef?.slideNext(100);
    };

    const handlePrev = e => {
        swipeRef?.slidePrev(100);
    };

    return (
        <div className='py-10'>
            <div className='flex justify-end container mx-auto mb-4'>
                <button className='h-12 w-12' onClick={handlePrev}>
                    <img
                        onLoad={handlerLoad}
                        ref={loadRef}
                        src={ArrowLeft}
                        alt='Arrow prev'
                        className='w-full h-full'
                    />
                </button>
                <button className='h-12 w-12' onClick={handleNext}>
                    <img
                        onLoad={handlerLoad}
                        ref={loadRef}
                        src={ArrowNext}
                        alt='Arrow Next'
                        className='w-full h-full'
                    />
                </button>
            </div>
            <Swiper
                // spaceBetween={50}
                slidesPerView={3}
                loop={true}
                onSwiper={el => setSwiperRef(el)}
                autoplay={{ delay: 2000, disableOnInteraction: false }}>
                {Data.map((item, i) => (
                    <SwiperSlide
                        className='aSwiper'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseOut}
                        key={i}>
                        <CardFurniture data={item} index={i} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
