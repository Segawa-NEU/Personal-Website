export default class Address {
    public readonly country: string;
    public readonly state?: string;
    public readonly city?: string;
    public readonly street1?: string;
    public readonly street2?: string;
    constructor(
        country: string,
        state?: string,
        city?: string,
        street1?: string,
        street2?: string,
    ) {
        this.country = country;
        this.state = state;
        this.city = city;
        this.street1 = street1;
        this.street2 = street2;
    }
}
