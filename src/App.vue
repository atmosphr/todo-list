<script
	setup
	lang="ts"
>
import TaskList from '@/components/task-list.vue'
import { ref }  from 'vue'

const tasks = ref([
	{
		title: 'Préparer la présentation Vue 3',
		completed: true
	},
	{
		title: 'Envoyer le code à Eros',
		completed: true
	},
	{
		title: 'Travailler l\'oral',
		completed: true
	},
	{
		title: 'Faire la présentation',
		completed: false
	}
])

setInterval(() => {
	tasks.value.push({
		title: `Title for task n°${ tasks.value.length }`,
		completed: Math.random() > 0.5
	})
}, 1000)
</script>

<template>
	<header>
		<h1>
			Shine TODO List
		</h1>
	</header>
	<hr>
	<main>
		<task-list :tasks="tasks" />
	</main>
</template>

<style scoped>
header {
	margin: 15px 0;
}

h1 {
	border-bottom: solid 1px #2c3e50;
	border-top: solid 1px #2c3e50;
	display: inline-block;
	padding: 0 15px;
}

hr {
	border: none;
	border-bottom: solid 1px #2c3e50;
	margin: 15px;
}

main {
	border: solid 1px #2c3e50;
	border-radius: 5px;
	margin: 15px;
	padding: 15px;
}
</style>
