'use client'

import ErrorPage from 'next/error';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner'

import MyButton from '@/components/button/button';
import { PadData } from '@/types/configBar';


export default async function ViewPage(context: any) {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/pad/${context.params.slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        });

        const data: PadData = await response.json()

        return (
            <section className="h-full my-8 flex flex-col justify-center">

                <textarea className="rounded-[10px] w-full h-3/4 p-4 text-[var(--sub-color)] bg-[var(--sub-alt-color)]" value={data.input} readOnly />

                <div className="flex flex-row justify-center m-8">
                    <button onClick={async () => {
                        await navigator.clipboard.writeText(data.input);
                        toast.success('Pastepad copied to clipboard.')
                    }}>
                        <MyButton icon={faCopy} name='copy' href='' target='' className='p-2'></MyButton>
                    </button>
                </div>
            </section>
        );
    } catch (e) {
        return <ErrorPage statusCode={404} />;
    }
}