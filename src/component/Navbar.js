import React from "react";
import logo from "../accets/redux.png";

export const Navbar = () => {
  return (
    <nav className="navbar p-3 navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Abbos Akromovich
        </a>
      </div>
    </nav>
  );
};
