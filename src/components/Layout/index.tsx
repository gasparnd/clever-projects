import React, { PropsWithChildren } from "react";
import { LoaderComponent } from "../LoaderComponent";
import { NavBar } from "../NavBar";

interface IProps {
  loading?: boolean;
}

export const Layout = (props: PropsWithChildren<IProps>) => {
  const { children, loading } = props;
  return (
    <React.Fragment>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div className="h-screen px-4 2xl:flex 2xl:justify-center">
          <div className=" 2xl:w-1/2">
            <NavBar />
            <div>{children}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
