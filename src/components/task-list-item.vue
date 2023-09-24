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
	</div>
</template>

<style scoped>
.task-list-item {
	user-select: none;
	background-color: #2c3e504F;
	border: solid 1px #2c3e50;
	border-radius: 100px;
	margin-bottom: 10px;
	padding-left: 15px;
	text-align: left;
}

.task-list-item:last-child {
	margin-bottom: 0;
}

.checkbox-task-status {
	margin-right: 5px;
}
</style>
