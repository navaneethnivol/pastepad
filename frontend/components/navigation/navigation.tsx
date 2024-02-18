import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import "./navigation.css";

export default function Header() {

    return (
        <header className="flex flex-row justify-between">

            <div>

                <Link id="logo" href="/" className="flex flex-row content-center">
                    <h1 className="text">
                        <div className="top">cmd-c + cmd-v</div>
                        pastepad
                    </h1>
                </Link>
            </div>

            <nav className="flex flex-row">
                <div className="">
                    <Link href="/info">
                        <FontAwesomeIcon icon={faInfo} className='button'></FontAwesomeIcon>
                    </Link>

                </div>
            </nav>

        </header>
    );
}