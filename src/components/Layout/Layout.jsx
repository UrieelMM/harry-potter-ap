import React from "react";
import Header from "../Header";
import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <div
      className="layout-bg
  "
    >
      <Header />
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
