<script setup lang="ts">
defineProps<{
    content: any,
}>()
</script>

<template>

    <UPageSection id="about" orientation="horizontal" :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10'
    }" reverse>

        <img :src="content.image" :alt="content.title" class="block w-full max-w-md md:2xl:max-w-lg rounded-md" />

        <div class="flex flex-col gap-4">
            <NuxtLink v-for="(section, i) in content.sections" :key="i" :to="section.to" class="group block transition">
                <div :class="[
                    section.class,
                    'rounded-md hover:bg-primary/5 cursor-pointer p-2'
                ]">
                    <h3 class="text-xl font-semibold mb-2">
                        {{ section.title }}
                    </h3>

                    <p class="text-gray-700 dark:text-gray-300 line-clamp-3 ">
                        {{ section.description }}
                    </p>

                    <span class="inline-flex items-center gap-1 text-primary font-medium">
                        Read more
                        <span class="transition-transform group-hover:translate-x-2">→</span>
                    </span>
                </div>
            </NuxtLink>
        </div>

    </UPageSection>

</template>
