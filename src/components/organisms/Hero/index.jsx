import React, { useContext, useEffect } from "react";
import { TimelineLite, Power3, Power4 } from "gsap";

import Devider from "components/atoms/Devider";
import Image_1 from "assets/images/chair_1.jpeg";
import ArrowUoRight from "assets/svg/arrow-up-right.svg";

import { LoadingContext } from "utils/contexts/Loading";
import { TIME_OUT } from "utils/constants";

const Hero = () => {
    // eslint-disable-next-line
    const { handlerLoad, loadRef, percentage, loading } = useContext(
        LoadingContext
    );

    useEffect(() => {
        const HeroTimeline = new TimelineLite();
        if (!loading) {
            setTimeout(() => {
                HeroTimeline.to("#bgOverflow", {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    rotate: "3deg",
                    duration: 1.5,
                    ease: Power3.easeOut
                })
                    .to(["#textH3", "#textH1_1", "#textH1_2"], {
                        delay: -0.5,
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: Power3.easeOut,
                        stagger: {
                            amount: 0.5
                        }
                    })
                    .to("#devider", {
                        opacity: 1,
                        delay: -1,
                        duration: 0.3
                    })
                    .to("#bottomText", {
                        y: 0,
                        ease: Power3.easeOut,
                        opacity: 1,
                        duration: 0.7,
                        delay: -0.5
                    })
                    .to("#base_img", {
                        y: 0,
                        opacity: 1,
                        delay: -0.2,
                        duration: 1,
                        // height:"100%",
                        ease: Power3.easeOut
                    })
                    .to("#img_chair", {
                        delay: -0.3,
                        duration: 1,
                        scale: 1.15,
                        ease: Power4.easeOut
                    });
            }, TIME_OUT + 1000);
        }
    }, [loading]);

    return (
        <section
            id='hero'
            className='h-screen w-full overflow-hidden relative'>
            <div
                id='bgOverflow'
                className='absolute w-3/4 bg-brown-300 -right-4 transform rotate-12 -top-6 overflow-hidden opacity-0 -translate-y-64 translate-x-14'
                style={{
                    zIndex: -100,
                    height: "90%"
                }}></div>
            <div className='flex flex-row z-20'>
                {/* Image start */}
                <div className='w-2/5 pt-32'>
                    <div
                        className='h-auto w-4/5 overflow-hidden transform translate-y-20 opacity-0 '
                        id='base_img'>
                        <img
                            id='img_chair'
                            ref={loadRef}
                            onLoad={handlerLoad}
                            src={Image_1}
                            alt='test'
                            className=' object-cover shadow-xl '
                        />
                    </div>
                </div>
                {/* Image end  */}

                {/* Hero Start  */}
                <div className=' pt-36 max-w-2xl'>
                    <div className='py-10'>
                        <h3
                            id='textH3'
                            className='font-medium text-base tracking-widest opacity-0 transform translate-y-8'>
                            WE SIMPLEFY THE ERA
                        </h3>
                        <h1
                            id='textH1_1'
                            className='font-semibold text-5xl py-2 opacity-0 transform translate-y-8'>
                            We make furniture with love and passions.
                        </h1>
                        <h1
                            id='textH1_1'
                            className='font-semibold text-5xl py-2 opacity-0 transform translate-y-8'>
                            No doubt, really.
                        </h1>
                    </div>
                    <Devider
                        className='border-gray-500 opacity-0'
                        id='devider'
                    />
                    <div
                        className='pt-6 flex flex-row align-top opacity-0 transform -translate-y-8'
                        id='bottomText'>
                        <div className='w-2/3'>
                            Founded in 2005, Furnitrix is a company makes
                            variety of aesthetic and functionalis furniture for
                            marker needs.
                        </div>
                        <div className='flex gap-1 cursor-pointer '>
                            <h5 className='tracking-widest font-medium text-sm'>
                                EXPLORE OUR PRODUCTS
                            </h5>
                            <img
                                onLoad={handlerLoad}
                                ref={loadRef}
                                src={ArrowUoRight}
                                alt='Go Icon'
                                className='w-4 h-4'
                            />
                            {/* <span>SVG</span> */}
                        </div>
                    </div>
                </div>
                {/* Hero End  */}
            </div>
        </section>
    );
};

export default Hero;
