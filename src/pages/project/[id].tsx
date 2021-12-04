import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { getProject } from "../../api";
import { Header } from "../../components/Header";
import { LoaderComponent } from "../../components/LoaderComponent";
import { ProjectsDetailsPage } from "../../components/_Pages/ProjectsDetailsPage";
import { IProject } from "../../constants/types";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<IProject>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setLoading(true);
      const res = await getProject(Number(id));
      if (res) {
        const { data } = res;
        setProject(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Header title={project.name} content={project.description.description}>
          <ProjectsDetailsPage {...project} />
        </Header>
      )}
    </>
  );
};

export default ProjectDetails;
