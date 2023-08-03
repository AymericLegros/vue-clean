<template>
    <router-link :to="{ name: menuItem.link }" v-slot="{ isActive }"
        :active-class="'bg-gray-800 hover:bg-gray-800'"
        class="flex items-center justify-center sm:justify-normal w-14 sm:w-full h-14 rounded-md shadow group transition duration-150 bg-white hover:bg-gray-200">
        <component :is="menuItem.icon" class="h-8 w-8 hover:text-gray-100 sm:ml-4" :class="[
            isActive ? 'text-white' : 'text-black',
        ]" aria-hidden="true" />

        <span class="ml-3 hidden sm:inline" :class="[
            isActive ? 'text-white' : 'text-black',
        ]">{{ menuItem.name }}</span>
    </router-link>
</template>

<script setup lang="ts">
interface MenuItem {
    name: string,
    icon: any,
    link: string
}

defineProps<{
    menuItem: MenuItem
}>()
</script>