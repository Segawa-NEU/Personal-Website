import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import AppNavbar from './components/AppNavbar.vue';
import TYPES from './di_container/Types';

@Component({
    components: { AppNavbar },
    name: 'app',
})
export default class App extends Vue {
}
