import { Request, Response } from "express"
// We might use the model.
import bucketRepository from "../repositories/bucket"
import createUseCase from "../use-cases/create"

export default async (req: Request, res: Response): Promise<Response> => {
  const newBucket = req?.body

  createUseCase(newBucket, bucketRepository)
  
  return res.status(201).send(newBucket)
}
