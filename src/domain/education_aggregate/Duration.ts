export default class Duration {
    public readonly startYear: number;
    public readonly startMonth: string;
    public readonly endYear: number;
    public readonly endMonth: string;
    constructor(
        startYear: number,
        startMonth: string,
        endYear: number,
        endMonth: string,
    ) {
        this.startYear = startYear;
        this.startMonth = startMonth;
        this.endYear = endYear;
        this.endMonth = endMonth;
    }
}
