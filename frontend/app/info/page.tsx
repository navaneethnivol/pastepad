import { faDonate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import "./info.css";

import Button from "@/components/button/button";


export default function Info() {
    return (
        <div>

            <div className=" flex flex-col w-full text-lg justify-center created mt-8">
                <div>Created by Navaneeth Nivol.</div>
                <div>Launched on 17th of Feb, 2024.</div>
            </div>

            <div className="my-4">
                <div className="text-2xl heading">
                    about
                </div>
                <div className="my-2">
                    Pastepad is a sleek and minimalist platform designed for effortless text sharing. With Pastepad, users can quickly generate shareable links for their text content, customizing expiry parameters based on their preferences. Whether setting a specific time limit or duration in minutes, Pastepad offers unparalleled flexibility for content creators. Our focus on simplicity ensures an intuitive experience, allowing users to efficiently share and access information without unnecessary clutter.
                </div>
            </div>

            <div className="my-4">
                <div className="text-2xl heading">
                    support
                </div>
                <div className="my-2">
                    Thanks to everyone who has supported this project. It would not be possible without you and your continued support.
                </div>
                <Button name="Support" icon={faDonate} target="_blank" href="https://www.buymeacoffee.com/navaneethsr"></Button>
            </div>

            <div className="my-4">
                <div className="text-2xl heading">
                    contact
                </div>
                <div className="my-2">
                    If you encounter a bug, have a feature request or just want to say hi - here are the different ways you can contact me directly.
                </div>
                <div className="grid sm:grid-col-4 sm:grid-flow-col grid-row-2 grid-flow-rol gap-4">
                    <Button name="Mail" icon={faEnvelope} target="_blank" href="mailto:navaneethsainidadavolu@gmail.com"></Button>
                    <Button name="Twitter" icon={faTwitter} target="_blank" href="https://x.com"></Button>
                    <Button name="Discord" icon={faDiscord} target="_blank" href="https://discord.com"></Button>
                    <Button name="Github" icon={faGithub} target="_blank" href="https://github.com"></Button>
                </div>
            </div>

            <div className="my-4">
                <div className="text-2xl heading">
                    credits
                </div>
                <div className="my-2">
                    <div>
                        <Link href="https://github.com/Miodec" className="credit-name underline">Miodec</Link> for the design inspiration
                    </div>
                    <div>
                        <Link href="https://github.com/navaneethnivol/pastepad/graphs/contributors" className="credit-name underline">Contributors</Link> on GitHub that have helped with implementing various features, adding themes and more
                    </div>
                </div>
            </div>

        </div>
    );
}