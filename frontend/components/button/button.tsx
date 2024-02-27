import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";

import "./button.css";


interface ButtonProps {
    name: string
    href: string;
    target: HTMLAttributeAnchorTarget
    icon?: IconDefinition
    className?: string
}


export default function MyButton({ name, href, icon, target, className }: ButtonProps) {
    return (
        <Link href={href} className={"flex flex-row items-center justify-center button rounded-[10px] hover:invert " + `${className}`} target={target}>
            {icon && <FontAwesomeIcon icon={icon} className='mr-2'></FontAwesomeIcon>}
            {name}
        </Link>
    );
}