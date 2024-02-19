import MyButton from "@/components/button/button";

import "./custom-settings.css";

interface CustomSettingsProps {
    name: string
    title: string
    message: string
}

export default function CustomSettingsPopup({ name, title, message }: CustomSettingsProps) {
    return (
        <div className="flex max-w-sm rounded-[10px] overflow-hidden popup-box justify-center">
            <div className="w-5/6">
                <div className="text-2xl text-color mt-4">
                    {name}
                </div>
                {title && <div className="text-color mt-2">{title}</div>}
                <input type="text" id="input" placeholder="15" className="rounded-[10px] w-full p-4 my-4" />
                {message && <div className="text-color text-md">{message} </div>}
                <MyButton name="ok" href="" target="" className="h-2 my-4"></MyButton>
            </div>
        </div>
    );
}