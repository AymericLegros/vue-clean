<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/solid'
import { TrashIcon, DocumentTextIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'

defineProps<{
  stagiaireId: number
}>()

function onLinkClick(event: MouseEvent, navigate: () => void, close: () => void) {
  event.preventDefault()
  navigate()
  close()
}

</script>
  
<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="rounded-md bg-white p-1 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
          <EllipsisVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute z-50 left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active, close }">
            <router-link :to="{ name: 'stagiaire.detail', params: { id: stagiaireId } }" :class="[
              active ? 'bg-gray-500 text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
              <DocumentTextIcon class="w-5 h-5 mr-2" aria-hidden="true" />
              Ouvrir la fiche
            </router-link>
            </MenuItem>
            <MenuItem v-slot="{ active, close }">
            <button @click="close" :class="[
              active ? 'bg-gray-500 text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
              <ArrowRightOnRectangleIcon class="w-5 h-5 mr-2" aria-hidden="true" />
              Sortir
            </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active, close }">
            <button @click="close" :class="[
              active ? 'bg-red-500 text-white' : 'text-red-600',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]">
              <TrashIcon class="w-5 h-5 mr-2" aria-hidden="true" />
              Supprimer
            </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>