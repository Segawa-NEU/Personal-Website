import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Link from '../domain/link_aggregate/Link';

@Component({
    name: "ContentCardLinkButton",
})
export default class ContentCardLinkButton extends Vue {
    @Prop({ required: true }) public readonly link!: Link;
    @Prop({ required: false }) public readonly variant?: string;
}
