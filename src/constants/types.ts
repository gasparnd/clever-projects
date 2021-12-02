export interface IProject {
  id: number;
  name: string;
  description: IProjectDescription;
  companyName: string;
  companyUrl: string;
  image: string;
  url: string;
  stack: string[];
  sku: string;
  team: number[];
  status: TStatus;
}

interface IProjectDescription {
  description: string;
  objective: string;
  challenge: string;
  solution: string;
}

export interface IWorker {
  id: number;
  name: string;
  lastName: string;
  description: string;
  jobTitle: string;
  stack: string[];
  projects: number[];
  linkedIn: string;
}

export type TStatus = "DONE" | "PROGRESS" | "SUSPEND";
