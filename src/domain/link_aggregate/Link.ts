export default class Link {
    public readonly id: number;
    public readonly url: string;
    public readonly title: string;
    constructor(
        id: number,
        url: string,
        title: string,
    ) {
        this.id = id;
        this.url = url;
        this.title = title;
    }
}
