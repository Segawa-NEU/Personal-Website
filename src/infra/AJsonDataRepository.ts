import { injectable } from 'inversify';
import IRepository from '../domain/IRepository';

@injectable()
export default abstract class AJsonDataRepository<T> implements IRepository<T> {
    protected abstract readonly json: any;
    private data?: T[];
    public all(): T[] {
        return this.getData();
    }
    public filter(condition: (obj: T) => boolean): T[]{
        return this.getData().filter(condition);
    }
    public first(condition: (image: T) => boolean): T {
        return this.getData().filter(condition)[0];
    }
    protected getData(): T[] {
        if (this.data === undefined) {
            return this.init();
        } else {
            return this.data;
        }
    }
    private init(): T[] {
        this.data = this.json as T[];
        return this.data;
    }
}
