import React, { useEffect, useContext } from "react";
import { TimelineMax, Power3, Power4 } from "gsap";
import { LoadingContext } from "utils/contexts/Loading";

const BannerLoading = () => {
    const { percentage, loading } = useContext(LoadingContext);

    const handleRemove = e => {
        console.log(e.target.remove());
    };
    useEffect(() => {
        if (!loading) {
            const BgMove = new TimelineMax();

            BgMove.to("#firstBg", {
                opacity: 0,
                ease: Power3.easeInOut,
                duration: 1
            })
                .to(["#secBg", "#thirdBg"], {
                    y: -100,
                    delay: 0.5,
                    duration: 1.5,
                    skewY: 0.5,
                    height: 0,
                    ease: Power3.easeOut,
                    stagger: {
                        amount: 0.2
                    }
                })
                .from("#textFinal", {
                    opacity: 0,
                    fontSize: 20,
                    duration: 0.5,
                    ease: Power4.easeOut
                })
                .to("#textFinal", {
                    fontSize: "2.8rem",
                    duration: 0.2,
                    ease: Power3.easeOut
                })
                .to(["#finalBg"], {
                    opacity: 0,
                    display: "hidden",
                    duration: 1,
                    ease: Power3.easeIn
                });
        }
    }, [loading]);
    return (
        <div className="w-full h-full overflow-hidden">
            <div
                className='absolute w-full h-screen z-50 flex justify-center items-center '
                id='firstBg'
                onClick={handleRemove}>
                <h1 className='text-center text-4xl'>{percentage} %</h1>
            </div>
            <div
                className='absolute w-full h-full bg-brown-500 z-40'
                id='secBg'
                onClick={handleRemove}></div>
            <div
                className='absolute w-full h-full bg-newblue-500 z-30'
                id='thirdBg'
                onClick={handleRemove}></div>
            <div
                className='absolute w-full h-full bg-white z-20 flex justify-center items-center'
                id='finalBg'
                onClick={handleRemove}>
                <h1
                    className='flex-initial text-5xl font-sans tracking-widest font-medium text-mainbrown-500 text-center'
                    id='textFinal'>
                    FURNITRIX
                </h1>
            </div>
        </div>
    );
};

export default BannerLoading;
