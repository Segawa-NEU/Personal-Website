export default interface IRepository<T> {
    all(): T[];
    filter(condition: (image: T) => boolean): T[];
    first(condition: (image: T) => boolean): T;
}
