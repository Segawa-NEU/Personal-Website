import { injectable } from 'inversify';
import Data from '../assets/data/WorkExperiences.json';
import IWorkExperienceRepository from '../domain/work_experience_aggregate/IWorkExperienceRepository';
import WorkExperience from '../domain/work_experience_aggregate/WorkExperience';
import AJsonDataRepository from './AJsonDataRepository';

@injectable()
export default class WorkExperienceRepository extends AJsonDataRepository<WorkExperience>
    implements IWorkExperienceRepository {
    protected readonly json: any = Data;
}
