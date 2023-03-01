import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">;

export const buttonClasses =
  "w-[100%] bg-brand-600 text-center uppercase font-semibold py-5 px-8 text-white text-[16px] hover:bg-brand-700 transition-colors duration-100 ease-in-out hover:shadow-lg hover:text-white/80";

export const Button = ({ children, ...props }: ButtonProps) => {
  const mergedProps = {
    ...props,
    className: `${buttonClasses} ${props.className || ""}`,
  };

  return <button {...mergedProps}>{children}</button>;
};
