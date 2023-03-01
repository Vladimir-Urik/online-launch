import { gloock, playfairDisplay } from "~/fonts";
import { useState } from "react";
import { SideMenu } from "~/components/Menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isMenuOpen) {
    return (
      <SideMenu
        onClose={() => {
          setIsMenuOpen(false);
        }}
      />
    );
  }

  return (
    <div
      className={"flex items-center justify-between bg-primary-800 px-8 py-5"}
    >
      <h1 className={"text-xl font-semibold text-white " + gloock.className}>
        online
        <span className={"font-light " + playfairDisplay.className}>
          launch
        </span>
      </h1>
      <button
        className="hamburger hamburger--elastic"
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};
