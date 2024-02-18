import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClock, faEye, faScrewdriverWrench, faShare, faEnvelope, faDonate, faCode, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="sm:container sm:mx-auto pt-8">
      
      <header className="flex flex-row justify-between">

        <div>
          <a id="logo" href="" className="flex flex-row content-center">
            <h1 className="text">
              <div className="top">cmd-c + cmd-v</div>
              pastepad
            </h1>
          </a>
        </div>

        <nav className="flex flex-row">
          <div className="">
            <a href="/info">
              <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
            </a>
          </div>
        </nav>

      </header>

      <section className="h-full flex flex-col my-8">

        <div className="flex flex-row items-center justify-center">
          <div id='config-bar' className="flex flex-row justify-around rounded-[10px] p-2 m-8">

            <div className="grid grid-col-2 grid-flow-col gap-2">
              <a href="" className="flex flex-row items-center hover:text-yellow-300">
                <FontAwesomeIcon icon={faEye} className="pr-1"></FontAwesomeIcon>
                views
              </a>

              <a href="" className="flex flex-row items-center hover:text-yellow-300">
                <FontAwesomeIcon icon={faClock} className="pr-1"></FontAwesomeIcon>
                time
              </a>
            </div>

            <div className="config-divider w-1 mx-2 rounded h-6"></div>

            <div className="grid grid-cols-5 grid-flow-row justify-items-center gap-2">
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

        <div id="input">
          <textarea className="rounded-[10px] w-full p-4 text-input-box h-3/4" placeholder="insert text here" />
        </div>

        <div className="flex flex-row justify-center m-8">
          <div className="share-button rounded-[10px] p-2">
            <button className="flex flex-row items-center">
              <FontAwesomeIcon icon={faShare} className="mr-2"></FontAwesomeIcon>
              share
            </button>
          </div>
        </div>

        <div className="flex-auto">

        </div>

      </section>

      <footer>
        <div className="flex flex-row justify-between">

          <div className="grid grid-col-3 grid-flow-col gap-3">
            <a href="" className="flex flex-row items-center">
              <FontAwesomeIcon className="mr-2" icon={faEnvelope}></FontAwesomeIcon>
              Contact
            </a>
            <a href="" className="flex flex-row items-center">
              <FontAwesomeIcon className="mr-2" icon={faDonate}></FontAwesomeIcon>
              Donate
            </a>
            <a href="" className="flex flex-row items-center">
              <FontAwesomeIcon className="mr-2" icon={faCode}></FontAwesomeIcon>
              Github
            </a>
          </div>

          <div className="grid grid-col-2 grid-flow-col gap-3">
            <a href="" className="flex flex-row items-center">
              <FontAwesomeIcon className="mr-2" icon={faPalette}></FontAwesomeIcon>
              Dark
            </a>
            <a href="" className="flex flex-row items-center">
              <FontAwesomeIcon className="mr-2" icon={faCodeBranch}></FontAwesomeIcon>
              v1.0.0
            </a>
          </div>
        </div>
      </footer>


    </main>
  );
}
