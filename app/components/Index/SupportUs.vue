<script setup lang="ts">
defineProps<{
  content: any,
}>()
</script>

<template>

  <UPageSection id="support-us" class="overflow-hidden" :ui="{
    container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
    features: 'gap-0',
    title: 'text-left @container relative'
  }">
    <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
    <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
    <template #title>
      <MDC :value="content.title" />

      <div class="hidden @min-[1120px]:block">
        <UColorModeImage light="/images/light/line-4.svg" dark="/images/dark/line-4.svg"
          class="absolute top-0 right-0 size-full transform translate-x-[60%]" />
      </div>
    </template>

    <div class="grid md:grid-cols-2">
      <div class="space-y-8">
        <div v-for="(section, i) in content.sections" :key="i" :class="section.class">
          <h3 class="text-xl font-semibold mb-2">{{ section.title }}</h3>

          <p v-if="section.description" class="text-gray-700 dark:text-gray-300">
            {{ section.description }}
          </p>

          <ul v-if="section.points" class="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li v-for="(p, idx) in section.points" :key="idx">{{ p }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 md:mt-0 flex flex-col items-center justify-center gap-6">
        <UButton v-for="(btn, index) in content.buttons" :key="index" :label="btn.label" :to="btn.to"
          :variant="btn.variant" size="xl"
          class="w-76 px-8 py-3 rounded-md shadow-md flex justify-center items-center" />
      </div>
    </div>

  </UPageSection>

</template>