import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../../database/db";

const getAllWorkers = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();

  try {
    const workers = await db.getAllWorker();
    if (workers) {
      res.status(200).json({ data: workers });
    }
  } catch (err) {
    console.log(err);
  }
};

export default getAllWorkers;
