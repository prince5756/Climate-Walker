<script setup lang="ts">
defineProps<{
    content: any,
}>()
</script>

<template>

    <UPageCTA v-bind="content" variant="naked" class="overflow-hidden @container">
        <template #title>
            <MDC :value="content.title" />

            <div class="@max-[1280px]:hidden">
                <UColorModeImage light="/images/light/line-6.svg" dark="/images/dark/line-6.svg"
                    class="absolute left-10 -top-10 sm:top-0 h-full" />
                <UColorModeImage light="/images/light/line-7.svg" dark="/images/dark/line-7.svg"
                    class="absolute right-0 bottom-0 h-full" />
            </div>
        </template>

        <LazyAppStarsBg />
    </UPageCTA>

</template>