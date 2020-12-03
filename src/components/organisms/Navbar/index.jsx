import React, { useEffect, useContext } from "react";
import { TimelineLite } from "gsap";
import { TIME_OUT } from "utils/constants";
import { LoadingContext } from "utils/contexts/Loading";
const Navbar = () => {
    // eslint-disable-next-line
    const { handlerLoad, loadRef, percentage, loading } = useContext(
        LoadingContext
    );

    useEffect(() => {
        const NavTimeline = new TimelineLite();

        if (!loading) {
            setTimeout(() => {
                NavTimeline.to("#navbar", {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 1
                });
            }, TIME_OUT + 1000);
        }
    }, [loading]);

    return (
        <section className='absolute w-full overflow-hidden'>
            <div
                id='navbar'
                className='container max-w-screen-lg mx-auto justify-center opacity-0 transform translate-x-20'>
                <nav className='flex justify-between py-10 align-middle items-center'>
                    <div className='flex-initial text-2xl font-sans tracking-widest font-medium text-mainbrown-500'>
                        FURNITRIX
                    </div>
                    <ul className='flex w-2/5 text-justify justify-around '>
                        <li className='font-normal hover:text-mainbrown-500 duration-200 ease-out cursor-pointer'>
                            Products
                        </li>
                        <li className='font-normal hover:text-mainbrown-500 duration-200 ease-out cursor-pointer'>
                            Rooms
                        </li>
                        <li className='font-normal hover:text-mainbrown-500 duration-200 ease-out cursor-pointer'>
                            Inspiration
                        </li>
                        <li className='font-normal hover:text-mainbrown-500 duration-200 ease-out cursor-pointer'>
                            Support
                        </li>
                    </ul>
                    <div>Sign In</div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
