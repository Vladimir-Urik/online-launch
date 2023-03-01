import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignores
import Fade from 'react-reveal';

interface UserProps {
    img: string;
    name: string;
    role: string;
}

export const User = ({ img, name, role }: UserProps) => {
    return (
        <>
            <Fade right>
                <img
                    src={img}
                    className={"h-[450px] w-full object-cover drop-shadow-2xl"}
                    alt={name + " " + role}
                />
            </Fade>
            <p className={"mt-4 text-xl font-thin text-white"}>{name}</p>
            <p className={"font-thin text-gray-300"}>{role}</p>
        </>
    )
}