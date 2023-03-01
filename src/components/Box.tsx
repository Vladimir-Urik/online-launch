import React from "react";

interface BoxProps {
    backgroundColor?: 'PRIMARY-800' | 'PRIMARY-900' | 'LIGHT-200';
    shadow?: boolean;
    className?: string;
}

export const Box = ({ backgroundColor = 'PRIMARY-800', shadow = true, children, className = "" }: React.PropsWithChildren<BoxProps>) => {
    const backgroundCss = "bg-" + backgroundColor.toLowerCase();
    const shadowCss = shadow ? "drop-shadow-2xl" : "";

    return (
        <div className={"relative px-6 py-10 "+ backgroundCss +" "+ shadowCss +" "+ className}>
            {children}
        </div>
    )
}