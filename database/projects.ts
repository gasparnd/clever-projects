import { IProject, IProjectId } from "../src/api/api.types";

const projects: Record<IProjectId, IProject> = {
  1: {
    name: "Big Retail",
    id: 1,
    sku: "big-retail",
    image:
      "https://uploads-ssl.webflow.com/5ff9f08a3928de42db400872/610848b657b5c3a2d8e99735_NODRIZE-grnde-p-500.png",
    description: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      challenge:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      solution:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },

    status: "SUSPEND",
    url: "",
    companyName: "Falabollo",
    companyUrl: "https://www.google.com/",
    stack: [
      "React",
      "Next.js",
      "React Native",
      "Java",
      "Spring boot",
      "GCP",
      "Nest.js",
    ],
    team: [1, 2, 3, 4, 5, 6],
  },
  2: {
    name: "Nodrize",
    id: 2,
    sku: "nodrize",
    image:
      "https://uploads-ssl.webflow.com/5ff9f08a3928de42db400872/610848b657b5c3a2d8e99735_NODRIZE-grnde-p-500.png",
    description: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      challenge:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      solution:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    status: "PROGRESS",
    url: "https://www.nodrize.io/",
    companyName: "CleverIt Group",
    companyUrl: "https://www.cleveritgroup.com/",
    stack: ["React", "Next.js", "React Native", "GraphQL", "GCP", "Nest.js"],
    team: [2, 3, 6, 4, 6],
  },
  3: {
    name: "Fodture",
    id: 3,
    sku: "fodture",
    image:
      "https://uploads-ssl.webflow.com/5ff9f08a3928de42db400872/61084318850410262ac0517a_FOODTURE.png",
    description: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      challenge:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      solution:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    status: "DONE",
    url: "https://www.fodture.com/",
    companyName: "CleverIt Group",
    companyUrl: "https://www.cleveritgroup.com/",
    stack: ["React", "Next.js", "React Native", "GraphQL", "GCP", "Nest.js"],
    team: [1, 2, 4, 5, 6],
  },
  4: {
    name: "Clever Coins",
    id: 4,
    sku: "clever-coins",
    image:
      "https://uploads-ssl.webflow.com/5ff9f08a3928de42db400872/61082d11c2fa676706b1a8e9_COINS.png",
    description: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      challenge:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      solution:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    status: "DONE",
    url: "https://www.cleveritgroup.com/",
    companyName: "CleverIt Group",
    companyUrl: "https://www.cleveritgroup.com/",
    stack: ["React", "Next.js", "GraphQL", "GCP", "Nest.js"],
    team: [2, 4, 5, 6],
  },
  5: {
    name: "Cleverpoly",
    id: 5,
    sku: "cleverpoly",
    image:
      "https://uploads-ssl.webflow.com/5ff9f08a3928de42db400872/6141f0a2a4d15bce920eb4ff_POLY.png",
    description: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      challenge:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      solution:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    status: "DONE",
    url: "https://www.cleveritgroup.com/",
    companyName: "CleverIt Group",
    companyUrl: "https://www.cleveritgroup.com/",
    stack: ["React", "Next.js", "GraphQL", "GCP", "Nest.js"],
    team: [1, 4, 3],
  },
  6: {
    name: "Sprintmailing",
    id: 6,
    sku: "sprintmailing",
    image:
      "https://uploads-ssl.webflow.com/5ff9f08a3928de42db400872/6108431f5398b1781650eedb_SPRINT.png",
    description: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      objective:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      challenge:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      solution:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    status: "DONE",
    url: "https://www.sprintmailing.com/",
    companyName: "CleverIt Group",
    companyUrl: "https://www.cleveritgroup.com/",
    stack: ["React", "Next.js", "GraphQL", "GCP", "Nest.js"],
    team: [2, 4, 1, 6],
  },
};

export default projects;
