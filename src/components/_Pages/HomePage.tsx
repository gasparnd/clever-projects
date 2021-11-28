import { Button, Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getProjects } from "../../api";
import { IProject } from "../../constants/types";
import { GridComponent } from "../Grid";
import { ProjectCard } from "../ProjectCard";

const HomePage = () => {
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    getProjects().then(({ data }) => setProjects(data));
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-black font-bold text-center mt-8">
        CleverIt Projects <br /> Our amazing products to change the world
      </h1>
      <p className="text-lg sm:text-1xl md:text-1xl xl:text-2xl mt-4 md:mt-8 text-center text-gray-500">
        We invite you to see the work of the Clevers
      </p>
      <div className="mt-16">
        {projects && (
          <GridComponent>
            {projects.map((project) => (
              <Grid key={project.id}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </GridComponent>
        )}
      </div>
    </React.Fragment>
  );
};

export default HomePage;
