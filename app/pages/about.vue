<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
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
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center max-w-5xl',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #top>
          <AppHeroBackground />
      </template>
      <NuxtImg
        src="/images/featured/whos_who.JPG"
        alt="Jaydip Lakhankiya"
        width="512"
        height="512"
        class="sm:rotate-4 size-64 rounded-lg ring ring-default ring-offset-3 ring-offset-primary object-cover"
      />
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0 max-w-5xl'
      }"
    >
      <MDC
        :value="page.content"
        unwrap="p"
      />
    </UPageSection>
  </UPage>
</template>