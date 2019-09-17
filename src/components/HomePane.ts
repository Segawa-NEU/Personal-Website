import Vue from 'vue';
import Parallax from 'vue-parallaxy';
import { Component } from 'vue-property-decorator';
import HomeTopContent from './HomeTopContent.vue';
@Component({
    components: { HomeTopContent },
})
export default class HomePane extends Vue {
}
