<script
	setup
	lang="ts"
>
import TaskListItem from '@/components/task-list-item.vue'
import type {Task} from '@/core/types/Task'
import {computed, ref, watch} from 'vue'

const {tasks} = defineProps<{
	tasks: Task[]
}>()

const saved = ref(true)
const creating = ref(false)

const completedTasks = computed(() => {
	return tasks.filter(task => task.completed)
})

const progress = computed(() => {
	return `${completedTasks.value.length} / ${tasks.length}`
})

const remainingTasksText = computed(() => {
	const nbRemainingTasks = tasks.length - completedTasks.value.length
	switch (nbRemainingTasks) {
		case 0:
			return 'Aucune tâche restante'
		case 1:
			return `${nbRemainingTasks} tâche restante`
		default:
			return `${nbRemainingTasks} tâches restantes`
	}
})

const savedStateText = computed(() => {
	return saved.value ? 'Sauvegardé.' : 'Sauvegarde...'
})

watch(tasks, save)

function save() {
	saved.value = false
	// Simulate an async request to the server
	setTimeout(() => {
		saved.value = true
	}, 2000)
}
</script>

<template>
	<div v-if="tasks.length > 0">
		<fieldset>
			<legend>
				<span>
					{{ progress }}
					({{ remainingTasksText }})
				</span>
				<span>{{ savedStateText }}</span>
			</legend>
			<task-list-item
				v-for="(task, taskIndex) in tasks"
				:key="taskIndex"
				v-model:task="tasks[taskIndex]"
			/>
			<task-list-item
				v-if="creating"
				v-model:creating="creating"
				:task="{
					title: '',
					completed: false
				}"
			/>
		</fieldset>
		<button
			v-if="!creating"
			class="btn-new-task"
			@click="creating = true"
		>
			Créer une nouvelle tâche
		</button>
	</div>
	<div v-else>
		No task found in this list.
	</div>
</template>

<style scoped>
fieldset {
	border: none;
	padding: 15px 0 0;
	text-align: right;
}

legend {
	display: flex;
	flex-direction: column;
}

.btn-new-task {
	all: unset;
	border: solid 1px #2c3e50;
	border-radius: 100px;
	padding: 2px 10px;
}

.btn-new-task:hover {
	cursor: pointer;
}
</style>
