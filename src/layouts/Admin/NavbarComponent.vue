<template>
    <nav
        class="bg-white dark:bg-gray-900 sm:pl-64 fixed pl-20 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex">
                <a href="#" class="flex items-center">
                    <span class="self-center text-xl font-medium whitespace-nowrap dark:text-white">Dashboard</span>
                </a>
            </div>
            <div class="flex">
                <DropdownUser />
            </div>
        </div>
    </nav>
</template>