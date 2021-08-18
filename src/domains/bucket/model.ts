import '../../types';
export interface IBucket {
    deposit: (value: number) => BucketModel,
    withdrawal: (value: number) => BucketModel,
    getBalance: () => number,

    getName: () => string,
    setName: (name: string) => BucketModel,

    getId: () => string,
    getUserId: () => string,

    setTargetBalance: (targetBalance: number) => BucketModel,
    getTargetBalance: () => number | null,

    setDueDate: (dueDate: Date) => BucketModel,
    getDueDate: () => Date | null,
}

class BucketModel implements IBucket {
    readonly id: string;
    readonly userId: string;
    private balance: number;
    private name: string;
    private targetBalance?: number | null;
    private dueDate?: Date | null;

    constructor(bucket: Bucket) {
        this.id = bucket.id;
        this.userId = bucket.userId;
        this.balance = bucket.balance;
        this.name = bucket.name;
        this.targetBalance = bucket.targetBalance;
        this.dueDate = bucket.dueDate;
    }

    public deposit(value: number): BucketModel {
        this.balance += value;

        return this;
    }

    public withdrawal(value: number): BucketModel {
        this.balance -= value;

        return this;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): BucketModel {
        this.name = newName;

        return this;
    }

    public getId(): string {
        return this.id;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setTargetBalance(newTargetBalance: number | null): BucketModel {
        this.targetBalance = newTargetBalance;

        return this;
    }

    public getTargetBalance(): number | null {
        return this.targetBalance || null;
    }

    public setDueDate(newDueDate: Date | null): BucketModel {
        this.dueDate = newDueDate;

        return this;
    }

    public getDueDate(): Date | null {
        return this.dueDate || null;
    }
};

export default BucketModel;