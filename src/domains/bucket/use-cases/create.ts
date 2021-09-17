import BucketModel from "../model";
import IBucketRepository from "../repositories/IBucket"

interface IBucketPayload {
    userId: string,
    balance?: number,
    name: string,
    targetBalance?: number,
    dueDate?: Date,
}

export default function createUseCase (
    bucketPayload : IBucketPayload,
    bucketRepository : IBucketRepository) => {
    try {
        const bucket = new BucketModel(bucketPayload);

        bucketRepository.createBucket(bucket)
    } catch (exception) {

    }
}