<script setup lang="ts">

const { data: page } = await useAsyncData('global-recognition', () => {
  return queryCollection('global_recognition').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

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
      links: 'justify-start',
    }">
      <template #top>
        <AppHeroBackground />
      </template>
    </UPageHero>

    <UPageSection :ui="{
      container: '!pt-0 max-w-5xl'
    }">
      <Motion v-for="(project, index) in page.content" :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }" :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }">

        <UPageCard :title="project.title" :description="project.description" :to="project.url" orientation="horizontal"
          variant="naked" :reverse="index % 2 === 1" class="group" :ui="{
            wrapper: 'max-sm:order-last'
          }">

          <template #footer>
            <ULink :to="project.url" class="text-sm text-primary flex items-center">
              Read article
              <UIcon name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </ULink>
          </template>

          <img :src="project.image" :alt="project.title" class="object-cover w-full h-64 rounded-lg">
        </UPageCard>

      </Motion>
    </UPageSection>

  </UPage>
</template>