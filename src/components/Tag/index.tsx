import React, { PropsWithChildren } from "react";

interface IProps {
  color?: string;
  loading?: boolean;
}

export const Tag = (props: PropsWithChildren<IProps>) => {
  const { children, color = "#6a35ff", loading } = props;
  return (
    <React.Fragment>
      {loading ? (
        <span className="py-4 px-8 rounded-full text-sm text-white mr-4 my-3 bg-gray-400" />
      ) : (
        <span
          style={{ backgroundColor: color }}
          className="p-1 px-3 rounded-full text-sm text-white mr-4 my-3"
        >
          {children}
        </span>
      )}
    </React.Fragment>
  );
};
