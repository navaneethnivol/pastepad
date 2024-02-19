
import MyButton from "@/components/button/button";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default function ConfigBarPopup() {
    return (
        <div className="max-w-sm rounded overflow-hidden p-2">
            <div className="grid grid-row-2 gap-2">
                <MyButton name="views" href="" target="" className="h-2"></MyButton>
                <MyButton name="time" href="" target="" className="h-2"></MyButton>
            </div>
            <div className="my-8">

            </div>
            <div className="grid grid-row-5 gap-2">
                <MyButton name="15" href="" target="" className="h-2"></MyButton>
                <MyButton name="30" href="" target="" className="h-2"></MyButton>
                <MyButton name="60" href="" target="" className="h-2"></MyButton>
                <MyButton name="120" href="" target="" className="h-2"></MyButton>
                <MyButton name="custom" href="" target="" className="h-2"></MyButton>
            </div>
        </div>
    );
}