<template>
    <client-only>
        <div class="flex flex-row">
            <button
                :class="`py-2 flex-1 border-b-2 ${switchStore.switch == 'tasks' ? 'border-green-600 text-green-600' : 'border-gray-600 text-gray-600'}`"
                @click="switchStore.switchFn('tasks')">Tasks</button>
            <button
                :class="`py-2 flex-1 border-b-2 ${switchStore.switch == 'requests' ? 'border-green-600 text-green-600' : 'border-gray-600 text-gray-600'}`"
                @click="switchStore.switchFn('requests')">Requests</button>
        </div>
    </client-only>
</template>

<script setup lang="ts">
const switchStore = useSwitchStore()
</script>

<style></style>