import { defineStore } from "pinia";
type TasksType = []
export const useTaskStore = defineStore('taskStore', {
    state: () => {
        return {
            tasks: [] as TasksType
        };
    },
    actions: {
        addTask(val) {
            this.tasks.push(val)
        }
    },
    getters: {

    },
})