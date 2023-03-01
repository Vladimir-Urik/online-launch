import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal";

interface ForWhoProps {
    position: '1' | '2' | '3' | '4';
    circle?: '' | 'tr' | 'bl' | 'br';
    note: string;
}

export const ForWho = ({ position, note, circle = '' }: ForWhoProps) => {
    const right = position === '1' || position === '3';
    const left = position === '2' || position === '4';

    return (
        <Fade right={right} left={left}>
            <div className={"for-who"}>
                <div className={"circles reversed-small "+ circle}>
                    <div className={"small"} />
                    <div className={"big"} />
                </div>

                <p>{note}</p>
            </div>
        </Fade>
    )
}