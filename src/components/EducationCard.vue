<template>
    <content-card
        v-bind:image="image"
        v-bind:title="title"
        v-bind:body="body"
        v-bind:link="link"
        v-bind:route="route"
        v-bind:routeTitle="routeTitle"
        >
    </content-card>
</template>

<script lang='ts'>
import EducationCard from './EducationCard';
export default EducationCard
</script>
