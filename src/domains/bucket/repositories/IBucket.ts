export default interface IBucketRepository {
    createBucket: (bucket: Bucket) => Bucket    
    updateBucket: (options: {id: string, bucket: Bucket}) => Bucket
    getAllByUserId: (userId: string | string [] | undefined) => [Bucket]
    deleteById: (bucketId: string) => boolean
    getById: (options: {id: string, buckets: Array<Bucket>}) => Bucket 
}