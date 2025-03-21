import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

interface Props {
  handleShowAsideBar: MouseEventHandler<HTMLDivElement>;
}
const NavView = ({ handleShowAsideBar }: Props) => {
  return (
    <>
      <nav>
        <div
          className={`rounded-circle text-white text-center bg-info shadow-lg cursor-pointer me-3`}
          style={{ width: "70px", height: "70px", lineHeight: "70px" }}
          onClick={handleShowAsideBar}
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </nav>
    </>
  );
};

export default NavView;
