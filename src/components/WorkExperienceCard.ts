import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
import ILinkRepository from '../domain/link_aggregate/ILinkRepository';
import Link from '../domain/link_aggregate/Link';
import WorkExperience from '../domain/work_experience_aggregate/WorkExperience';
import ContentCard from './ContentCard.vue';

@Component({
    components: { ContentCard },
})
export default class WorkExperienceCard extends Vue {
    @Prop({ required: true }) public readonly workExperience!: WorkExperience;
    private readonly imageRepository: IImageRepository = container.get<IImageRepository>(TYPES.IImageRepository);
    private readonly linkRepository: ILinkRepository = container.get<ILinkRepository>(TYPES.ILinkRepository);
    get image(): Image {
        return this.imageRepository.first((image) => image.id === this.workExperience.company.thumbImageId);
    }
    get title(): string {
        return this.workExperience.company.name;
    }
    get body(): string {
        return this.workExperience.company.description;
    }
    get link(): Link {
        return this.linkRepository.first((link) => link.id === this.workExperience.company.linkId);
    }
    get route(): string {
        return "/work/" + this.workExperience.id;
    }
    get routeTitle(): string {
        return "education page";
    }
}
