import Address from './Address';

export default class Institution {
    public readonly name: string;
    public readonly description: string;
    public readonly address: Address;
    public readonly linkId: number;
    public readonly thumbImageId: number;
    public readonly topImageId: number;
    
    constructor(
        name: string,
        description: string,
        address: Address,
        linkId: number,
        thumbImageId: number,
        topImageId: number,
    ) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.linkId = linkId;
        this.thumbImageId = thumbImageId;
        this.topImageId = topImageId;
    }
}
