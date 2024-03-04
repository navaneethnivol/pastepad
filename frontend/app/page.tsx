"use client"

import { useState } from 'react';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner'

import ConfigBar from '@/components/config-bar/config-bar';
import MyButton from '@/components/button/button';
import { PadData } from '@/types/configBar';

interface CreateResponse {
  pad_id: string
}

export default function Home() {

  let settings = {
    views: [1, 2, 3, 4],
    time: [15, 30, 60, 120]
  };

  const [padData, setPadData] = useState<PadData>({
    type: 'views',
    count: settings.views[0],
    custom: false,
    input: ""
  });

  function handleConfigBarType(type: 'views' | 'time') {
    if (type == 'views') {
      setPadData({
        ...padData,
        type: 'views',
        count: settings.views[0],
        custom: false
      });
    }
    else {
      setPadData({
        ...padData,
        type: 'time',
        count: settings.time[0],
        custom: false
      });
    }
  }

  function handleConfigBarValue(type: 'pre-defined' | 'custom', value: number) {
    if (type == 'pre-defined') {
      setPadData({
        ...padData,
        count: value,
        custom: false
      });
    }
    else {
      setPadData({
        ...padData,
        count: value,
        custom: true
      });
    }
  }

  async function createPad(data: PadData): Promise<CreateResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result: CreateResponse = await response.json();
    return result;
  }

  function handleSubmit() {
    createPad(padData).then((data: CreateResponse) => {
      setTimeout(async () => {
        await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/pad/` + data.pad_id);
        toast.success('Pastepad link copied to clipboard.')
      }, 0);
    }).catch(err => {
      toast.error(err.message);
    });
  }

  return (
    <main>

      <section className="h-full flex flex-col my-8">

        <ConfigBar onTypeChange={handleConfigBarType} onValueChange={handleConfigBarValue} padData={padData}></ConfigBar>

        <div id="input">
          <textarea className="rounded-[10px] w-full p-4 text-input-box h-3/4" placeholder="insert text here" onChange={(e) => {
            setPadData({
              ...padData,
              input: e.target.value
            })
          }} />
        </div>

        <div className="flex flex-row justify-center m-8">
          <button onClick={handleSubmit}>
            <MyButton icon={faShare} name='share' href='' target='' className='p-2'></MyButton>
          </button>
        </div>

        {/* <CustomSettingsPopup name="Views count" title='' message='Input the total number of times this page can be visited before expiring.'></CustomSettingsPopup> */}

        {/* <CustomSettingsPopup name="Page duration" title='Total time: 1 second' message='Input the total number of time in seconds for this page to stay alive.'></CustomSettingsPopup> */}

      </section>

    </main>
  );
}
