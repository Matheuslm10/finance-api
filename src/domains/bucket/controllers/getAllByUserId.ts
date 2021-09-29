import { Request, Response } from "express";
import BucketRepository from "../repositories/bucket";

export default async (req: Request, res: Response): Promise<Response> => {
  const { userid: userId } = req.headers;
  const bucketRepository = new BucketRepository();

  const buckets = bucketRepository.getAllByUserId(userId);
  return res.status(200).send(buckets);
};
