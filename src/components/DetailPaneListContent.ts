import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DetailPaneListContent extends Vue {
    @Prop({ required: true }) public readonly title!: string;
    @Prop({ required: true }) public readonly listItems!: any[];
    @Prop({ required: true }) public readonly listItemIdCallback!: ((item: any) => number);
    @Prop({ required: true }) public readonly listItemContentCallback!: (item: any) => string;
}
