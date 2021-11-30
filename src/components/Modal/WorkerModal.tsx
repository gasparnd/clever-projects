import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IWorker } from "../../constants/types";

export const WorkerModal = (props: IWorker) => {
  const { name, lastName, jobTitle, id } = props;
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col items-center justify-center">
        <Avatar src="https://nextui.org/avatars/avatar-1.png" size="xlarge" />
        <h3 className="my-4 text-xl font-bold text-black">{`${name} ${lastName}`}</h3>
        <p className="text-gray-600">{jobTitle}</p>
      </div>
      <div className="flex justify-end mt-4">
        <Link href={`/worker/${id}`}>
          <a className="text-white p-1 bg-primary border rounded-lg">
            See full profile
          </a>
        </Link>
      </div>
    </div>
  );
};
