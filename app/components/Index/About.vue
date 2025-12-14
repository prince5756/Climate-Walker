<script setup lang="ts">
defineProps<{
    content: any,
}>()
</script>

<template>

    <UPageSection id="about" :description="content.description" :features="content.sections" orientation="horizontal"
        :ui="{
            container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
            features: 'gap-0'
        }" reverse>
        <template #title>
            <MDC :value="content.title" class="sm:*:leading-11" />
        </template>
        <img :src="content.image" :alt="content.title" class="block left-0 w-full max-w-md md:2xl:max-w-lg rounded-md">
    </UPageSection>

</template>
