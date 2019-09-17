<template>
    <div v-bind:style='{ height: contentHeight }'>
        <div class='bg-white position-fixed vw-100' v-bind:style="{ 'height': contentHeight, 'top': navBarHeight }">
            <pre v-bind:style="{ 'max-height': contentHeight, 'height': contentHeight }">{{displayText}}</pre>
        </div>
    </div>
</template>
<script lang='ts'>
import HomeTopContent from './HomeTopContent';
export default HomeTopContent;
</script>
<style lang="scss">
@import '../assets/scss/customBootstrap.scss';
pre {
    background-color: $dark;
    color: $light;
    text-align: left;
    overflow-x: auto;
    overflow: scroll;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    -ms-overflow-style: none;
    &::-webkit-scrollbar{
         display:none;
    }
}
</style>
