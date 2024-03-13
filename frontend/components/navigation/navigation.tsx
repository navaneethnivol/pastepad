"use client"

import { useState, useCallback, useEffect, SetStateAction, Dispatch, useContext } from 'react';
import { faInfo, faPaste } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import MyButton from '@/components/button/button';

import "./navigation.css";
import { isNewClickedStore } from '@/app/ContextProvider';



export default function Header() {

    let { setIsNewClicked } = useContext(isNewClickedStore);



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
                    <button onClick={()=>{
                        setIsNewClicked(true)
                    }}>
                        <MyButton name='+ new' href='/' target='' className='p-2 text-md'></MyButton>
                    </button>
                </nav>
            </div>
        </header >
    );
}