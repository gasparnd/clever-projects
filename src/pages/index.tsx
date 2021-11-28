import { Button, Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getProjects } from "../api";
import { GridComponent } from "../components/Grid";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then(({ data }) => setProjects(data));
  }, []);
  return (
    <Header title="Home" content="The awesome projects of CleverIt Group">
      <h1 className="text-primary">Hello Next.js</h1>
      <Button>Click</Button>
      <div className="mt-8">
        <GridComponent>
          {projects.map((project) => (
            <Grid key={project.id}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </GridComponent>
      </div>
    </Header>
  );
};

export default Home;
