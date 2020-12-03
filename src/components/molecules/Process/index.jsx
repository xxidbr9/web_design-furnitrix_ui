import React, { useEffect, useContext } from "react";
import Devider from "components/atoms/Devider";

import { TimelineLite, Power3 } from "gsap";
import { LoadingContext } from "utils/contexts/Loading";
import { TIME_OUT } from "utils/constants";

const ProcessList = ({ scrollOpt, index, parrent, isEnd, data, ...props }) => {
    const { loading } = useContext(LoadingContext);
    const elem = `${parrent}_${index}`;
    const pEnd = !isEnd ? "py-20" : "pt-20";

    const delay = !!index ? index + 1 : 1;

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                const tl = new TimelineLite(scrollOpt);
                tl.to(`#${elem}_heading`, {
                    opacity: 1,
                    duration: 0.5,
                    delay: delay - 0.5,
                    ease: Power3.easeOut,
                    y: 0
                }).to(`#${elem}_p`, {
                    x: 0,
                    delay: -0.5,
                    opacity: 1,
                    duration: 0.3,
                    ease: Power3.easeOut
                });
            }, TIME_OUT + 1000);
        }
    }, [elem, loading, delay, scrollOpt]);

    return (
        <>
            <div className={`flex flex-row ${pEnd}`} id={elem}>
                <div className='w-2/5 overflow-hidden'>
                    <h2
                        className='text-4xl tracking-wide transform translate-y-8 opacity-0'
                        id={`${elem}_heading`}>
                        {data.heading}
                    </h2>
                </div>
                <div className='w-2/5 overflow-hidden relative'>
                    <p
                        id={`${elem}_p`}
                        className='opacity-0 transform translate-x-8'>
                        {data.text}
                    </p>
                </div>
            </div>
            {!isEnd && <Devider />}
        </>
    );
};

export default ProcessList;
