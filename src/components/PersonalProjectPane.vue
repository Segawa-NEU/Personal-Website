<template>
	<b-container fluid>
		<PersonalProjectCard
			v-for="personalProject in personalProjects"
			v-bind:key="personalProject.id"
            v-bind:personalProject="personalProject"
			>
		</PersonalProjectCard>	
	</b-container>
</template>

<script lang='ts'>
import PersonalProjectPane from "./PersonalProjectPane";
export default PersonalProjectPane;
</script>
