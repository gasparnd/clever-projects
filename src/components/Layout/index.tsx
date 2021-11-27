import React from "react";
import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
  return (
    <div className="h-screen px-4 2xl:flex md:justify-center">
      <div className="2xl:w-3/4 ">
        <NavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};
