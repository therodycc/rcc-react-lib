import { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { RccAside } from "./aside";
import { AsideOptionsI } from "./aside.interface";
import Header from "./header";

interface RccLayoutProps {
  asideOptions: AsideOptionsI[];
  rightSection: ReactNode;
  leftSection: ReactNode;
  handleShowAsideBar: MouseEventHandler<HTMLDivElement>;
}

export const RccLayout = ({
  children,
  asideOptions,
  leftSection,
  rightSection,
  handleShowAsideBar,
}: PropsWithChildren<RccLayoutProps>) => {
  return (
    <>
      <div className="g-sidenav-show bg-light">
        <RccAside asideOptions={asideOptions} />
        <main
          className="main-content position-relative  border-radius-lg bg-light d-flex flex-column overflow-scroll"
          style={{ height: "100vh" }}
        >
          <Header
            handleShowAsideBar={handleShowAsideBar}
            leftSection={leftSection}
            rightSection={rightSection}
          />
          <div className="container-fluid py-4" style={{ flex: "1 1 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
