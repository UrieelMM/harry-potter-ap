import React from "react";
import Header from "../Header";
import Filters from "../Filters";
import Menu from "../Menu";
import bg from "../../assets/background.png";

const Layout = ({ children }) => {
  return (
    <div
      className="layout-bg
  "
    >
      <Header />
      <Filters />
      {children}
      <Menu />
    </div>
  );
};

export default Layout;
