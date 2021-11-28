import React, { PropsWithChildren } from "react";

interface IProps {
  color?: string;
}

export const Tag = (props: PropsWithChildren<IProps>) => {
  const { children, color = "#6a35ff" } = props;
  return (
    <span
      style={{ backgroundColor: color }}
      className="p-1 px-3 rounded-full text-sm text-white mr-4 my-3"
    >
      {children}
    </span>
  );
};
