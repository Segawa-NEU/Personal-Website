<template>
    <b-card class="my-3 overflow-hidden" no-body>
        <b-row no-gutters>
            <b-col cols="12" md="3">
                <ContentCardImage v-bind:image="image"></ContentCardImage>
            </b-col>
            <b-col cols="12" md="9" class="py-3">
                <ContentCardBody v-bind:title="title" v-bind:body="body">
                </ContentCardBody>
                <b-row class=mx-1>
                    <b-col cols="12" lg="4">
                        <ContentCardLinkButton v-bind:link='link'>test</ContentCardLinkButton>
                    </b-col>
                    <b-col cols="12" lg="8">
                        <ContentCardRouteButton v-bind:route='route' v-bind:title='routeTitle' variant="info"></ContentCardRouteButton>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-card>
</template>
<script lang='ts'>
import ContentCard from './ContentCard';
export default ContentCard;
</script>
