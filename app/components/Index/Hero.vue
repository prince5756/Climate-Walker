<script setup lang="ts">

defineProps<{
    content: any,
}>()

</script>

<template>

    <UPageHero id="home" :description="content.description" :links="content.links" :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-3xl mx-auto'
    }">
        <template #top>
            <AppHeroBackground />
        </template>

        <template #title>
            <MDC :value="content.title" unwrap="p" />
        </template>
    </UPageHero>

</template>