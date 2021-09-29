import db from "../../../commons/db";
import IBucketRepository from "./IBucket";
import BucketModel from "../model";

class BucketRepository implements IBucketRepository {
  createBucket(bucket: BucketModel): BucketModel {
    const currentBuckets = db.getBuckets();

    currentBuckets.push(bucket);

    db.updateBuckets(currentBuckets);
    return bucket;
  }

  updateBucket({
    id,
    bucket: updatedBucket,
  }: {
    id: string;
    bucket: BucketModel;
  }): BucketModel | null {
    let hasUpdatedBucket = false;
    const currentBuckets = db.getBuckets();
    const newBucketList = currentBuckets.map((bucket) => {
      if (bucket.id === id) {
        hasUpdatedBucket = true;
        return updatedBucket;
      }

      return bucket;
    }, []);

    db.updateBuckets(newBucketList);

    if (hasUpdatedBucket) {
      return updatedBucket;
    }

    return null; // FIXME
  }

  getAllByUserId(userId: string | string[] | undefined): BucketModel[] {
    const currentBuckets = db.getBuckets();

    return currentBuckets.filter((bucket) => bucket.userId === userId);
  }

  deleteById(bucketId: string): boolean {
    const newBucketList = db
      .getBuckets()
      .filter((bucket) => bucket.id !== bucketId);

    db.updateBuckets(newBucketList);
    return true;
  }

  getById({
    id,
    buckets,
  }: {
    id: string;
    buckets: Array<BucketModel>;
  }): BucketModel | undefined {
    return buckets.find((bucket) => id === bucket.id);
  }
}

export default BucketRepository;
