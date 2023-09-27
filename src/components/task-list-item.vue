<script
	setup
	lang="ts"
>
import {addTaskKey, removeTaskKey} from '@/core/provided-keys'
import type {Task} from '@/core/types/Task'
import {computed, inject} from 'vue'

const {task} = defineProps<{
	task: Task
	creating?: boolean
}>()

const emit = defineEmits<{
	(event: 'update:task', task: Task): void
	(event: 'update:creating', editing: boolean): void
}>()

const title = computed({
	get: () => {
		return task.title
	},
	set: (title: string) => {
		task.title = title
	}
})

const remove = inject(removeTaskKey)
const add = inject(addTaskKey)

function finishEditing(validated: boolean) {
	if (validated) {
		add?.(task)
	}
	emit('update:creating', false)
}
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
			<input
				v-if="creating"
				class="input-title"
				v-model="title"
				placeholder="Titre de la nouvelle tâche"
			>
			<span v-else>
				{{ task.title }}
			</span>
		</label>
		<span
			v-if="creating"
			class="float-right"
		>
			<a
				class="a-cancel"
				@click="finishEditing(false)"
			>
				Annuler
			</a>
			|
			<a
				class="a-validate"
				@click="finishEditing(true)"
			>
				Valider
			</a>
		</span>
		<a
			v-else
			class="float-right a-remove"
			@click="remove(task)"
		>
			Supprimer
		</a>
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

.checkbox-task-status {
	margin-right: 5px;
}

.input-title {
	all: unset;
	border: solid 1px #2c3e507F;
	border-radius: 100px;
	padding: 0 15px;
}

.float-right {
	float: right;
}

a:hover {
	cursor: pointer;
	text-decoration: underline;
}

.a-cancel {
	color: lightblue;
}

.a-remove {
	color: lightcoral;
}

.a-validate {
	color: lightgreen;
}
</style>
