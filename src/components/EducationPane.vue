<template>
	<b-container fluid>
		<EducationCard
			v-for="education in educations"
			v-bind:key="education.id"
            v-bind:education="education"
			>
		</EducationCard>	
	</b-container>
</template>

<script lang='ts'>
import EducationPane from "./EducationPane";
export default EducationPane;
</script>
