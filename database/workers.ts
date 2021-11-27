import { IWorker, IWorkerId } from "../src/api/api.types";

const workers: Record<IWorkerId, IWorker> = {
  1: {
    id: 1,
    name: "Rodrigo",
    lastName: "Rodriguez",
    sku: "rodrigo-rodriguez",
    jobTitle: ".NET Developer",
    projects: ["big-retail"],
    stack: [".NET", "Java", "GCP"],
    linkedIn: "https://www.linkedin.com",
  },
  2: {
    id: 2,
    name: "Esteban",
    lastName: "Rodriguez",
    sku: "esteban-rodriguez",
    jobTitle: "Full-Stack Developer",
    projects: ["big-retail", "nodrize"],
    stack: [
      ".NET",
      "Java",
      "GCP",
      "Next.js",
      "React",
      "Nest.js",
      "GraphQL",
      "Node.js",
    ],
    linkedIn: "https://www.linkedin.com",
  },
  3: {
    id: 3,
    name: "Gaspar",
    lastName: "Dolcemascolo",
    sku: "g-dolcemascolo",
    jobTitle: "FrontEnd Developer",
    projects: ["big-retail", "nodrize"],
    stack: [
      "Next.js",
      "React",
      "Nest.js",
      "Tailwind",
      "Express",
      "GraphQL",
      "Node.js",
    ],
    linkedIn: "https://www.linkedin.com",
  },
  4: {
    id: 4,
    name: "Martin",
    lastName: "Grande",
    sku: "m-grande",
    jobTitle: "Data Engeniere",
    projects: ["big-retail", "nodrize"],
    stack: ["Next.js", "React", "Nest.js", "Tailwind", "Express"],
    linkedIn: "https://www.linkedin.com",
  },
};

export default workers;
