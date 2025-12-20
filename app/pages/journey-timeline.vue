<script setup lang="ts">

const { data: page } = await useAsyncData('journey-timeline', () => {
  return queryCollection('journey_timeline').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})

</script>

<template>
  <UPage v-if="page">
    <UPageHero :title="page.title" :description="page.description" :ui="{
      container: 'max-w-5xl',
      title: '!mx-0 text-left',
      description: '!mx-0 text-left',
      links: 'justify-start'
    }">
      <template #top>
        <AppHeroBackground />
      </template>
    </UPageHero>

    <!-- Timeline Section -->
    <UPageSection class="relative" :ui="{ container: '!pt-0 max-w-5xl' }">
      <!-- Vertical center line -->
      <div class="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2
               bg-gradient-to-b from-green-400 via-green-500 to-green-600" />

      <!-- Timeline rows -->
      <div class="space-y-6">

        <Motion v-for="(item, index) in page.content" :key="index" :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }" :transition="{ delay: 0.15 * index }" :in-view-options="{ once: true }">

          <div class="grid grid-cols-[1fr_auto_1fr] items-center">
            <!-- Left card -->
            <div class="flex justify-end">
              <JourneyTimelineCard v-if="index % 2 === 0" class="max-w-sm" :country="item.country"
                :kilometers="item.kilometers" :days="item.days" :date="item.date" direction="left" />
            </div>

            <!-- Center circle -->
            <div class="relative flex justify-center">
              <div class="z-10 h-4 w-4 rounded-full
                       bg-gradient-to-b from-green-400 via-green-500 to-primary" />
            </div>

            <!-- Right card -->
            <div class="flex justify-start">
              <JourneyTimelineCard v-if="index % 2 === 1" class="max-w-sm" :country="item.country"
                :kilometers="item.kilometers" :days="item.days" :date="item.date" direction="right" />
            </div>
          </div>

        </Motion>

      </div>

    </UPageSection>
  </UPage>
</template>
