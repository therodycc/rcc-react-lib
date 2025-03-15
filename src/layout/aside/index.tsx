import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
// import { NextRouter, useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { RccButton } from "../../components/button";
import { AsideOptionsI } from "../aside.interface";

interface AsideProps {
  asideOptions: AsideOptionsI[];
}

export const RccAside = ({ asideOptions }: AsideProps) => {
  const pathname = usePathname();
  // const router: NextRouter = useRouter();
  const [options, setOptions] = useState<AsideOptionsI[]>([]);

  useEffect(() => {
    handleSelected(pathname);
  }, [pathname]);

  const handleSelected = useCallback(
    (path: string) => {
      setOptions(
        asideOptions.map((opt) => ({
          ...opt,
          active: path === opt.link,
        }))
      );
      // router.push(path);
    },
    [asideOptions, setOptions]
  );

  const logout = useCallback(() => {
    console.log("logout working");
  }, []);

  return (
    <React.Fragment>
      <aside className="sidebar-show sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white">
        <div className="collapse navbar-collapse h-auto">
          <ul className="navbar-nav row">
            {options.map((item) => (
              <li key={item.link} className="col-12">
                <RccButton
                  fullWidth
                  bgClass={item.active ? "info" : "light"}
                  action={() => handleSelected(item.link)}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <span className="nav-link-text ms-1">{item.title}</span>
                </RccButton>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0">
          <div className="mx-3">
            <RccButton bgClass={"info"} action={logout} fullWidth>
              Logout
            </RccButton>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};
