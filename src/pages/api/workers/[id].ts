import { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../../database/db";

const getWorkerById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const id = req.query.id;
  try {
    const worker = await db.getWorkerById(Number(id));
    if (worker) {
      res.status(200).json({ data: worker });
    }
  } catch (err) {
    console.log(err);
  }
};

export default getWorkerById;
