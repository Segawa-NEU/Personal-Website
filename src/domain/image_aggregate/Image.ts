export default class Image {
    public readonly id: number;
    public readonly name: string;
    public readonly assetName: string;
    constructor(
        id: number,
        name: string,
        assetName: string,
    ) {
        this.id = id;
        this.name = name;
        this.assetName = assetName;
    }
}
