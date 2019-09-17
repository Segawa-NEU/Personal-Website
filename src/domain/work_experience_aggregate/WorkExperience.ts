import Company from './Company';
import Duration from './Duration';
export default class WorkExperience {
    public readonly id: number;
    public readonly company: Company;
    public readonly duration: Duration;
    constructor(
        id: number,
        company: Company,
        duration: Duration,
    ) {
        this.id = id;
        this.company = company;
        this.duration = duration;
    }
}
