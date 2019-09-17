import { Container  } from "inversify";
import "reflect-metadata";
import IEducationRepository from "../domain/education_aggregate/IEducationRepository";
import IImageRepository from "../domain/image_aggregate/IImageRepository";
import ILinkRepository from "../domain/link_aggregate/ILinkRepository";
import IPersonalProjectRepository from "../domain/personal_project_aggregate/IPersonalProjectRepository";
import ISkillRepository from "../domain/skill_aggregate/ISkillRepository";
import IWorkExperienceRepository from "../domain/work_experience_aggregate/IWorkExperienceRepository";
import EducationRepository from "../infra/EducationRepository";
import ImageRepository from "../infra/ImageRepository";
import LinkRepository from "../infra/LinkRepository";
import PersonalProjectRepository from "../infra/PersonalProjectRepository";
import SkillRepository from "../infra/SkillRepository";
import WorkExperienceRepository from "../infra/WorkExperienceRepository";
import TYPES from "./Types";

const container = new Container();
container.bind<IEducationRepository>(TYPES.IEducationRepository)
    .to(EducationRepository).inSingletonScope();
container.bind<IImageRepository>(TYPES.IImageRepository)
    .to(ImageRepository).inSingletonScope();
container.bind<ILinkRepository>(TYPES.ILinkRepository)
    .to(LinkRepository).inSingletonScope();
container.bind<IPersonalProjectRepository>(TYPES.IPersonalProjectRepository)
    .to(PersonalProjectRepository).inSingletonScope();
container.bind<ISkillRepository>(TYPES.ISkillRepository)
    .to(SkillRepository).inSingletonScope();
container.bind<IWorkExperienceRepository>(TYPES.IWorkExperienceRepository)
    .to(WorkExperienceRepository).inSingletonScope();
export default container;
