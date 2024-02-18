import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import ConfigBar from '@/components/config-bar/config-bar';

export default function Home() {
  return (
    <main>

      <section className="h-full flex flex-col my-8">

        <ConfigBar></ConfigBar>

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

      </section>

    </main>
  );
}
