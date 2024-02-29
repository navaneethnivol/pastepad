"use client"

import { useState, useCallback, useEffect } from 'react';
import { faInfo, faPaste } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import MyButton from '@/components/button/button';

import "./navigation.css";

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

export default function Header() {

    const isBreakpoint = useMediaQuery(450);

    return (
        <header>
            <div className='flex flex-row h-auto'>
                <div className='w-min p-2'>
                    <Link id="logo" href="/" className="flex flex-row content-center">
                        <FontAwesomeIcon icon={faPaste} className='icon fa-xl'></FontAwesomeIcon>
                        <h1 className="text">
                            <div className="top">cmd-c + cmd-v</div>
                            pastepad
                        </h1>
                    </Link>
                </div>

                <nav className='flex flex-row justify-between w-full'>

                    <Link href="/info">
                        <div className='mx-2 p-2'>
                            <FontAwesomeIcon icon={faInfo} className='nav-button'></FontAwesomeIcon>
                        </div>
                    </Link>

                    {!isBreakpoint ? <MyButton name='+ new' href='/' target='' className='p-2 text-md'></MyButton> : <MyButton name='+' href='/' target='' className='p-2 text-md'></MyButton>}
                </nav>
            </div>
        </header >
    );
}