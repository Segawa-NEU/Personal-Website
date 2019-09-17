export default class PersonalProject {
    public readonly id: number;
    public readonly name: string;
    public readonly description: string;
    public readonly skillIds: number[];
    public readonly linkId: number;
    public readonly thumbImageId: number;
    public readonly topImageId: number;
    constructor(
        id: number,
        name: string,
        description: string,
        skillIds: number[],
        linkId: number,
        thumbImageId: number,
        topImageId: number,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.skillIds = skillIds;
        this.linkId = linkId;
        this.thumbImageId = thumbImageId;
        this.topImageId = topImageId;
    }
}
