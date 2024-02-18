import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import "./config-bar.css";

export default function ConfigBar() {
    return (
        <div className="flex flex-row items-center justify-center text-sm m-8">
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
        </div>
    );
}