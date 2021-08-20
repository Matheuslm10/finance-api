import db from "../../../commons/db"
// import '../../../types';
// Não conseguimos importar diretamente, 
// deixamos aqui para poder seguir. 
// mas depois precisamos de ajuda XD
type Bucket = {
  id: string,
  userId: string,
  balance: number,
  name: string,
  targetBalance?: number,
  dueDate?: Date,
}
// will it create a bucket without a userId? 
export const createBucket = (bucket: Bucket): Bucket => {
  const currentBuckets = db.getBuckets()

  currentBuckets.push(bucket)

  db.updateBuckets(currentBuckets)
  return bucket
}

export const updateBucket = ({
  id,
  bucket: updatedBucket,
}: {
  id: string
  bucket: Bucket
}): Bucket | null => {
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

export const getAllByUserId = (userId: string) => {
  const currentBuckets = db.getBuckets()

  return currentBuckets.filter((bucket) => bucket.userId === userId)
}

export const deleteById = (bucketId: string): boolean => {
  const newBucketList = db
    .getBuckets()
    .filter((bucket) => bucket.id !== bucketId)

  db.updateBuckets(newBucketList)
  return true
}

export const getById = ({
  id,
  buckets,
}: {
  id: string
  buckets: Array<Bucket>
}) => {
  return buckets.find((bucket) => id === bucket.id)
}
