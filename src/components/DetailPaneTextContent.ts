import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IPersonalProjectRepository from '../domain/personal_project_aggregate/IPersonalProjectRepository';
import PersonalProject from '../domain/personal_project_aggregate/PersonalProject';
import DetailPaneTopImage from './DetailPaneTopImage.vue';

@Component
export default class DetailPaneTextContent extends Vue {
    @Prop({ required: true }) public readonly text!: string;
}
