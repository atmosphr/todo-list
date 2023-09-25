<script
	setup
	lang="ts"
>
import type { Task } from '@/core/types/Task'

defineProps<{
	task: Task
}>()

defineEmits<{
	(event: 'update:task', task: Task): void
	(event: 'remove'): void
}>()
</script>

<template>
	<div class="task-list-item">
		<label>
			<input
				type="checkbox"
				class="checkbox-task-status"
				:checked="task.completed"
				@click="task.completed = !task.completed; $emit('update:task', task)"
			>
			{{ task.title }}
		</label>
		<a @click="$emit('remove')">Supprimer</a>
	</div>
</template>

<style scoped>
.task-list-item {
	user-select: none;
	background-color: #2c3e504F;
	border: solid 1px #2c3e50;
	border-radius: 100px;
	margin-bottom: 15px;
	padding: 5px 15px;
	text-align: left;
}

.task-list-item:last-child {
	margin-bottom: 0;
}

.checkbox-task-status {
	margin-right: 5px;
}

a {
	color: lightcoral;
	float: right;
}

a:hover {
	cursor: pointer;
	text-decoration: underline;
}
</style>
