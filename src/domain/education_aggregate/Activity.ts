export default class Activity {
    public readonly name: string;
    public readonly description: string;
    public readonly position?: string;
    constructor(
        name: string,
        description: string,
        position?: string,
    ) {
        this.name = name;
        this.description = description;
        this.position = position;
    } 
}
