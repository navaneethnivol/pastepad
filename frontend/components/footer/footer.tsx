import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDonate, faCode, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();


export default function Footer() {

    return (
        <footer className='my-8 text-[var(--sub-color)]'>
            <div className="flex flex-row justify-between text-sm">
                <div className="grid grid-col-3 grid-flow-row sm:grid sm:grid-flow-col gap-3">
                    <a href="mailto:navaneethsainidadavolu@gmail.com" className="flex flex-row items-center hover:text-[var(--main-color)]">
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope}></FontAwesomeIcon>
                        Contact
                    </a>
                    <a href="https://www.buymeacoffee.com/navaneethsr" target="_blank" className="flex flex-row items-center hover:text-[var(--main-color)]">
                        <FontAwesomeIcon className="mr-2" icon={faDonate}></FontAwesomeIcon>
                        Donate
                    </a>
                    <a href="https://github.com/navaneethnivol/pastepad" className="flex flex-row items-center hover:text-[var(--main-color)]">
                        <FontAwesomeIcon className="mr-2" icon={faCode}></FontAwesomeIcon>
                        Github
                    </a>
                </div>

                <div className="flex flex-col items-start sm:flex-row">
                    <a href="" className="flex flex-row items-center mb-3 sm:mr-3 hover:text-[var(--main-color)]">
                        <FontAwesomeIcon className="mr-2" icon={faPalette}></FontAwesomeIcon>
                        Dark
                    </a>
                    <a href="" className="flex flex-row items-center hover:text-[var(--main-color)]">
                        <FontAwesomeIcon className="mr-2" icon={faCodeBranch}></FontAwesomeIcon>
                        v{publicRuntimeConfig?.version}
                    </a>
                </div>
            </div>
        </footer>
    );
}