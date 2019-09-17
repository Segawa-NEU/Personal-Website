import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import Education from '../domain/education_aggregate/Education';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
import ILinkRepository from '../domain/link_aggregate/ILinkRepository';
import Link from '../domain/link_aggregate/Link';
import ContentCard from './ContentCard.vue';

@Component({
    components: { ContentCard },
})
export default class EducationCard extends Vue {
    @Prop({ required: true }) public readonly education!: Education;
    private readonly imageRepository: IImageRepository = container.get<IImageRepository>(TYPES.IImageRepository);
    private readonly linkRepository: ILinkRepository = container.get<ILinkRepository>(TYPES.ILinkRepository);
    get image(): Image {
        return this.imageRepository.first((image) => image.id === this.education.institution.thumbImageId);
    }
    get title(): string {
        return this.education.institution.name;
    }
    get body(): string {
        return this.education.institution.description;
    }
    get link(): Link {
        return this.linkRepository.first((link) => link.id === this.education.institution.linkId);
    }
    get route(): string {
        return "/education/" + this.education.id;
    }
    get routeTitle(): string {
        return "education page";
    }
}
