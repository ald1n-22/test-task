import { defineStore } from "pinia";
type switchType = "tasks" | "requests"
export const useSwitchStore = defineStore('switchStore', {
    state: () => {
        return {
            switch: "tasks" as switchType
        };
    },
    getters: {

    },

    actions: {
        switchFn(val: switchType) {
            this.switch = val
        }
    }
})