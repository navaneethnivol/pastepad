import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import ConfigBar from '@/components/config-bar/config-bar';
import MyButton from '@/components/button/button';


export default function Home() {
  return (
    <main>

      <section className="h-full flex flex-col my-8">

        <ConfigBar></ConfigBar>

        <div id="input">
          <textarea className="rounded-[10px] w-full p-4 text-input-box h-3/4" placeholder="insert text here" />
        </div>

        <div className="flex flex-row justify-center m-8">
          <MyButton icon={faShare} name='share' href='' target='' className='p-2'></MyButton>
        </div>

        {/* <CustomSettingsPopup name="Views count" title='' message='Input the total number of times this page can be visited before expiring.'></CustomSettingsPopup> */}

        {/* <CustomSettingsPopup name="Page duration" title='Total time: 1 second' message='Input the total number of time in seconds for this page to stay alive.'></CustomSettingsPopup> */}

      </section>

    </main>
  );
}
