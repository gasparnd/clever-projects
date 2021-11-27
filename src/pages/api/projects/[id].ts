import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../../database/db";

const getProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const id = req.query.id;

  try {
    const project = await db.getProjectById(Number(id));
    if (project) {
      res.status(200).json({ data: project });
    }
  } catch (err) {
    console.log(err);
  }
};

export default getProject;
