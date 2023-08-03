<script setup lang="ts">
import { UserGroupIcon, ArchiveBoxIcon, ArrowRightOnRectangleIcon, Add } from '@heroicons/vue/20/solid'
import StagiaireListDropdown from './StagiaireListDropdown.vue';
const stagiaires = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
]
</script>

<template>
    <nav class="bg-white border-b border-gray-200  overflow-x-auto">
        <div class="w-full px-4 py-2 mx-auto">
            <div class="flex justify-between">
                <ul class="flex flex-row flex-nowrap space-x-4 font-medium text-sm">
                    <li>
                        <a href="#"
                            class="text-black hover:underline flex flex-nowrap whitespace-nowrap space-x-2 py-3 px-3">
                            <UserGroupIcon class="h-5 w-5" />
                            <span>Actifs (???)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-gray-400 hover:underline flex flex-nowrap whitespace-nowrap space-x-2 py-3 px-3">
                            <ArrowRightOnRectangleIcon class="h-5 w-5" />
                            <span>Post-parcours (???)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="text-gray-400 hover:underline flex flex-nowrap whitespace-nowrap space-x-2 py-3 px-3">
                            <ArchiveBoxIcon class="h-5 w-5" />
                            <span>Archivés</span>
                        </a>
                    </li>
                </ul>
                <div class="flex flex-row items-center">
                    <router-link :to="{ name: 'stagiaire.create' }"
                        class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md">
                        Créer
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="bg-white border-b border-gray-200 text-black">
                <tr>
                    <th scope="col" class="pl-8 py-3">
                        <div class="flex flex-nowrap space-x-3 items-center">
                            <input type="checkbox" value="" class="w-5 h-5 bg-gray-100 border-gray-300 rounded">
                            <div class="w-8 h-8"></div>
                        </div>
                    </th>
                    <th scope="col" class="pr-8 pl-2 py-3 whitespace-nowrap font-semibold">
                        Nom
                    </th>
                    <th scope="col" class="px-8 py-3 whitespace-nowrap font-semibold">
                        Formateur Référent
                    </th>
                    <th scope="col" class="px-8 py-3 whitespace-nowrap font-semibold w-full">
                        Projet professionnel
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stagiaire in stagiaires" :key="stagiaire.id" class="bg-white border-b hover:shadow-2xl">
                    <td class="pl-8 py-3">
                        <div class="flex flex-nowrap space-x-3 items-center">
                            <input type="checkbox" value="" class="w-5 h-5 -mt-0.5 bg-gray-100 border-gray-300 rounded">
                            <StagiaireListDropdown :stagiaireId="stagiaire.id" />
                        </div>
                    </td>
                    <td class="pr-8 pl-2 py-3 whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </td>
                    <td class="px-8 py-3 whitespace-nowrap">
                        Silver
                    </td>
                    <td class="px-8 py-3 whitespace-nowrap w-full">
                        Laptop
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <RouterView />
</template>