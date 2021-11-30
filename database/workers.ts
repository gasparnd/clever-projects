import { IWorker, IWorkerId } from "../src/api/api.types";

const workers: Record<IWorkerId, IWorker> = {
  1: {
    id: 1,
    name: "Rodrigo",
    lastName: "Rodriguez",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    jobTitle: ".NET Developer",
    projects: [1, 3, 5, 6],
    stack: [".NET", "Java", "GCP"],
    linkedIn: "https://www.linkedin.com",
  },
  2: {
    id: 2,
    name: "Macelo",
    lastName: "Hanks",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    jobTitle: "Full-Stack Developer",
    projects: [1, 2, 3, 4, 6],
    stack: [
      ".NET",
      "Java",
      "GCP",
      "Next.js",
      "React",
      "Nest.js",
      "MongoDB",
      "GraphQL",
      "Node.js",
    ],
    linkedIn: "https://www.linkedin.com",
  },
  3: {
    id: 3,
    name: "Al",
    lastName: "Pachino",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    jobTitle: "FrontEnd Developer",
    projects: [1, 2, 5],
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    jobTitle: "Data Engeniere",
    projects: [1, 2, 3, 4, 5, 6],
    stack: ["Next.js", "React", "Nest.js", "Tailwind", "Express"],
    linkedIn: "https://www.linkedin.com",
  },
  5: {
    id: 5,
    name: "Jhonny",
    lastName: "Dep",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    jobTitle: "Backend Developer",
    projects: [1, 3, 4],
    stack: ["Java", "SQL", "Nest.js", "MongoDB", "Express, GraphQL"],
    linkedIn: "https://www.linkedin.com",
  },
  6: {
    id: 6,
    name: "Cristina",
    lastName: "Agilar",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    jobTitle: "Data Engeniere",
    projects: [1, 3, 4, 2, 6],
    stack: ["Python", "React", "SQL", "PowerBi", "DJango"],
    linkedIn: "https://www.linkedin.com",
  },
};

export default workers;
