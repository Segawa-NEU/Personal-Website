import { Container } from 'inversify';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import Education from '../domain/education_aggregate/Education';
import IEducationRepository from '../domain/education_aggregate/IEducationRepository';
import EducationCard from './EducationCard.vue';

@Component({
    components: { EducationCard },
})
export default class EducationPane extends Vue {
    private container: Container = container;
    public get educations(): Education[] {
        return this.container.get<IEducationRepository>(TYPES.IEducationRepository).all();
    } 
}
