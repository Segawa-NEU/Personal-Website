<template>
    <b-button v-if="variant !== undefined" class="w-100 my-1" v-bind:href="link.url" v-bind:variant="variant">{{link.title}}</b-button>
    <b-button v-else class="w-100 my-1" v-bind:href="link.url" variant="primary">{{link.title}}</b-button>
</template>
<script lang='ts'>
import ContentCardLinkButton from './ContentCardLinkButton';
export default ContentCardLinkButton;
</script>
