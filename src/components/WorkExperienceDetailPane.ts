import { Container } from 'inversify';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
import ISkillRepository from '../domain/skill_aggregate/ISkillRepository';
import Skill from '../domain/skill_aggregate/Skill';
import IWorkExperienceRepository from '../domain/work_experience_aggregate/IWorkExperienceRepository';
import WorkExperience from '../domain/work_experience_aggregate/WorkExperience';
import DetailPaneHeaderContent from './DetailPaneHeaderContent.vue';
import DetailPaneImageContent from './DetailPaneImageContent.vue';
import DetailPaneListContent from './DetailPaneListContent.vue';
import DetailPaneTextContent from './DetailPaneTextContent.vue';
import DetailPaneTopImage from './DetailPaneTopImage.vue';

@Component({
    components: {
        DetailPaneHeaderContent,
        DetailPaneImageContent,
        DetailPaneListContent,
        DetailPaneTextContent,
        DetailPaneTopImage, 
    },
})
export default class WorkExperienceDetailPane extends Vue {
    private container: Container = container;
    private imageRepository: IImageRepository = container.get<IImageRepository>(TYPES.IImageRepository);
    private skillRepository: ISkillRepository = container.get<ISkillRepository>(TYPES.ISkillRepository);
    public get workExperience(): WorkExperience {
        return this.container.get<IWorkExperienceRepository>(TYPES.IWorkExperienceRepository)
            .first((workExperience) => workExperience.id === parseInt(this.$route.params.id, 10));
    } 
    public get topImage(): Image {
        return this.imageRepository.first((image) => image.id === this.workExperience.company.topImageId);
    }
}
