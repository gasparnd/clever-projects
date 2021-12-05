import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IProject, IWorker } from "../../constants/types";
import { getWorkers } from "../../api";
import { Tag } from "../Tag";
import { WorkerCard } from "../WorkerCard";
import { Modal } from "../Modal";
import { WorkerModal } from "../Modal/WorkerModal";

export const ProjectsDetailsPage = (props: IProject) => {
  const [project, setProject] = useState<IProject>(null);
  const [workers, setWorkers] = useState<IWorker[]>([]);
  const [temporalWorker, setTemporalWorker] = useState<IWorker>();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  useEffect(() => {
    setProject(props);
  }, []);

  useEffect(() => {
    if (project) {
      getWorkers(project.team).then((data) => setWorkers(data));
    }
  }, [project]);

  const showModal = (worker) => {
    setTemporalWorker(worker);
    setVisibleModal(true);
  };

  const statusBgColor: string =
    project?.status === "PROGRESS"
      ? "bg-yellow-400"
      : project?.status === "DONE"
      ? "bg-green-400"
      : project?.status === "SUSPEND"
      ? "bg-red-400"
      : "";

  if (!project) return <p>Loading...</p>;
  return (
    <React.Fragment>
      <section className="flex flex-col items-center">
        <div className="flex justify-center mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-black text-center font-bold mb-1">
              {project?.name}
            </h1>
            <a
              className="underline text-xl text-gray-700"
              target="_blank"
              href={project.url}
            >
              {project.url}
            </a>
          </div>
          <div>
            <span
              className={`${statusBgColor} text-gray-100 p-1 rounded-md text-sm`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-primary rounded-lg py-4 px-1">
          <div className="lg:flex items-center">
            <figure className="w-full lg:w-1/2 mr-3">
              <Image
                className="rounded-lg"
                src={project?.image}
                objectFit="cover"
                alt="Picture of the author"
                width={1500}
                height={900}
              />
            </figure>
            <div className="lg:w-1/2">
              <div>
                <p className="mt-8 text-lg text-gray-100">
                  {project?.description.description}
                </p>
                <h3 className="text-3xl text-gray-100 font-bold mb-1 mt-8">
                  Objetive
                </h3>
                <p className="text-lg text-gray-200">
                  {project?.description.objective}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-gray-100 font-bold mb-1 mt-8">
              The Challenge
            </h3>
            <p className="text-lg text-gray-200">
              {project?.description.challenge}
            </p>
            <h3 className="text-3xl text-gray-100 font-bold mb-1 mt-8">
              Our amazing solution
            </h3>
            <p className="text-lg text-gray-200">
              {project?.description.solution}
            </p>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h3 className="text-4xl text-black font-bold">Stack:</h3>
        <div className="border-2 border-primary rounded-lg p-4 mt-4 flex flex-wrap">
          {project.stack.map((el) => (
            <Tag key={el}>{el}</Tag>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-4xl text-black font-bold">Team:</h3>
        <div className="border-2 border-primary rounded-lg p-4 mt-4 flex flex-wrap">
          {workers.map((worker) => (
            <WorkerCard
              onClick={() => {
                showModal(worker);
              }}
              key={worker.id}
              data={worker}
            />
          ))}
        </div>
      </section>
      <Modal visible={visibleModal} closeHandler={() => setVisibleModal(false)}>
        <WorkerModal {...temporalWorker} />
      </Modal>
    </React.Fragment>
  );
};
