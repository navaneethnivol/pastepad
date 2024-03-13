import { useState } from "react";

import MyButton from "@/components/button/button";

interface CustomSettingsProps {
    name: string
    title: string
    message: string
    updateValue: any
    count: number
}

export default function CustomSettingsPopup({ name, title, message, updateValue, count }: CustomSettingsProps) {

    const [value, setValue] = useState(0);
    const [error, setError] = useState(false);

    return (
        <div className="flex max-w-sm rounded-[10px] overflow-hidden bg-[var(--bg-color)] justify-center">
            <div className="w-5/6">
                <div className="text-2xl text-[var(--sub-color)] mt-4">
                    {name}
                </div>
                {title && <div className="text-color mt-2">{title}</div>}
                <input type="text" id="input" placeholder="15" className="rounded-[10px] w-full p-4 my-4 bg-[var(--sub-alt-color)]" value={count} onChange={(e) => {
                    if (e.target.value == "" || parseInt(e.target.value) <= 0) {
                        setError(true);
                    }
                    else {
                        setValue(parseInt(e.target.value))
                        setError(false);
                    }
                }} />
                {message && <div className="text-color text-md">{message} </div>}
                {error && <div className=" my-2 text-[#FF0000] text-md">Value should be more than 0.</div>}
                <button className="w-full" disabled={error} onClick={() => {
                    if (value > 0) {
                        updateValue('custom', value);
                    }
                }}>
                    <MyButton name="ok" href="" target="" className="my-4 p-2"></MyButton>
                </button>
            </div>
        </div >
    );
}