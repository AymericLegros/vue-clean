<template>
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-20 sm:w-64 h-screen" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
            <div class="mb-5 text-center">
                <a href="#">
                    <span class="self-center text-xl font-semibold whitespace-nowrap">UP'2C</span>
                </a>
                <div class="w-8 h-1 bg-black mx-auto"></div>
            </div>
            <SidebarMenuComponent />
        </div>
    </aside>
</template>

<script setup lang="ts">
import SidebarMenuComponent from './SidebarMenuComponent.vue'
</script>