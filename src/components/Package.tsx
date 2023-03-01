import React from "react";
import { playfairDisplay } from "~/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface PackageProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

export const Package = ({ title, features, icon }: PackageProps) => {
  return (
    <div className={"h-[350px] w-full bg-primary-800 p-2 drop-shadow-2xl"}>
      <div className={"h-full w-full border border-light-200 p-2"}>
        <div className={"border-lines h-full w-full p-2"}>
          <div
            className={
              "border-lines small flex h-full w-full flex-col justify-center p-2"
            }
          >
            <div className={"px-4"}>
              <h4
                className={
                  "text-3xl font-semibold text-white " +
                  playfairDisplay.className
                }
              >
                {title}
              </h4>
              <ul className={"mt-4 flex flex-col gap-2"}>
                {features.map((feature, index) => (
                  <li key={index}>
                    {icon}
                    <span className={"font-thin text-gray-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
