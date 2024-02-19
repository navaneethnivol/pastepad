import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDonate, faCode, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

import "./footer.css";

export default function Footer() {

    return (
        <footer className='mt-8'>
            <div className="flex flex-row justify-between text-sm">
                <div className="grid grid-col-3 grid-flow-row sm:grid sm:grid-flow-col gap-3">
                    <a href="mailto:navaneethsainidadavolu@gmail.com" className="flex flex-row items-center">
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope}></FontAwesomeIcon>
                        Contact
                    </a>
                    <a href="https://www.buymeacoffee.com/navaneethsr" target="_blank" className="flex flex-row items-center">
                        <FontAwesomeIcon className="mr-2" icon={faDonate}></FontAwesomeIcon>
                        Donate
                    </a>
                    <a href="https://github.com/navaneethnivol/pastepad" className="flex flex-row items-center">
                        <FontAwesomeIcon className="mr-2" icon={faCode}></FontAwesomeIcon>
                        Github
                    </a>
                </div>

                <div className="grid grid-row-2 grid-flow-row sm:grid-col-2 sm:grid-flow-col gap-3">
                    <a href="" className="flex flex-row items-center">
                        <FontAwesomeIcon className="mr-2" icon={faPalette}></FontAwesomeIcon>
                        Dark
                    </a>
                    <a href="" className="flex flex-row items-center">
                        <FontAwesomeIcon className="mr-2" icon={faCodeBranch}></FontAwesomeIcon>
                        v{publicRuntimeConfig?.version}
                    </a>
                </div>
            </div>
        </footer>
    );
}