import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AsideOptionsI } from "../aside.interface";
import { usePathname } from "next/navigation";

interface AsideProps {
  asideOptions: AsideOptionsI[];
}

export const RccAside = ({ asideOptions }: AsideProps) => {
  const pathname = usePathname(); // Obtiene la ruta actual
  const [options, setOptions] = useState<AsideOptionsI[]>([]);

  useEffect(() => {
    handleSelected(pathname);
  }, [pathname]);

  const handleSelected = (path: string) => {
    setOptions(
      asideOptions.map((opt) => ({
        ...opt,
        active: path === opt.link,
      }))
    );
  };

  return (
    <React.Fragment>
      <aside
        className={`sidebar-show sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white`}
      >
        <div className="collapse navbar-collapse h-auto">
          <ul className="navbar-nav">
            {options.map((item) => (
              <Link href={item.link} key={item.link}>
                <li className="nav-item">
                  <span
                    className={`transition-sm nav-link text-secondary cursor-pointer ${
                      item.active ? "bg-primary active" : ""
                    }`}
                  >
                    <div className="text-primary icon-rounded bg-white shadow text-center me-2 d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <span className="nav-link-text ms-1">{item.title}</span>
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3"></div>
        </div>
      </aside>
    </React.Fragment>
  );
};
