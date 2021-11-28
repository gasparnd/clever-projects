import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProject } from "../../api";
import { Header } from "../../components/Header";
import { ProjectsDetailsPage } from "../../components/_Pages/ProjectsDetailsPage";
import { IProject } from "../../constants/types";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<IProject>(null);
  useEffect(() => {
    getProject(Number(id)).then(({ data }) => setProject(data));
  }, []);
  return (
    <>
      {project && (
        <Header title={project.name} content={project.description}>
          <ProjectsDetailsPage {...project} />
        </Header>
      )}
    </>
  );
};

export default ProjectDetails;
