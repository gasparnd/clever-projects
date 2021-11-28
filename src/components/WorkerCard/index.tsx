import { Avatar } from "@nextui-org/react";
import React from "react";
import { IWorker } from "../../constants/types";

interface IProps {
  data: IWorker;
  onClick?: () => void;
}

export const WorkerCard = (props: IProps) => {
  const { onClick } = props;
  const { name, lastName } = props.data;
  return (
    <article
      onClick={() => onClick()}
      className="cursor-pointer mr-4 my-3 flex flex-col items-center"
    >
      <Avatar
        pointer
        src="https://nextui.org/avatars/avatar-1.png"
        size="xlarge"
      />
      <h3 className="text-1xl text-black">{`${name} ${lastName}`}</h3>
    </article>
  );
};
