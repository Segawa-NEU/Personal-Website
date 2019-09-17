import Duration from './Duration';
import Task from './Task';
export default class Company {
    public readonly name: string;
    public readonly description: string;
    public readonly tasks: Task[];
    public readonly linkId: number;
    public readonly thumbImageId: number;
    public readonly topImageId: number;
    constructor(
        name: string,
        description: string,
        tasks: Task[],
        linkId: number,
        thumbImageId: number,
        topImageId: number,
    ) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.linkId = linkId;
        this.thumbImageId = thumbImageId;
        this.topImageId = topImageId;
    }
}
