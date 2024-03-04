import MyButton from "@/components/button/button";

import "./custom-settings.css";
import { useState } from "react";

interface CustomSettingsProps {
    name: string
    title: string
    message: string
    updateValue: any
}

export default function CustomSettingsPopup({ name, title, message, updateValue }: CustomSettingsProps) {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    return (
        <div className="flex max-w-sm rounded-[10px] overflow-hidden popup-box justify-center">
            <div className="w-5/6">
                <div className="text-2xl text-color mt-4">
                    {name}
                </div>
                {title && <div className="text-color mt-2">{title}</div>}
                <input type="text" id="input" placeholder="15" className="rounded-[10px] w-full p-4 my-4" onChange={(e) => {
                    if (e.target.value == "" || parseInt(e.target.value) <= 0) {
                        setError(true);
                    }
                    else {
                        setValue(e.target.value)
                        setError(false);
                    }
                }} />
                {message && <div className="text-color text-md">{message} </div>}
                {error && <div className=" my-2 text-[#FF0000] text-md">Value should be more than 0.</div>}
                <button className="w-full" disabled={error} onClick={() => {
                    updateValue('custom', value);
                }}>
                    <MyButton name="ok" href="" target="" className="my-4 p-2"></MyButton>
                </button>
            </div>
        </div >
    );
}