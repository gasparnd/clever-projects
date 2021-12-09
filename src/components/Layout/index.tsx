import React from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="px-4 2xl:flex 2xl:justify-center">
        <div className="2xl:w-1/2">
          <NavBar />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
