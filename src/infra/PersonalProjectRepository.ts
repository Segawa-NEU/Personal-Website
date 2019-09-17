import { injectable } from 'inversify';
import Data from '../assets/data/PersonalProjects.json';
import IPersonalProjectRepository from '../domain/personal_project_aggregate/IPersonalProjectRepository';
import PersonalProject from '../domain/personal_project_aggregate/PersonalProject';
import AJsonDataRepository from './AJsonDataRepository';

@injectable()
export default class PersonalProjectRepository extends AJsonDataRepository<PersonalProject>
    implements IPersonalProjectRepository {
    protected readonly json: any = Data;
}
