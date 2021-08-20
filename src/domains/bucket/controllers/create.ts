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

const validateBody = (bucket: Bucket) => bucket

export default async (req: Request, res: Response): Promise<Response> => {
  const newBucket = req?.body

  // where should validation be?
  // to do: validate received body
  if (validateBody(newBucket)) {

    // but wait! Were is the model? 
    // Who's resposible for call the repositories functions? 
    createBucket(newBucket)
    return res.status(201).send(newBucket)
  }

  return res.status(422).send({ message: "Invalid bucket" })
}
