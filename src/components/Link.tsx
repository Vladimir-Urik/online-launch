import React from "react";
import { buttonClasses } from "~/components/Button";

type LinkProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"a">;

export const Link = ({ children, ...props }: LinkProps) => {
  const mergedProps = {
    ...props,
    className: `w-[100%] block ${buttonClasses} ${props.className || ""}`,
  };

  return <a {...mergedProps}>{children}</a>;
};
