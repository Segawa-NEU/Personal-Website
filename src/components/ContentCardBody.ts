import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import Image from '../domain/image_aggregate/Image';
import IWorkExperienceRepository from '../domain/work_experience_aggregate/IWorkExperienceRepository';
import ContentCardImage from './ContentCardImage.vue';

@Component({
    name: "ContentCardBody",
})
export default class ContentCardBody extends Vue {
    @Prop({ required: true }) public readonly title!: string;
    @Prop({ required: false }) public readonly body?: string;
}
