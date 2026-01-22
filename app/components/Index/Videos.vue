<script setup lang="ts">
  defineProps<{
      content: any,
  }>()
</script>

<template>
  <UPageSection
    id="support-us"
    class="overflow-hidden"
    :ui="{
      container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
      features: 'gap-0',
      title: 'text-left @container relative',
    }"
  >
    <template #title>
      <MDC :value="content.title" />

      <div class="hidden @min-[1120px]:block">
        <UColorModeImage
          light="/images/light/line-4.svg"
          dark="/images/dark/line-4.svg"
          class="absolute top-0 right-0 size-full transform translate-x-[60%]"
        />
      </div>
    </template>

    <div class="grid md:grid-cols-2">
      
      <div v-for="(url, index) in content.urls" :key="index" class="p-4">
        <UCard>
          <div class="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              :src="url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="w-full h-full"
            />
          </div>
        </UCard>
      </div>
      
    </div>
  </UPageSection>
</template>
