import BucketModel from "../model";
import IBucketRepository from "../repositories/IBucket";

interface IBucketPayload {
  userId: string;
  balance?: number;
  name: string;
  targetBalance?: number;
  dueDate?: Date;
}

export function createUseCase2(bucketPayload : IBucketPayload, bucketRepository : IBucketRepository) : Bucket {
  try {
    const bucket = new BucketModel(bucketPayload);

    return bucketRepository.createBucket(bucket);
  } catch (exception) {
    return bucket;
  }
}

export default function createUseCase(
  fn: (
    bucketPayload: IBucketPayload,
    bucketRepository: IBucketRepository
  ) => Bucket
) {
  try {
    const bucket = new BucketModel(bucketPayload);

    bucketRepository.createBucket(bucket);
  } catch (exception) {}
}
