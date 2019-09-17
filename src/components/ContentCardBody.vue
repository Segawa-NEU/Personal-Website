<template>
    <b-card-body v-bind:title="title">
        <b-card-text>
            {{body}}
        </b-card-text>
    </b-card-body>
</template>
<script lang='ts'>
import ContentCardBody from './ContentCardBody';
export default ContentCardBody;
</script>
