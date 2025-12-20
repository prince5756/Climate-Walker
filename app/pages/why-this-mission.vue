<script setup lang="ts">

const { data: page } = await useAsyncData('why-this-mission', () => {
  return queryCollection('why_this_mission').first()
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

  <UPage v-if="page" id="about">

    <UPageHero :title="page.title" :description="page.description" orientation="horizontal" :ui="{
      container: 'lg:flex sm:flex-row items-center max-w-5xl lg:py-16 sm:py-16',
      title: '!mx-0 text-left',
      description: '!mx-0 text-left',
      links: 'justify-start'
    }">
      <template #top>
        <AppHeroBackground />
      </template>
    </UPageHero>

    <UPageSection :ui="{
      container: '!pt-0 max-w-5xl'
    }">
      <MDC :value="page.content" unwrap="p" />
    </UPageSection>

  </UPage>

</template>