<script
	setup
	lang="ts"
>
import TaskList                    from '@/components/task-list.vue'
import { removeTaskKey }           from '@/core/provided-keys'
import type { Task }               from '@/core/types/Task'
import { onMounted, provide, ref } from 'vue'

const loading = ref(true)
const tasks = ref([])

onMounted(() => {
	// Simulate an async request to the server to load the list
	setTimeout(() => {
		loading.value = false
		tasks.value = [
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
	}, 2000)
})

function removeTask(task: Task) {
	tasks.value.splice(tasks.value.indexOf(task), 1)
}

provide(removeTaskKey, removeTask)
</script>

<template>
	<header>
		<h1>
			Shine TODO List
		</h1>
	</header>
	<hr>
	<main>
		<div v-if="loading">
			Chargement de la liste en cours...
		</div>
		<task-list
			v-else
			:tasks="tasks"
		/>
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
