import React, { useEffect, useRef, useContext, useLayoutEffect } from "react";
import Swiper from "components/organisms/SwiperList";
import Navbar from "components/organisms/Navbar";
import Hero from "components/organisms/Hero";
import Slogan from "components/organisms/Slogan";
import Process from "components/organisms/Process";
import ProductOne from "components/organisms/ProductOne";
import Footer from "components/organisms/Footer";
import BannerLoading from "components/atoms/BannerLoading";
import SmoothScroll from "components/atoms/SmoothContainer";

import { LoadingContext } from "utils/contexts/Loading";
import { TIME_OUT } from "utils/constants";

const HomeTemplate = () => {
    const { loading } = useContext(LoadingContext);

    const [opacity, setOpacity] = React.useState("opacity-0");
    const [display, setDisplay] = React.useState("hidden");

    const scrollRef = useRef(null);

    useEffect(() => {
        document.title = "FURNITRIX";
    }, []);

    useLayoutEffect(() => {
        if (!loading) {
            setTimeout(() => {
                setOpacity("opacity-100");
                setDisplay("block");
            }, TIME_OUT + 1000);
        }
    }, [loading]);


    return (
        <>
            <BannerLoading />
            <SmoothScroll>
                <div id='scroll-container' ref={scrollRef}>
                    <div className={display}>
                        <Navbar />
                        <Hero />
                        <Slogan />
                    </div>
                    <div className={opacity}>
                        <Swiper />
                    </div>
                    <div className={display}>
                        <Process />
                        <ProductOne />
                        <Footer />
                    </div>
                </div>
            </SmoothScroll>
        </>
    );
};

export default HomeTemplate;
