import { injectable } from 'inversify';
import Data from '../assets/data/Educations.json';
import Education from '../domain/education_aggregate/Education';
import IEducationRepository from '../domain/education_aggregate/IEducationRepository';
import AJsonDataRepository from './AJsonDataRepository';

@injectable()
export default class EducationRepository extends AJsonDataRepository<Education> implements IEducationRepository {
    protected readonly json: any = Data;
}
