import { Container } from 'inversify';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import Education from '../domain/education_aggregate/Education';
import IEducationRepository from '../domain/education_aggregate/IEducationRepository';
import IImageRepository from '../domain/image_aggregate/IImageRepository';
import Image from '../domain/image_aggregate/Image';
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
export default class EducationDetailPane extends Vue {
    private container: Container = container;
    private imageRepository: IImageRepository = container.get<IImageRepository>(TYPES.IImageRepository);
    public get education(): Education {
        return this.container.get<IEducationRepository>(TYPES.IEducationRepository)
            .first((education) => education.id === parseInt(this.$route.params.id, 10));
    } 
    public get topImage(): Image {
        return this.imageRepository.first((image) => image.id === this.education.institution.topImageId);
    }
}
