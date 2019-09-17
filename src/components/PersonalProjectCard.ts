import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
import ILinkRepository from '../domain/link_aggregate/ILinkRepository';
import Link from '../domain/link_aggregate/Link';
import PersonalProject from '../domain/personal_project_aggregate/PersonalProject';
import ContentCard from './ContentCard.vue';

@Component({
    components: { ContentCard },
})
export default class PersonalProjectCard extends Vue {
    @Prop({ required: true }) public readonly personalProject!: PersonalProject;
    private readonly imageRepository: IImageRepository = container.get<IImageRepository>(TYPES.IImageRepository);
    private readonly linkRepository: ILinkRepository = container.get<ILinkRepository>(TYPES.ILinkRepository);
    get image(): Image {
        return this.imageRepository.first((image) => image.id === this.personalProject.thumbImageId);
    }
    get title(): string {
        return this.personalProject.name;
    }
    get body(): string {
        return this.personalProject.description;
    }
    get link(): Link {
        return this.linkRepository.first((link) => link.id === this.personalProject.linkId);
    }
    get route(): string {
        return "project/" + this.personalProject.id;
    }
    get routeTitle(): string {
        return "personalProject page";
    }
}
