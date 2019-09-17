import EducationDetailPane from './components/EducationDetailPane.vue';
import EducationPane from './components/EducationPane.vue';
import HomePane from './components/HomePane.vue';
import PersonalProjectDetailPane from './components/PersonalProjectDetailPane.vue';
import PersonalProjectPane from './components/PersonalProjectPane.vue';
import WorkExperienceDetailPane from './components/WorkExperienceDetailPane.vue';
import WorkExperiencePane from './components/WorkExperiencePane.vue';

export const routes = [
    {
        component: HomePane,
        path: '/',
    },
    {
        component: WorkExperiencePane,
        path: '/work',
    },
    {
        component: WorkExperienceDetailPane,
        path: '/work/:id',
    },
    {
        component: EducationPane,
        path: '/education',
    },
    {
        component: EducationDetailPane,
        path: '/education/:id',
    },
    {
        component: PersonalProjectPane,
        path: '/project',
    },
    {
        component: PersonalProjectDetailPane,
        path: '/project/:id',
    },
];
