import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";

import "./button.css";


interface ButtonProps {
    name: string;
    href: string;
    icon: IconDefinition
    target: HTMLAttributeAnchorTarget
}


export default function Button({ name, href, icon, target }: ButtonProps) {
    return (
        <Link href={href} className="flex flex-row items-center justify-center button p-6 rounded-[10px] hover:invert" target={target}>
            <FontAwesomeIcon icon={icon} className="mr-2"></FontAwesomeIcon>
            {name}
        </Link>
    );
}