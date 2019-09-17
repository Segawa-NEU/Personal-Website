import { Container } from 'inversify';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import IPersonalProjectRepository from '../domain/personal_project_aggregate/IPersonalProjectRepository';
import PersonalProject from '../domain/personal_project_aggregate/PersonalProject';
import PersonalProjectCard from './PersonalProjectCard.vue';

@Component({
    components: { PersonalProjectCard },
})
export default class PersonalProjectPane extends Vue {
    private container: Container = container;
    public get personalProjects(): PersonalProject[] {
        return this.container.get<IPersonalProjectRepository>(TYPES.IPersonalProjectRepository).all();
    } 
}
