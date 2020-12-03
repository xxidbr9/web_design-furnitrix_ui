import React, { useContext, useRef } from "react";
import moneyFormater from "utils/helper/moneyFormater";

import ArrowNext from "assets/svg/arrow-right.svg";
import { LoadingContext } from "utils/contexts/Loading";
import { TimelineLite, Power4 } from "gsap";

const CardFurniture = ({ data, index }) => {
    const { handlerLoad, loadRef } = useContext(LoadingContext);
    const ContainerRef = useRef(null);

    const onHover = el => {
        const TimeLine = new TimelineLite();
        TimeLine.to(ContainerRef.current.children[1], {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: Power4.easeOut
        }).to(ContainerRef.current.children[0], {
            scale: 1.2,
            duration: 0.5,
            delay: -0.5,
            ease: Power4.easeOut
        });
        // console.log(ContainerRef.current.children);
    };

    const onLeave = el => {
        const TimeLine = new TimelineLite();
        TimeLine.to(ContainerRef.current.children[1], {
            y: "3rem",
            opacity: 0,
            duration: 0.5,
            ease: Power4.easeOut
        }).to(ContainerRef.current.children[0], {
            scale: 1,
            duration: 0.5,
            delay: -0.5,
            ease: Power4.easeOut
        });
    };

    return (
        <div
            className='contain h-96 overflow-hidden relative'
            id={`image-${index}`}
            ref={ContainerRef}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}>
            <img
                onLoad={handlerLoad}
                ref={loadRef}
                src={data.img}
                alt={data.name}
                className='bg-cover w-full h-full object-cover scale-0'
            />
            <div
                className='absolute bottom-0 py-4 bg-white w-3/5 px-2 flex justify-around items-center opacity-0 transform translate-y-12'
                id={`bottom_${index}`}>
                <div>
                    <h3 className='text-2xl font-thin'>{data.name}</h3>
                    <h4 className='font-medium'>{moneyFormater(data.price)}</h4>
                </div>
                <span>
                    <img
                        src={ArrowNext}
                        alt='next icon'
                        className='w-8 h-8'
                        onLoad={handlerLoad}
                        ref={loadRef}
                    />
                </span>
            </div>
        </div>
    );
};

export default CardFurniture;
