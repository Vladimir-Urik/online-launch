import React from "react";

interface PointProps {
    children: React.ReactNode;
}

export const Point = ({ children }: PointProps) => {
    return (
        <li className={"point flex gap-4 p-4"}>
            <div className={"circles-small"}>
                <div className={"small"} />
                <div className={"big"} />
            </div>
            <p
                className={
                    "text-md note inline-block font-thin text-gray-300"
                }
            >
                {children}
            </p>
        </li>
    )
}