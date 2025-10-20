<template>
    <NuxtLayout>
        <template #head>
            <Switcher />
        </template>
        <template>
            <Tasks v-if="switchStore.switch == 'tasks'" />
            <Requests v-else />
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
import Tasks from '../components/Tasks.vue';
import Switcher from '../components/Switcher.vue';
import Requests from '../components/Requests.vue';


const switchStore = useSwitchStore()
</script>