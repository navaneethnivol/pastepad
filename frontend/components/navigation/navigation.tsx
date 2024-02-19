import { faInfo, faPaste } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import "./navigation.css";

export default function Header() {

    return (
        <header>

            <div className='flex flex-row justify-between'>
                <div className='w-min'>
                    <Link id="logo" href="/" className="flex flex-row content-center">
                        <FontAwesomeIcon icon={faPaste} className='icon fa-xl'></FontAwesomeIcon>
                        <h1 className="text">
                            <div className="top">cmd-c + cmd-v</div>
                            pastepad
                        </h1>
                    </Link>
                </div>

                <nav className='flex'>
                    <div className='mx-4'>
                        <Link href="/info">
                            <FontAwesomeIcon icon={faInfo} className='button'></FontAwesomeIcon>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* <div>
                <Link id="logo" href="/" className="flex flex-row content-center">
                    <FontAwesomeIcon icon={faPaste} className='icon fa-xl'></FontAwesomeIcon>
                    <h1 className="text">
                        <div className="top">cmd-c + cmd-v</div>
                        pastepad
                    </h1>
                </Link>
            </div>

            <nav className="flex flex-row justify-between">
                <div className="">
                    <Link href="/info">
                        <FontAwesomeIcon icon={faInfo} className='button'></FontAwesomeIcon>
                    </Link>
                </div>
                <div>
                    <Link href="/info">
                        <FontAwesomeIcon icon={faInfo} className='button'></FontAwesomeIcon>
                    </Link>
                </div>
            </nav> */}

        </header>
    );
}