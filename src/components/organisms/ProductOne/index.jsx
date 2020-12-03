import React, { useContext, useEffect } from "react";
import { LoadingContext } from "utils/contexts/Loading";
import { TimelineLite, Power3 } from "gsap";
import { TIME_OUT } from "utils/constants";
const ProductOne = () => {
    const { handlerLoad, loadRef, loading } = useContext(LoadingContext);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                const tl = new TimelineLite({
                    scrollTrigger: {
                        trigger: "#product_one",
                        start: "top center",
                        // markers: true,
                        id: "Process One"
                    }
                });
                tl.to("#frame_video", {
                    opacity: 1,
                    width: "100%",
                    height: "100%",
                    justifySelf: "end",
                    float: "right",
                    duration: 2,
                    ease: Power3.easeInOut
                })
                    .to(["#aksen", "#content_product"], {
                        delay: -1,
                        height: "auto",
                        opacity: 1,
                        duration: 0.3,
                        ease: Power3.easeOut,
                        stagger: {
                            amount: 0.1
                        }
                    })
                    .to("#content_product", {
                        x: 0,
                        duration: 1,
                        ease: Power3.easeOut
                    })
                    .to(["#heading_product", "#p_product"], {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: {
                            amount: 0.25
                        }
                    });
            }, TIME_OUT + 1000);
        }
    }, [loading]);

    return (
        <section className='h-screen' id='product_one'>
            <div className='relative flex h-full my-16 '>
                <div className='w-2/5 container h-auto'>
                    <div className='max-w-screen-lg absolute flex mx-auto right-0 left-0 top-1/3 overflow-hidden'>
                        <div
                            className='w-2 bg-lbrown-700 h-0 opacity-0 z-30'
                            id='aksen'></div>
                        <div className='w-2/3'>
                            <div
                                className='bg-brown-500 px-12 py-16 transform -translate-x-full opacity-0 shadow-xl z-30'
                                id='content_product'>
                                <h1
                                    className='text-4xl font-thin opacity-0 transform translate-y-8'
                                    id='heading_product'>
                                    Restless with furniture design, John finally
                                    makes his own furniture in his father's
                                    warehouse.
                                </h1>
                                <p
                                    className='pt-4 opacity-0 transform translate-y-8'
                                    id='p_product'>
                                    finally, his uncle saw the work he made,
                                    then without thinking, uncle John bought
                                    John's furniture for $261,827 cash!.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/5 h-3/4 self-center flex items-center'>
                    <iframe
                        // ref={el => {
                        //     const t = !!el?.contentDocument
                        //         ? el?.contentDocument
                        //         : el?.contentWindow?.document;
                        //     console.log(t);
                        // }}
                        onLoad={handlerLoad}
                        ref={loadRef}
                        className='h-3/5 w-3/5 bg-cover opacity-0 float-right self-center'
                        title='Video Stock'
                        id='frame_video'
                        src='https://www.youtube.com/embed/Lvg3WR9PGGY'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default ProductOne;
