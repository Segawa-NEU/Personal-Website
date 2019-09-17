<template>
	<b-container fluid>
        <DetailPaneTopImage
            v-bind:image='topImage'>
        </DetailPaneTopImage>
        <b-row >
            <b-col cols="12">
                <DetailPaneHeaderContent
                    v-bind:text="personalProject.name">
                </DetailPaneHeaderContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneTextContent
                    v-bind:text="personalProject.description">
                </DetailPaneTextContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneListContent
                    title="Related technologies/skills"
                    v-bind:listItems="skills"
                    v-bind:listItemIdCallback="(skill) => skill.id"
                    v-bind:listItemContentCallback="(skill) => skill.name">
                </DetailPaneListContent>
            </b-col>
        </b-row>
	</b-container>
</template>

<script lang='ts'>
import PersonalProjectDetailPane from "./PersonalProjectDetailPane";
export default PersonalProjectDetailPane;
</script>
