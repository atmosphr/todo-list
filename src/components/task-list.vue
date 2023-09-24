<script
	setup
	lang="ts"
>
import TaskListItem  from '@/components/task-list-item.vue'
import type { Task } from '@/core/types/Task'

const {tasks} = defineProps<{
	tasks: Task[]
}>()
</script>

<template>
	<fieldset v-if="tasks.length > 0">
		<legend>{{ tasks.filter(task => task.completed).length }} / {{ tasks.length }}</legend>
		<task-list-item
			v-for="(task, taskIndex) in tasks"
			:key="taskIndex"
			v-model:task="tasks[taskIndex]"
		/>
	</fieldset>
	<div v-else>
		No task found in this list.
	</div>
</template>

<style scoped>
fieldset {
	border: none;
	text-align: right;
}
</style>
