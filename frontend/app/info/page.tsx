import { faDonate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import Button from "@/components/button/button";
import { Contributor } from "@/types/contributor"
import ContributorCard from "@/components/contributor-card/contributor-card";

async function getContributors() {
    const response = await fetch("https://api.github.com/repos/navaneethnivol/pastepad/contributors", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            revalidate: 60
        }
    });

    return response
}

export default async function Info() {

    let contributions: Contributor[] = await (await getContributors()).json();

    return (
        <div className="h-full">

            <div className=" flex flex-col w-full text-lg justify-center text-center text-[var(--sub-color)] mt-8">
                <div>Created by Navaneeth Nivol.</div>
                <div>Launched on 17th of Feb, 2024.</div>
            </div>

            <div className="my-4">
                <div className="text-2xl text-[var(--sub-color)]">
                    about
                </div>
                <div className="my-2">
                    Pastepad is a sleek and minimalist platform designed for effortless text sharing. With Pastepad, users can quickly generate shareable links for their text content, customizing expiry parameters based on their preferences. Whether setting a specific time limit or duration in minutes, Pastepad offers unparalleled flexibility for content creators. Our focus on simplicity ensures an intuitive experience, allowing users to efficiently share and access information without unnecessary clutter.
                </div>
            </div>

            <div className="my-4">
                <div className="text-2xl text-[var(--sub-color)]">
                    support
                </div>
                <div className="my-2">
                    Thanks to everyone who has supported this project. It would not be possible without you and your continued support.
                </div>
                <Button name="Support" icon={faDonate} target="_blank" href="https://www.buymeacoffee.com/navaneethsr" className="p-6"></Button>
            </div>

            <div className="my-4">
                <div className="text-2xl text-[var(--sub-color)]">
                    contact
                </div>
                <div className="my-2">
                    If you encounter a bug, have a feature request or just want to say hi - here are the different ways you can contact me directly.
                </div>
                <div className="grid sm:grid-col-4 sm:grid-flow-col grid-row-2 grid-flow-rol gap-4">
                    <Button name="Mail" icon={faEnvelope} target="_blank" href="mailto:navaneethsainidadavolu@gmail.com" className="p-6"></Button>
                    <Button name="Twitter" icon={faTwitter} target="_blank" href="https://x.com" className="p-6"></Button>
                    <Button name="Discord" icon={faDiscord} target="_blank" href="https://discord.com" className="p-6"></Button>
                    <Button name="Github" icon={faGithub} target="_blank" href="https://github.com" className="p-6"></Button>
                </div>
            </div>

            <div className="my-4">
                <div className="text-2xl text-[var(--sub-color)]">
                    credits
                </div>
                <div className="my-2">
                    <div>
                        <Link href="https://github.com/Miodec" className="text-[var(--sub-color)] hover:text-[var(--sub-alt-color)] underline">Miodec</Link> for the design inspiration
                    </div>
                    <div>
                        <Link href="https://github.com/navaneethnivol/pastepad/graphs/contributors" className="text-[var(--sub-color)] hover:text-[var(--sub-alt-color)] underline">Contributors</Link> on GitHub that have helped with implementing various features, adding themes and more
                    </div>
                </div>
            </div>

            <div className="my-4">
                <div className="text-2xl text-[var(--sub-color)]">
                    contributors
                </div>
                <div className="grid grid-cols-4 gap-3 my-2">
                    {contributions.filter(contributor => contributor.id != 33155848).map(contributor => <ContributorCard key={contributor.id} contributor={contributor}></ContributorCard>)}
                </div>
            </div>

        </div>
    );
}



// https://api.github.com/repos/navaneethnivol/pastepad/contributors