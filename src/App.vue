<script
	setup
	lang="ts"
>
import TaskListItem from '@/components/task-list-item.vue'
import type { Task } from '@/core/types/Task'

const tasks: Task[] = [
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
]
</script>

<template>
	<header>
		<h1>
			Shine TODO List
		</h1>
	</header>
	<hr>
	<main>
		<div v-if="tasks.length > 0">
			<task-list-item
				v-for="(task, taskIndex) in tasks"
				:key="taskIndex"
				:task="task"
			/>
		</div>
		<div v-else>
			No task found in this list.
		</div>
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
