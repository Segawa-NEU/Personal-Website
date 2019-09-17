import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Link from '../domain/link_aggregate/Link';

@Component({
    name: "ContentCardRouteButton",
})
export default class ContentCardRouteButton extends Vue {
    @Prop({ required: true }) public readonly route!: string;
    @Prop({ required: true }) public readonly title!: string;
    @Prop({ required: false }) public readonly variant?: string;
}
