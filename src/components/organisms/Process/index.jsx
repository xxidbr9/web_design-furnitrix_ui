import React, { useEffect, useContext, useMemo } from "react";
import ProcessCard from "components/molecules/Process";

import { TimelineLite, Power3 } from "gsap";
import { TIME_OUT } from "utils/constants";
import { LoadingContext } from "utils/contexts/Loading";

const ProcessData = [
    {
        heading: "Concept",
        text: (
            <>
                Every time you make a work, a concept is something that is very
                necessary. We cecetualize the best we can, this is us, this is
                <span className='ml-1'>FURNITRIX</span>
            </>
        )
    },
    {
        heading: "Crafting",
        text: (
            <>
                The Concept has been created, then we carry out the execution of
                the concept that we made carefully and throughly, very
                intresting.
            </>
        )
    },
    {
        heading: "Testing",
        text: (
            <>
                We always test all of products. This is to ensure quality is
                maintained. Our products always excel due to rigorous test
                process.
            </>
        )
    }
];
const Process = () => {
    const parrent = "the_process";
    const { loading } = useContext(LoadingContext);

    const scrollOpt = useMemo(
        () => ({
            scrollTrigger: {
                trigger: "#process",
                start: "top center",
                // scrub: true,
                // markers: true,
                id: "Process"
            }
        }),
        []
    );
    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                const Times = new TimelineLite(scrollOpt);
                Times.to(`#${parrent}`, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: Power3.easeOut
                });
            }, TIME_OUT + 1000);
        }
    }, [loading, scrollOpt]);

    return (
        <section id='process' className='pt-10'>
            <div className='container max-w-screen-lg mx-auto'>
                <div className='tracking-widest font-medium text-sm overflow-hidden'>
                    <h1
                        className='transform translate-y-8 opacity-0'
                        id={parrent}>
                        THE PROCESS
                    </h1>
                </div>
                {ProcessData.map((item, index) => (
                    <ProcessCard
                        key={index}
                        data={{
                            heading: `${index + 1}. ${item.heading}`,
                            text: item.text
                        }}
                        parrent={parrent}
                        index={index}
                        scrollOpt={scrollOpt}
                        isEnd={index === ProcessData.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Process;
