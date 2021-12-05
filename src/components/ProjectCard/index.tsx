import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IProject } from "../../constants/types";

interface IProps {
  loading?: boolean;
  project?: IProject;
}

export const ProjectCard = (props: IProps) => {
  const { loading } = props;
  const descriptionText: string =
    props.project?.description.description.substr(0, 90) + "\u2026";
  return (
    <React.Fragment>
      {loading ? (
        <article
          style={{ height: 300 }}
          className="w-full sm:w-mw bg-gray-300 border rounded-lg"
        />
      ) : (
        <article className="w-full sm:w-mw transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-105 overflow-hidden">
          <Link href={`project/${props.project?.id}`}>
            <a>
              <figure className="overflow-hidden bg-primary bg-opacity-25 h-auto rounded-t-lg">
                <Image
                  objectFit="cover"
                  src={props.project?.image}
                  alt="Picture of the author"
                  width={700}
                  height={400}
                />
              </figure>
            </a>
          </Link>
          <section className="py-3 px-4 bg-primary bg-opacity-25 border border-transparent h-auto  rounded-b-lg">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-800 mr-3">
                {props.project?.name}
              </h2>
              <a
                className="underline"
                target="_blank"
                href={props.project?.url}
              >
                See
              </a>
            </div>
            <p className="text-gray-700">{descriptionText}</p>
          </section>
        </article>
      )}
    </React.Fragment>
  );
};
