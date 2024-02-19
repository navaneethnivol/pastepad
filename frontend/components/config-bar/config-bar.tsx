"use client"

import { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faGear, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import "./config-bar.css";

const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        if (media.addEventListener) {
            media.addEventListener("change", updateTarget);
        } else {
            // compatibility for browser that dont have addEventListener
            media.addListener(updateTarget);
        }
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        if (media.removeEventListener) {
            return () => media.removeEventListener('change', updateTarget);
        } else {
            // compatibility for browser that dont have removeEventListener
            return () => media.removeListener(updateTarget);
        }
    }, []);

    return targetReached;
};

export default function ConfigBar() {

    const isBreakpoint = useMediaQuery(450);

    return (
        <div className="flex flex-row items-center justify-center text-sm m-8">

            {isBreakpoint ? (
                <div id='config-bar' className="flex flex-row justify-around rounded-[10px] p-3">
                    <a href="" className="flex flex-row items-center hover:text-yellow-300">
                        <FontAwesomeIcon icon={faGear} className="pr-1"></FontAwesomeIcon>
                        config
                    </a>
                </div>
            ) : (
                <div id='config-bar' className="flex flex-row justify-around rounded-[10px] p-3">
                    <div className="grid grid-col-2 grid-flow-col gap-4">
                        <a href="" className="flex flex-row items-center hover:text-yellow-300">
                            <FontAwesomeIcon icon={faEye} className="pr-1"></FontAwesomeIcon>
                            views
                        </a>

                        <a href="" className="flex flex-row items-center hover:text-yellow-300">
                            <FontAwesomeIcon icon={faClock} className="pr-1"></FontAwesomeIcon>
                            time
                        </a>
                    </div>

                    <div className="config-divider w-1 mx-4 rounded h-5"></div>

                    <div className="grid grid-cols-5 grid-flow-row justify-items-center gap-4">
                        <a href="" className="hover:text-yellow-300">15</a>
                        <a href="" className="hover:text-yellow-300">30</a>
                        <a href="" className="hover:text-yellow-300">60</a>
                        <a href="" className="hover:text-yellow-300">120</a>

                        <a href="" className="hover:text-yellow-300">
                            <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            )}

        </div>
    );
}