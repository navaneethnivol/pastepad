'use client'

import { toast } from "sonner";
import MyButton from "./button";
import { faCopy } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
    data: string 
   
}

export default function ClipboardButton({data}:ButtonProps) {
  return (
    <div className="flex flex-row justify-center m-8">
    <button onClick={async () => {
        await navigator.clipboard.writeText(data);
        toast.success('Pastepad copied to clipboard.')
    }}>
        <MyButton icon={faCopy} name='copy' href='' target='' className='p-2'></MyButton>
    </button>
</div>
  )
}
