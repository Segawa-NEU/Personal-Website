<template>
	<b-container fluid>
        <DetailPaneTopImage
            v-bind:image='topImage'>
        </DetailPaneTopImage>
        <b-row >
            <b-col cols="12">
                <DetailPaneHeaderContent
                    v-bind:text="education.institution.name">
                </DetailPaneHeaderContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneTextContent
                    v-bind:text="education.institution.description">
                </DetailPaneTextContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneHeaderContent
                    v-bind:text="'GPA: ' + education.gpa">
                </DetailPaneHeaderContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneListContent
                    title="Related Courses"
                    v-bind:listItems="education.relatedCourses"
                    v-bind:listItemIdCallback="(course) => course.name"
                    v-bind:listItemContentCallback="(course) => course.name">
                </DetailPaneListContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneListContent
                    title="Extra Curricular Activities"
                    v-bind:listItems="education.extraCurricularActivities"
                    v-bind:listItemIdCallback="(activity) => activity.name"
                    v-bind:listItemContentCallback="(activity) => activity.name">
                </DetailPaneListContent>
            </b-col>
            <b-col cols="6">
                <DetailPaneListContent
                    title="Honors"
                    v-bind:listItems="education.honors"
                    v-bind:listItemIdCallback="(honor) => honor.name"
                    v-bind:listItemContentCallback="(honor) => honor.name">
                </DetailPaneListContent>
            </b-col>
        </b-row>
	</b-container>
</template>

<script lang='ts'>
import EducationDetailPane from "./EducationDetailPane";
export default EducationDetailPane;
</script>
