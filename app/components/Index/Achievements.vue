<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
    content: any,
}>()
</script>

<template>

    <UPageSection id="achievements" :description="content.description" class="relative overflow-hidden">
        <template #headline>
            <UColorModeImage light="/images/light/line-3.svg" dark="/images/dark/line-3.svg"
                class="absolute -top-10 sm:top-0 right-1/2 h-24" />
        </template>
        <template #title>
            <MDC :value="content.title" />
        </template>

        <template #features>
            <UPageCard v-for="(item, index) in content.items" :key="index" class="group"
                :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }">
                <div class="flex justify-between items-center">
                    <Icon :icon="item.icon" class="text-primary text-5xl mb-3" />

                    <UButton :label="item.label" variant="subtle" class="block" />
                </div>

                <div class="flex flex-col gap-2">
                    <span class="text-lg font-semibold">
                        {{ item.title }}
                    </span>
                    <span class="text-sm text-muted">
                        {{ item.description }}
                    </span>
                </div>
            </UPageCard>
        </template>
    </UPageSection>

</template>