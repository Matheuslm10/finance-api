import BucketModel from "../model";

export default interface IBucketRepository {
  createBucket: (bucket: BucketModel) => BucketModel;
  updateBucket: (options: {
    id: string;
    bucket: BucketModel;
  }) => BucketModel | null;
  getAllByUserId: (userId: string | string[] | undefined) => BucketModel[];
  deleteById: (bucketId: string) => boolean;
  getById: (options: {
    id: string;
    buckets: Array<BucketModel>;
  }) => BucketModel | undefined;
}
