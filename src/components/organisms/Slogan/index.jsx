import React, { useEffect, useContext } from "react";

import {  Power3, gsap } from "gsap";
import { LoadingContext } from "utils/contexts/Loading";
import { TIME_OUT } from "utils/constants";

const Slogan = () => {
    const { loading } = useContext(LoadingContext);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                const Timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#slogan",
                        start: "top center",
                        // scrub: true,
                        // markers: true,
                        id: "Slogan"
                    }
                });
                Timeline.to(["#text_1", "#text_2", "#text_3"], {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Power3.easeOut,
                    stagger: {
                        amount: 0.5
                    }
                });
            }, TIME_OUT + 1000);
        }
        // Timeline.addLabel("Start").from("#slogan",)
    }, [loading]);

    return (
        <section id='slogan' className='w-full h-96'>
            <div className='flex my-20 h-full max-w-screen-lg m-auto'>
                <div className='text-4xl text-center m-auto align-middle tracking-wide leading-snug'>
                    <h1
                        id='text_1'
                        className='opacity-0 transform translate-y-20'>
                        Are you relize that technology makes everything simpler?
                    </h1>
                    <h1
                        id='text_2'
                        className='opacity-0 transform translate-y-20'>
                        Likewise, we made simplified furniture for this era,
                    </h1>
                    <h1
                        id='text_3'
                        className='opacity-0 transform translate-y-20'>
                        For what? For Better life humanity.
                    </h1>
                </div>
            </div>
            <div className='slahs' id='endSlogan'></div>
        </section>
    );
};

export default Slogan;
