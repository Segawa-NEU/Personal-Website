<template>
	<b-container fluid>
        <DetailPaneTopImage
            v-bind:image='topImage'>
        </DetailPaneTopImage>
        <b-row>
            <b-col cols="12">
                <DetailPaneHeaderContent
                    v-bind:text="workExperience.company.name">
                </DetailPaneHeaderContent>
            </b-col>
            <b-col cols="12">
                <DetailPaneTextContent
                    v-bind:text="workExperience.company.description">
                </DetailPaneTextContent>
            </b-col>
            <b-col cols="12">
                <b-row 
                    v-for="task in workExperience.company.tasks"
                    v-bind:key="task.name">
                    <b-col cols="6">
                        <DetailPaneHeaderContent
                            v-bind:text="task.name">
                        </DetailPaneHeaderContent>
                    </b-col>
                    <b-col cols="6">
                        <DetailPaneListContent
                            v-bind:title="'Relted technologies for ' + task.name"
                            v-bind:listItems="skillRepository.filter((skill) => task.skillIds.includes(task.skillIds))"
                            v-bind:listItemIdCallback="(task) => task.name"
                            v-bind:listItemContentCallback="(course) => task.name">
                        </DetailPaneListContent>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
	</b-container>
</template>

<script lang='ts'>
import WorkExperienceDetailPane from "./WorkExperienceDetailPane";
export default WorkExperienceDetailPane;
</script>
