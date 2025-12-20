<script setup lang="ts">

defineProps<{
    country: string
    kilometers: number | string
    days: number | string
    date: string
    direction: string
}>()

</script>

<template>
    <UCard class="w-full max-w-sm" :ui="{
        body: 'space-y-4',
        rounded: 'rounded-2xl',
        shadow: 'shadow-md'
    }">

        <div class="flex items-center justify-between"
            :class="direction == 'right' ? 'md:flex-row-reverse' : 'md:flex-row'">
            <p class="text-sm text-primary">
                {{ date }}
            </p>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ country }}
            </h3>
        </div>

        <USeparator />

        <div class="grid grid-cols-2 gap-4 text-center">
            <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-3">
                <p class="text-sm text-gray-500">Kilometers</p>
                <p class="text-lg font-bold text-primary">
                    {{ kilometers }} km
                </p>
            </div>

            <div class="bg-gray-100 dark:bg-gray-800 rounded-md p-3">
                <p class="text-sm text-gray-500">Days</p>
                <p class="text-lg font-bold text-primary">
                    {{ days }}
                </p>
            </div>
        </div>

    </UCard>
</template>
