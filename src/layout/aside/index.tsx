import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { RccButton } from "../../components/button";
import { AsideOptionsI } from "../aside.interface";

interface AsideProps {
  options: AsideOptionsI[];
  logout: Function;
  handleSelected: Function;
}

export const RccAside = ({ options, logout, handleSelected }: AsideProps) => {
  return (
    <React.Fragment>
      <aside className="sidebar-show sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white">
        <div className="collapse navbar-collapse h-auto">
          <div className="mx-6 mt-3 rounded-lg">
            <img className="img-thumbnail" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="" />
          </div>
          <ul className="navbar-nav row mx-3 mt-5">
            {options.map((item) => (
              <li key={item.link} className="col-12">
                <RccButton
                  fullWidth
                  bgClass={item.active ? "info" : "light"}
                  action={handleSelected}
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
