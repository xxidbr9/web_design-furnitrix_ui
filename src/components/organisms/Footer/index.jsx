import React, { useEffect, useContext, useMemo } from "react";
import { TimelineLite, Power4 } from "gsap";
import { LoadingContext } from "utils/contexts/Loading";
import { TIME_OUT } from "utils/constants";

const Footer = () => {
    const { loading } = useContext(LoadingContext);
    const menu = useMemo(
        () => [
            {
                header: "contact",
                list: [
                    "62 Orp St. Seattle, USA",
                    "sales@furnitrix.com",
                    "+1 800 729 012 983"
                ]
            },
            {
                header: "our company",
                list: ["Profile", "Blog", "Career"]
            },
            {
                header: "Blogs",
                list: ["About", "Company", "How To"]
            }
        ],
        []
    );

    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                const trigerOpts = {
                    scrollTrigger: {
                        trigger: "#footer",
                        start: "top center",
                        // scrub: true,
                        // markers: true,
                        id: "Footer"
                    }
                };

                const tl = new TimelineLite(trigerOpts);
                tl.to(["#footer_text", "#subText_footer"], {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: Power4.easeOut,
                    stagger: {
                        amount: 0.5
                    }
                }).to("#form_footer", {
                    bottom: "-2rem",
                    opacity: 1,
                    duration: 0.5,
                    ease: Power4.easeOut
                });

                const tl2 = new TimelineLite(trigerOpts);

                tl2.to(
                    ["#footer_brand", "#footer_subText_1", "#footer_subText_2"],
                    {
                        delay: 1.5,
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: {
                            amount: 0.5
                        },
                        ease: Power4.easeOut
                    }
                )
                    .to(
                        menu.map((e, i) => `#footer_menu_${i}`),
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: {
                                amount: 0.5
                            },
                            ease: Power4.easeOut
                        }
                    )
                    .to("#footer_author", {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: Power4.easeOut
                    });
            }, TIME_OUT + 1000);
        }
    }, [loading, menu]);
    return (
        <section id='footer'>
            <div className='flex pt-12 flex-col items-center max-w-screen-lg m-auto relative'>
                <h1
                    className='text-4xl transform translate-y-8 opacity-0'
                    id='footer_text'>
                    Subscribe to our newsletter to get updated
                </h1>
                <p
                    className='pt-6 pb-16  w-2/3 text-center translate-y-8 opacity-0'
                    id='subText_footer'>
                    So we don't know when the will lounch. Therefore we recomend
                    that you subscribe to our newsletter so you don't miss the
                    latest updates
                </p>
                <div
                    className='z-20 absolute bottom-0 opacity-0'
                    id='form_footer'>
                    <input
                        type='text'
                        placeholder='Email address'
                        className='border-t-2 border-l-2 border-b-2 border-brown-500 px-4 py-3 outline-none'
                    />
                    <button className='px-8 py-3 border-mainbrown-500 border-t-2 border-b-2 bg-mainbrown-500 outline-none focus:outline-none align-middle text-white'>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className='w-full pt-24 pb-16 bg-brown-500 relative'>
                <div className='flex container max-w-screen-lg m-auto align-top'>
                    <div className='w-2/5 overflow-hidden'>
                        <h1
                            className='text-5xl text-mainbrown-500 tracking-widest pb-6 transform translate-y-8 opacity-0'
                            id='footer_brand'>
                            FURNITRIX
                        </h1>
                        <h4
                            className='py-2 transform translate-y-8 opacity-0'
                            id='footer_subText_1'>
                            We meke furniture with love and passions.
                        </h4>
                        <h4
                            className='transform translate-y-8 opacity-0'
                            id='footer_subText_2'>
                            No doubt, really,
                        </h4>
                    </div>
                    <div className='w-3/5 flex '>
                        {/* loop here  */}
                        {menu.map((e, i) => (
                            <div
                                className='w-2/3 flex flex-col overflow-hidden transform -translate-y-4 opacity-0'
                                id={`footer_menu_${i}`}>
                                <h1 className='pb-2 tracking-wider font-medium uppercase '>
                                    {e.header}
                                </h1>
                                {e.list.map((a, n) => (
                                    <div
                                        key={n}
                                        className='py-1 cursor-pointer'>
                                        {a}
                                    </div>
                                ))}
                            </div>
                        ))}
                        {/* end Loop */}
                    </div>
                </div>
                <div
                    className='text-center absolute w-full bottom-0 pb-4 transform -translate-y-6 opacity-0'
                    id='footer_author'>
                    Made with ♥ by{" "}
                    <a
                        href='https://github.com/xxidbr9'
                        className='hover:text-mainbrown-500 duration-200 ease-in-out'
                        target='_blank'
                        rel='noreferrer'>
                        XXIDBR9
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Footer;
