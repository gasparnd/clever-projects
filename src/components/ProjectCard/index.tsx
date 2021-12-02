import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IProject } from "../../constants/types";

export const ProjectCard = (props: IProject) => {
  const { name, image, description, url, id } = props;
  const descriptionText: string =
    description.description.substr(0, 90) + "\u2026";
  return (
    <article className="w-full sm:w-mw transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-105 overflow-hidden">
      <Link href={`project/${id}`}>
        <a>
          <figure className="overflow-hidden bg-primary bg-opacity-25 border border-transparent h-auto rounded-t-lg">
            <Image
              objectFit="cover"
              src={image}
              alt="Picture of the author"
              width={700}
              height={400}
            />
          </figure>
        </a>
      </Link>
      <section className="py-3 px-4 bg-primary bg-opacity-25 border border-transparent h-auto  rounded-b-lg">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800 mr-3">{name}</h2>
          <a className="underline" target="_blank" href={url}>
            See
          </a>
        </div>
        <p className="h-1">{descriptionText}</p>
      </section>
    </article>
  );
};
