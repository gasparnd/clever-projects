// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import { IProject, IWorker } from "../src/api/api.types";
import allProjects from "./projects";
import allWorkers from "./workers";

class Database {
  constructor() {}

  async getAllProjects(): Promise<IProject[]> {
    const asArray = Object.values(allProjects);
    await randomDelay();
    return asArray;
  }

  async getProjectById(id: number): Promise<IProject | null> {
    if (!Object.prototype.hasOwnProperty.call(allProjects, id)) {
      return null;
    }

    const entry = allProjects[id];
    await randomDelay();
    return entry;
  }

  async getAllWorker(): Promise<IWorker[]> {
    const asArray = Object.values(allWorkers);
    await randomDelay();
    return asArray;
  }

  async getWorkerById(id: number): Promise<IWorker | null> {
    if (!Object.prototype.hasOwnProperty.call(allWorkers, id)) {
      return null;
    }

    const entry = allWorkers[id];
    randomDelay();
    return entry;
  }
}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });

export default Database;
