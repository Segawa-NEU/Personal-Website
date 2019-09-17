import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Image from '../domain/image_aggregate/Image';

@Component
export default class DetailPaneImageContent extends Vue {
    @Prop({ required: true }) public readonly image!: Image;
    get asset(): string {
        return require('../assets/' + this.image.assetName);
    }  
}
