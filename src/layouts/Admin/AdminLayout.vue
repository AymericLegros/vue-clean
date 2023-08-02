<script setup lang="ts">
    import SidebarComponent from './SidebarComponent.vue'
    import NavbarComponent from './NavbarComponent.vue'
</script>

<template>
    <SidebarComponent />

    <div class="ml-20 sm:ml-64">
        <NavbarComponent />

        <main class="mt-16">
            <RouterView />
        </main>
    </div>
</template>