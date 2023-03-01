import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { gloock, playfairDisplay } from "~/fonts";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className={"relative bg-primary-800 px-6 py-10 drop-shadow-2xl"}>
      <div className={"delimiter"}>
        <FontAwesomeIcon icon={faAward} />
      </div>
      <h1
        className={
          "text-center text-3xl font-semibold text-white " + gloock.className
        }
      >
        online
        <span className={"font-light " + playfairDisplay.className}>
          launch
        </span>
      </h1>
      <ul className={"mt-4 flex justify-center gap-4 font-thin text-white"}>
        <li>
          <a href={"#"}>Kontakt</a>
        </li>
        <li>
          <a href={"#"}>GDPR</a>
        </li>
      </ul>
      <div className={"delimiter"}>
        <FontAwesomeIcon icon={faAward} />
      </div>
      <p className={"text-center font-thin text-white"}>
        &copy;{new Date().getFullYear()} onlinelaunch
      </p>

      <div className={"mt-6 flex justify-center gap-6 text-gray-200"}>
        <FontAwesomeIcon className={"hover:text-blue-500"} icon={faFacebook} />
        <FontAwesomeIcon className={"hover:text-blue-500"} icon={faLinkedin} />
        <FontAwesomeIcon className={"hover:text-blue-400"} icon={faTwitter} />
        <FontAwesomeIcon className={"hover:text-red-500"} icon={faYoutube} />
        <FontAwesomeIcon className={"hover:text-pink-500"} icon={faInstagram} />
      </div>
    </div>
  );
};
