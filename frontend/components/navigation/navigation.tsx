"use client"

import { useState, useCallback, useEffect } from 'react';
import { faInfo, faPaste } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import MyButton from '@/components/button/button';

import "./navigation.css";

export default function Header() {

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

                    <MyButton name='+ new' href='/' target='' className='p-2 text-md'></MyButton>
                </nav>
            </div>
        </header >
    );
}