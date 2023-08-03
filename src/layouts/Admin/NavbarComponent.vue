<template>
    <nav
        class="bg-white sm:pl-64 fixed pl-20 w-full z-20 top-0 left-0 border-b border-gray-200">
        <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
            <div class="flex">
                <a href="#" class="flex items-center">
                    <span class="self-center text-xl font-medium whitespace-nowrap">Dashboard</span>
                </a>
            </div>
            <div class="flex">
                <DropdownUser />
            </div>
        </div>
    </nav>
</template>