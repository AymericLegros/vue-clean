<script setup lang="ts">
import { UserGroupIcon, ArchiveBoxIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/20/solid'

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
        <div class="w-full px-4 py-3 mx-auto">
            <div class="flex items-center">
                <ul class="flex flex-row flex-nowrap space-x-4 font-medium text-sm">
                    <li>
                        <a href="#" class="text-black hover:underline flex flex-nowrap whitespace-nowrap space-x-2 py-2 px-3">
                            <UserGroupIcon class="h-5 w-5" />
                            <span>Actifs (???)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-400 hover:underline flex flex-nowrap whitespace-nowrap space-x-2 py-2 px-3">
                            <ArrowRightOnRectangleIcon class="h-5 w-5" />
                            <span>Post-parcours (???)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-400 hover:underline flex flex-nowrap whitespace-nowrap space-x-2 py-2 px-3">
                            <ArchiveBoxIcon class="h-5 w-5" />
                            <span>Archivés</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="bg-white border-b border-gray-200 text-black">
                <tr>
                    <th scope="col" class="flex items-center justify-center content-center">
                        <input type="checkbox" value="" class="block w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" >
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap font-semibold">
                        Nom
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap font-semibold">
                        Formateur Référent
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap font-semibold">
                        Projet professionnel
                    </th>
                </tr>
            </thead>
            <!-- <tbody>
                <tr v-for="stagiaire in stagiaires" :key="stagiaire.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="col" class="px-6 py-3">
                        <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" >
                    </td>
                    <td class="px-6 py-4">
                        Apple MacBook Pro 17"
                    </td>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
            </tbody> -->
        </table>
    </div>
</template>