import { PropsWithChildren } from "react";
import { RccAside } from "./aside";
import { AsideOptionsI } from "./aside.interface";
import Header from "./header";

interface RccLayoutProps {
  asideOptions: AsideOptionsI[];
}

export const RccLayout = ({ children,asideOptions }: PropsWithChildren<RccLayoutProps>) => {
  return (
    <>
      <div className="g-sidenav-show bg-light ">
        <RccAside asideOptions={asideOptions} />
        <main
          className="main-content position-relative  border-radius-lg bg-light d-flex flex-column overflow-scroll"
          style={{ height: "100vh" }}
        >
          <Header />
          <div className="container-fluid py-4" style={{ flex: "1 1 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
