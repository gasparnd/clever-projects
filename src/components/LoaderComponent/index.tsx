import React, { useContext } from "react";
import { Progress } from "@nextui-org/react";

export const LoaderComponent = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 h-max">
        <Progress indeterminated value={50} color="#6a35ff" status="primary" />
      </div>
    </div>
  );
};
