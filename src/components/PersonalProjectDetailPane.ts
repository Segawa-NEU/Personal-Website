import { Container } from 'inversify';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
import IPersonalProjectRepository from '../domain/personal_project_aggregate/IPersonalProjectRepository';
import PersonalProject from '../domain/personal_project_aggregate/PersonalProject';
import ISkillRepository from '../domain/skill_aggregate/ISkillRepository';
import Skill from '../domain/skill_aggregate/Skill';
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
export default class PersonalProjectDetailPane extends Vue {
    private container: Container = container;
    private imageRepository: IImageRepository = container.get<IImageRepository>(TYPES.IImageRepository);
    private skillRepository: ISkillRepository = container.get<ISkillRepository>(TYPES.ISkillRepository);
    public get personalProject(): PersonalProject {
        return this.container.get<IPersonalProjectRepository>(TYPES.IPersonalProjectRepository)
            .first((project) => project.id === parseInt(this.$route.params.id, 10));
    } 
    public get topImage(): Image {
        return this.imageRepository.first((image) => image.id === this.personalProject.topImageId);
    }
    public get skills(): Skill[] {
        return this.skillRepository.filter((image) => this.personalProject.skillIds.includes(image.id));
    }
}
