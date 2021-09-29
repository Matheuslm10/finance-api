import BucketModel from "../domains/bucket/model";

interface IDB {
  buckets: Array<BucketModel>;
}

class DB {
  private db: IDB;

  constructor() {
    this.db = {
      buckets: [],
    };
  }

  public getBuckets(): Array<BucketModel> {
    return [...this.db.buckets];
  }

  public updateBuckets(newBuckets: Array<BucketModel>): Array<BucketModel> {
    this.db.buckets = newBuckets;
    return this.db.buckets;
  }
}

export default new DB();
