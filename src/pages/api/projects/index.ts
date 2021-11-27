import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../../database/db";

const allProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  try {
    const projects = await db.getAllProjects();
    if (projects) {
      res.status(200).json({ data: projects });
    }
  } catch (err) {
    console.log(err);
  }
};

export default allProjects;
