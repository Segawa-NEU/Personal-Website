import Vue from 'vue';
import Parallax from 'vue-parallaxy';
import { Component, Prop } from 'vue-property-decorator';
import Image from '../domain/image_aggregate/Image';
import PersonalProject from '../domain/personal_project_aggregate/PersonalProject';

@Component({
    components: { Parallax },
})
export default class DetailPaneTopImage extends Vue {
    @Prop({ required: true }) public readonly image!: Image;
    get asset(): string {
        return require('../assets/' + this.image.assetName);
    }  
}
