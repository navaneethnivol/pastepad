'use client'

import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner'

import MyButton from '@/components/button/button';
import { PadData } from '@/types/configBar';


export default async function ViewPage(context: any) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/view/${context.params.slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data: PadData = await response.json()

    return (
        <main>
            <section className="h-full flex flex-col my-8">

                <div id="input">
                    <textarea className="rounded-[10px] w-full p-4 text-input-box h-3/4" value={data.input} readOnly />
                </div>

                <div className="flex flex-row justify-center m-8">
                    <button onClick={() => {
                        navigator.clipboard.writeText(data.input);
                        toast.success('Pastepad copied to clipboard.')
                    }}>
                        <MyButton icon={faCopy} name='copy' href='' target='' className='p-2'></MyButton>
                    </button>
                </div>
            </section>
        </main>
    );
}