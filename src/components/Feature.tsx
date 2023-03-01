import React from "react";
import { playfairDisplay } from "~/fonts";

interface FeatureProps {
  circles?: "top-left" | "bottom-left" | "bottom-right";
  title: React.ReactNode;
  description: string;
}

export const Feature = ({
  circles = "top-left",
  title,
  description,
}: FeatureProps) => {
  let circleClass = "";
  switch (circles) {
    case "bottom-left":
      circleClass = "bl";
      break;
    case "bottom-right":
      circleClass = "br";
      break;
  }

  return (
    <div className={"bg-primary-900 px-4 py-14 text-center drop-shadow-2xl"}>
      <div className={"circles " + circleClass}>
        <div className={"small"} />
        <div className={"big"} />
      </div>
      <h3 className={"mt-4 text-2xl text-white " + playfairDisplay.className}>
        {title}
      </h3>
      <p className={"mt-4 text-xl font-thin text-gray-300"}>{description}</p>
    </div>
  );
};
