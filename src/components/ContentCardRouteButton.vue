<template>
    <b-button v-if="variant !== undefined" class="w-100 my-1" v-bind:to="route" v-bind:variant="variant">{{title}}</b-button>
    <b-button v-else class="w-100 my-1" v-bind:to="route" variant="primary">{{title}}</b-button>
</template>
<script lang='ts'>
import ContentCardRouteButton from './ContentCardRouteButton';
export default ContentCardRouteButton;
</script>
