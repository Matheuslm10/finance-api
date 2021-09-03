import { Request, Response } from "express"
// We might use the model.
import { createBucket } from "../repositories/bucket"

// again: we don't know how to import
type Bucket = {
  id: string
  userId: string
  balance: number
  name: string
  targetBalance?: number
  dueDate?: Date
}

export default async (req: Request, res: Response): Promise<Response> => {
  const newBucket = req?.body

  createBucket(newBucket)
  
  return res.status(201).send(newBucket)
}
