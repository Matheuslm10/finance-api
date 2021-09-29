import { Request, Response } from "express";
// We might use the model.
import BucketRepository from "../repositories/bucket";
import createUseCase from "../use-cases/create";

export default async (req: Request, res: Response): Promise<Response> => {
  const newBucket = req?.body;

  createUseCase(newBucket, new BucketRepository());

  return res.status(201).send(newBucket);
};
