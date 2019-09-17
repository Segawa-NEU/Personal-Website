import { Container } from 'inversify';
import Vue from 'vue';
import {Component, Inject} from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import ILinkRepository from '../domain/link_aggregate/ILinkRepository';
import IWorkExperienceRepository from '../domain/work_experience_aggregate/IWorkExperienceRepository';
import WorkExperience from '../domain/work_experience_aggregate/WorkExperience';
import WorkExperienceCard from './WorkExperienceCard.vue';

@Component({
    components: { WorkExperienceCard },
})
export default class WorkExperiencePane extends Vue {
    private container: Container = container;
    public get workExperiences(): WorkExperience[] {
        return this.container.get<IWorkExperienceRepository>(TYPES.IWorkExperienceRepository).all();
    } 
}
