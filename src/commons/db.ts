interface IBucketModel {
    id: string,
    userId: string,
    balance: number,
    name: string,
    dueDate?: Date,
}

interface IDB {
    buckets: Array<IBucketModel>
};

class DB {
    private db: IDB;

    constructor () {
        this.db = {
            buckets: []
        }
    }

    public getBuckets ():Array<IBucketModel> {
        return [...this.db.buckets];
    }

    public updateBuckets (newBuckets: Array<IBucketModel>): Array<IBucketModel> {
       this.db.buckets = newBuckets;
       return this.db.buckets;
    }
}

export default new DB();