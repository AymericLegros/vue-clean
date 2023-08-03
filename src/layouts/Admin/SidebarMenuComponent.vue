<template>
    <ul class="space-y-2 font-medium">
        <li v-for="(menuItem, menuIndex) in menu" :key="`menu-${menuIndex}`">
            <SidebarMenuItemComponent :menuItem="menuItem" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { UserCircleIcon, ChartPieIcon } from '@heroicons/vue/20/solid'
import SidebarMenuItemComponent from './SidebarMenuItemComponent.vue';

const menu = [
    {
        name: 'Dashboard',
        icon: ChartPieIcon,
        link: 'dashboard'
    },
    {
        name: 'Stagiaires',
        icon: UserCircleIcon,
        link: 'stagiaire'
    }
]
</script>