<script setup lang="ts">

const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description,
  ogType: 'website',
  ogUrl: 'https://theclimatewalker.com/',
})
</script>

<template>
  <div v-if="page" class="relative">
    <div class="hidden lg:block">
      <UColorModeImage light="/images/light/line-1.svg" dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]" />
    </div>

    <IndexHero :content="page.hero" />

    <IndexAbout :content="page.about" />

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <IndexSupportUs :content="page.support" />

    <IndexAchievements :content="page.achievements" />

    <IndexTestimonials :content="page.testimonials" />

    <USeparator />

    <IndexCTA :content="page.cta" />
  </div>
</template>
