<template>
	<b-container fluid>
        <work-experience-card
			v-for="workExperience in workExperiences"
            v-bind:key="workExperience.id"
			v-bind:workExperience="workExperience" >
		</work-experience-card>	
	</b-container>
</template>

<script>
import WorkExperiencePane from "./WorkExperiencePane";
export default WorkExperiencePane
</script>
