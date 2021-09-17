import db from "../../../commons/db"
import IBucketRepository from './IBucket';
import '../../../types';

class BucketRepository implements IBucketRepository {
  createBucket (bucket: Bucket): Bucket {
    const currentBuckets = db.getBuckets()
  
    currentBuckets.push(bucket)
  
    db.updateBuckets(currentBuckets)
    return bucket;
  }
  
  updateBucket ({
    id,
    bucket: updatedBucket,
  }: {
    id: string
    bucket: Bucket
  }): Bucket {
    let hasUpdatedBucket = false
    const currentBuckets = db.getBuckets()
    const newBucketList = currentBuckets.map((bucket) => {
      if (bucket.id === id) {
        hasUpdatedBucket = true
        return updatedBucket
      }
  
      return bucket
    }, [])
  
    db.updateBuckets(newBucketList)
  
    if (hasUpdatedBucket) {
      return updatedBucket
    }
  
    return null
  }
  
  getAllByUserId (userId: string | string [] | undefined): [Bucket] {
    const currentBuckets = db.getBuckets()
  
    return currentBuckets.filter((bucket) => bucket.userId === userId)
  }
  
  deleteById (bucketId: string): boolean {
    const newBucketList = db
      .getBuckets()
      .filter((bucket) => bucket.id !== bucketId)
  
    db.updateBuckets(newBucketList)
    return true
  }
  
  getById ({
    id,
    buckets,
  }: {
    id: string
    buckets: Array<Bucket>
  }) : Bucket {
    return buckets.find((bucket) => id === bucket.id)
  }
}

export default BucketRepository;
