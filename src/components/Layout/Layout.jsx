import React from "react";
import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <div
      className="layout-bg
  "
    >
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
