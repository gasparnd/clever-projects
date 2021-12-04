import React from "react";
import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="h-screen px-4 2xl:flex 2xl:justify-center">
        <div className=" 2xl:w-1/2">
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
