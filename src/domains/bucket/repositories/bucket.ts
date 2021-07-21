import db from '../../../commons/db';

export const createBucket = ({ bucket }) => {
    const currentBuckets = db.getBuckets();

    currentBuckets.push(bucket); 

    db.updateBuckets(currentBuckets);
    return bucket;
};

export const updateBucket = ({ id, bucket: updatedBucket }) => {
  let hasUpdatedBucket = false;
  const currentBuckets = db.getBuckets();
  const newBucketList = currentBuckets.map((bucket) => {
    if (bucket.id === id) {
        hasUpdatedBucket = true;
        return updatedBucket;
    }

    return bucket;
  }, [])

  db.updateBuckets(newBucketList);

  if (hasUpdatedBucket) {
    return updatedBucket;
  }

  return null;
}

export const getAllByUserId = (userId) => {
    const currentBuckets = db.getBuckets();

    return currentBuckets.filter(bucket => bucket.userId === userId);
}

export const deleteById = (bucketId) => {
    const newBucketList = db
        .getBuckets()
        .filter(bucket => bucket.id !== bucketId);

    db.updateBuckets(newBucketList);
    return true;
}

export const getById = ({ id, buckets }) => {
  return buckets.find((bucket) => id === bucket.id)
}