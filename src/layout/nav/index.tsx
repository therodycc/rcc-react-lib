import React, { ReactNode } from "react";

interface NavProps {
  rightSection: ReactNode;
  leftSection: ReactNode;
}

export const RccNav = ({ rightSection, leftSection }: NavProps) => {
  return (
    <React.Fragment>
      <div
        className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
        style={{ zIndex: 10 }}
      >
        {leftSection}
        <ul className="navbar-nav ms-md-auto">{rightSection}</ul>
      </div>
    </React.Fragment>
  );
};
