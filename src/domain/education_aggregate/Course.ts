export default class Course {
    public readonly name: string;
    public readonly description: string;
    public readonly grade: string;
    constructor(
        name: string, 
        description: string,
        grade: string,
    ) {
        this.name = name;
        this.description = description;
        this.grade = grade;
    }
}
