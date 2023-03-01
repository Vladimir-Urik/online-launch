import React from "react";

interface NoteProps {
    children: React.ReactNode;
    center?: boolean;
    size?: 'sm' | 'md' | 'xl';
    className?: string;
}

export const Note = ({ children, center = true, size = 'xl', className = "" }: React.PropsWithChildren<NoteProps>) => {
    let finalClassName = center ? "text-center" : "";
    finalClassName += " text-" + size + " font-thin text-gray-300";
    finalClassName += " " + className;

    return (
        <p className={finalClassName}>
            {children}
        </p>
    )
}