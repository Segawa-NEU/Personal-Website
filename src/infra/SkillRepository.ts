import { injectable } from 'inversify';
import Data from '../assets/data/Skills.json';
import ISkillRepository from '../domain/skill_aggregate/ISkillRepository';
import Skill from '../domain/skill_aggregate/Skill';
import AJsonDataRepository from './AJsonDataRepository';

@injectable()
export default class SkillRepository extends AJsonDataRepository<Skill> implements ISkillRepository {
    protected readonly json: any = Data;
}
