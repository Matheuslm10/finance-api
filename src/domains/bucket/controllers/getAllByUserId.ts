import { Request, Response } from "express"
import { getAllByUserId } from "../repositories/bucket"

export default async (req: Request, res: Response): Promise<Response> => {
  const { 'userid': userId } = req.headers;

  const buckets = getAllByUserId(userId)
  return res.status(200).send(buckets)
}
