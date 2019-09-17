import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import container from '../di_container/Container';
import TYPES from '../di_container/Types';
import Image from '../domain/image_aggregate/Image';
import Link from '../domain/link_aggregate/Link';
import ContentCardBody from './ContentCardBody.vue';
import ContentCardImage from './ContentCardImage.vue';
import ContentCardLinkButton from './ContentCardLinkButton.vue';
import ContentCardRouteButton from './ContentCardRouteButton.vue';

@Component({
    components: { ContentCardBody, ContentCardImage, ContentCardLinkButton, ContentCardRouteButton },
    name: "ContentCard",
})
export default class ContentCard extends Vue {
    @Prop({ required: true }) public readonly image!: Image;
    @Prop({ required: true }) public readonly title!: string;
    @Prop({ required: true }) public readonly body!: string;
    @Prop({ required: true }) public readonly link!: Link;
    @Prop({ required: true }) public readonly route!: string;
    @Prop({ required: true }) public readonly routeTitle!: string;
}
