import { MouseEventHandler, ReactNode } from "react";
import { RccNav } from "../nav";
import NavView from "../nav/nav-view";

interface Props {
  rightSection: ReactNode;
  leftSection: ReactNode;
  handleShowAsideBar: MouseEventHandler<HTMLDivElement>;
}

const Header = ({ leftSection, rightSection, handleShowAsideBar }: Props) => {
  return (
    <>
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl">
        <div className="container-fluid py-1 px-3">
          <NavView handleShowAsideBar={handleShowAsideBar} />
          <RccNav leftSection={leftSection} rightSection={rightSection} />
        </div>
      </nav>
    </>
  );
};

export default Header;
