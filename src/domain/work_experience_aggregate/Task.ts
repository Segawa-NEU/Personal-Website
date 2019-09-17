export default class Task {
    public readonly name: string;
    public readonly description: string;
    public readonly skillIds: number[];
    constructor(
        name: string,
        description: string,
        skillIds: number[],
    ) {
        this.name = name;
        this.description = description;
        this.skillIds = skillIds;
    }
}
