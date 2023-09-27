import type { Task }         from '@/core/types/Task'
import type { InjectionKey } from 'vue'

export const removeTaskKey = Symbol() as InjectionKey<(task: Task) => void>
export const addTaskKey = Symbol() as InjectionKey<(task: Task) => void>