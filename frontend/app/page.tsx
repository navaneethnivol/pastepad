"use client"

import { useContext, useEffect, useState } from 'react';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner'

import ConfigBar from '@/components/config-bar/config-bar';
import MyButton from '@/components/button/button';
import { PadData } from '@/types/configBar';
import { isNewClickedStore } from './ContextProvider';

interface CreateResponse {
  pad_id: string
}

let settings = {
  views: [1, 2, 3, 4],
  time: [15, 30, 60, 120]
};

const defaultPadSetting:PadData = {
  type: 'views',
  count: settings.views[0],
  custom: false,
  input: ""
}


export default function Home() {

 
  let { isNewClicked,setIsNewClicked } = useContext(isNewClickedStore);

  const [padData, setPadData] = useState<PadData>(defaultPadSetting);

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
      console.log(padData);
    }
    else {
      setPadData({
        ...padData,
        count: value,
        custom: true
      });
      console.log(padData);
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
    if (padData.input.length == 0) {
      toast.warning("Input required.");
      return;
    }
    createPad(padData).then((data: CreateResponse) => {
      setTimeout(async () => {
        await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/pad/` + data.pad_id);
        toast.success('Pastepad link copied to clipboard.')
      }, 0);
    }).catch(err => {
      toast.error(err.message);
    });
  }

  useEffect(() => {
    if(isNewClicked){
      setPadData(defaultPadSetting)
    }
    setIsNewClicked(false)
    
  }, [isNewClicked])

  return (
    <section className="h-full my-8 flex flex-col justify-center">

      <ConfigBar onTypeChange={handleConfigBarType} onValueChange={handleConfigBarValue} padData={padData}></ConfigBar>

      <textarea className="rounded-[10px] w-full h-full sm:h-2/3 p-4 my-4 text-[var(--sub-color)] bg-[var(--sub-alt-color)]" placeholder="insert text here" value={padData.input} onChange={(e) => {
        setPadData({
          ...padData,
          input: e.target.value
        })
      }} />

      <div className="flex flex-row justify-center mt-4">
        <button onClick={handleSubmit}>
          <MyButton icon={faShare} name='share' href='' target='' className='p-2'></MyButton>
        </button>
      </div>

    </section>
  );
}
