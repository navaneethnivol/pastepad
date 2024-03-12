import { PadData } from '@/types/configBar';
import ClipboardButton from '@/components/button/ClipboardButton';

async function getPadData(slug: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/pad/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store'
    });

    return response

}


export default async function ViewPage(context: any) {
    try {

        const data: PadData = await (await getPadData(context.params.slug)).json()

        return (
            <section className="h-full my-8 flex flex-col justify-center">
                <textarea className="rounded-[10px] w-full h-full sm:h-3/4 p-4 text-[var(--sub-color)] bg-[var(--sub-alt-color)]" value={data.input} readOnly />
               <ClipboardButton data={data.input}></ClipboardButton>
            </section>
        );
    } catch (e) {
        return <div className="flex  items-center justify-center text-white">
        <div className="text-center">
          <p className="text-9xl font-bold">404 <span className='font-normal'>| &nbsp; This page could not be found.</span></p>
          
         
        </div>
      </div>;
    }
}