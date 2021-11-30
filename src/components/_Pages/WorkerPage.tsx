import { Avatar } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getWorker, getWorkerList } from "../../api";
import { IProject, IWorker } from "../../constants/types";
import { Header } from "../Header";
import { Tag } from "../Tag";
import { FaLinkedinIn } from "react-icons/fa";

export const WorkerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [worker, setWorker] = useState<IWorker>();
  const [workerPeojects, setWorkerPeojects] = useState<IProject[]>([]);
  useEffect(() => {
    getWorker(Number(id)).then(({ data }) => setWorker(data));
  }, []);

  useEffect(() => {
    if (worker) {
      getWorkerList(worker.projects).then((data) => setWorkerPeojects(data));
    }
  }, [worker]);
  return (
    <>
      {worker && (
        <Header
          title={`${worker.name} ${worker.lastName}`}
          content={`${worker.name} ${worker.lastName}`}
        >
          <section className="py-4 md:mx-16">
            <div className="md:flex md:items-center">
              <Avatar
                size={100}
                src="https://nextui.org/avatars/avatar-1.png"
              />
              <div className="md:ml-4">
                <h1 className="text-2xl md:text-4xl text-black font-bold mb-1">{`${worker.name} ${worker.lastName}`}</h1>
                <h2 className="font-semibold text-gray-600">
                  {worker.jobTitle}
                </h2>
                <div>
                  <a target="_blank" href={worker.linkedIn}>
                    <FaLinkedinIn
                      style={{ fontSize: "1.5rem" }}
                      className="text-primary mt-3"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-80%">
              <p className="font-medium mt-8 text-lg text-gray-800">
                {worker.description}
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-4xl text-black font-bold">Stack:</h3>
            <div className="border-2 border-primary rounded-lg p-4 mt-4 flex flex-wrap">
              {worker.stack.map((el) => (
                <Tag key={el}>{el}</Tag>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-4xl text-black font-bold">Projects:</h3>
            <div className="border-2 border-primary rounded-lg p-4 mt-4 flex flex-wrap">
              {workerPeojects.map((project) => (
                <Link key={project.id} href={`/project/${project.id}`}>
                  <a>
                    <Tag>{project.name}</Tag>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </Header>
      )}
    </>
  );
};
