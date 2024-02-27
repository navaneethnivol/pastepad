import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { headers } from 'next/headers'
import MyButton from '@/components/button/button';
import { PadData } from '@/types/configBar';


async function getData(slug: string) {

    const response = await fetch(`http://152.67.251.107:9000/view/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const result: PadData = await response.json()

    return result;
}

export default async function ViewPage() {

    const headersList = headers()
    console.log(JSON.stringify(headersList))
    const referer = headersList.get('referer')

    console.log(referer)

    const slug = referer?.split("https://pastepad.vercel.app/note/")[1] || ""

    console.log(slug);

    const data: PadData = await getData(slug);

    return (
        <main>
            <section className="h-full flex flex-col my-8">

                <div id="input">
                    <textarea className="rounded-[10px] w-full p-4 text-input-box h-3/4" value={data.input} readOnly />
                </div>

                <div className="flex flex-row justify-center m-8">
                    <button>
                        <MyButton icon={faCopy} name='copy' href='' target='' className='p-2'></MyButton>
                    </button>
                </div>
            </section>
        </main>
    );
}