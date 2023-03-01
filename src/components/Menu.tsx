import { gloock, playfairDisplay } from "~/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "~/components/Link";

interface SideMenuProps {
  onClose: () => void;
}

export const SideMenu = ({ onClose }: SideMenuProps) => {
  return (
    <div
      className={
        "fixed z-[999] flex min-h-screen w-full flex-col justify-between bg-primary-900 px-8 py-5"
      }
    >
      <div>
        <div className={"flex items-center justify-between"}>
          <h1
            className={"text-xl font-semibold text-white " + gloock.className}
          >
            online
            <span className={"font-light " + playfairDisplay.className}>
              launch
            </span>
          </h1>
          <button
            type="button"
            className={"text-xl text-white"}
            onClick={() => {
              onClose();
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <div
          className={"mt-10 flex flex-col gap-3 text-lg font-thin text-white"}
        >
          <a>ONLINE MARKETING</a>
          <div className={"border-delimiter"} />
          <a>O NÁS</a>
          <div className={"border-delimiter"} />
          <a>BEZPLATNÉ KONZULTÁCIE</a>
        </div>
      </div>
      <div>
        <div className={"delimiter"}>
          <FontAwesomeIcon icon={faAward} />
        </div>
        <Link>Získať online stratégiu</Link>
      </div>
    </div>
  );
};
