"use client"

import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faGear, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { PadData } from '@/types/configBar';

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
        }
        if (media.matches) {
            setTargetReached(true);
        }
        if (media.removeEventListener) {
            return () => media.removeEventListener('change', updateTarget);
        }
    }, []);

    return targetReached;
};

export default function ConfigBar({ onTypeChange, onValueChange, padData }: { onTypeChange: any, onValueChange: any, padData: PadData }) {

    let settings = {
        views: [1, 2, 3, 4],
        time: [15, 30, 60, 120]
    };

    const isBreakpoint = useMediaQuery(450);

    return (
        <div className="flex flex-row items-center justify-center text-sm m-8">

            {isBreakpoint ? (
                <div id='config-bar' className="flex flex-row justify-around rounded-[10px] p-3">
                    <button className="flex flex-row items-center hover:text-[var(--caret-color)]">
                        <FontAwesomeIcon icon={faGear} className="pr-1"></FontAwesomeIcon>
                        config
                    </button>
                </div>
            ) : (
                <div id='config-bar' className="flex flex-row justify-around rounded-[10px] p-3">
                    <div className="grid grid-col-2 grid-flow-col gap-4">
                        <button className={"flex flex-row items-center hover:text-[var(--caret-color)]" + " " + (padData.type == "views" && "text-[var(--caret-color)]")} onClick={() => onTypeChange('views')}>
                            <FontAwesomeIcon icon={faEye} className="pr-1"></FontAwesomeIcon>
                            views
                        </button>

                        <button className={"flex flex-row items-center hover:text-[var(--caret-color)]" + " " + (padData.type == "time" && "text-[var(--caret-color)]")} onClick={() => onTypeChange('time')}>
                            <FontAwesomeIcon icon={faClock} className="pr-1"></FontAwesomeIcon>
                            time
                        </button>
                    </div>

                    <div className="config-divider w-1 mx-4 rounded h-5"></div>

                    <div className="grid grid-cols-5 grid-flow-row justify-items-center gap-4">
                        {padData.type === "views" ? (
                            settings.views.map(item => <button key={item} className={"flex flex-row items-center hover:text-[var(--caret-color)]" + " " + (padData.count == item && "text-[var(--caret-color)]")} onClick={() => onValueChange('pre-defined', item)} >{item}</button>)
                        ) : (
                            settings.time.map(item => <button key={item} className={"flex flex-row items-center hover:text-[var(--caret-color)]" + " " + (padData.count == item && "text-[var(--caret-color)]")} onClick={() => onValueChange('pre-defined', item)} >{item}</button>)
                        )}
                        <button className={"flex flex-row items-center hover:text-[var(--caret-color)]" + " " + (padData.custom && "text-[var(--caret-color)]")} onClick={() => onValueChange('custom', 240)}>
                            <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}