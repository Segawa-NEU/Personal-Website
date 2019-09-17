import Activity from './Activity';
import Course from './Course';
import Duration from './Duration';
import Honor from './Honor';
import Institution from './Institution';
export default class Education {
    public readonly id: number;
    public readonly institution: Institution;
    public readonly gpa: number;
    public readonly duration: Duration;
    public readonly relatedCourses?: Course[];
    public readonly extraCurricularActivities?: Activity[];
    public readonly honors?: Honor[];
    constructor(
        id: number,
        institution: Institution, 
        gpa: number,
        duration: Duration,
        relatedCourses?: Course[],
        extraCurricularActivities?: Activity[],
        honors?: Honor[],
    ) {
        this.id = id;
        this.institution = institution;
        this.gpa = gpa;
        this.duration = duration;
        this.relatedCourses = relatedCourses;
        this.extraCurricularActivities = extraCurricularActivities;
        this.honors = honors;
    }
}
