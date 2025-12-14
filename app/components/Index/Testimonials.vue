<script setup lang="ts">
defineProps<{
  content: any,
}>()
</script>

<template>

  <UPageSection id="testimonials" :title="content.title" :description="content.description" :items="content.items">
    <template #headline>
      <UColorModeImage light="/images/light/line-5.svg" dark="/images/dark/line-5.svg"
        class="absolute -top-10 sm:top-0 right-1/2 h-24" />
    </template>
    <template #title>
      <MDC :value="content.title" />
    </template>

    <UContainer>
      <UPageColumns class="xl:columns-3">
        <UPageCard v-for="(testimonial, index) in content.items" :key="index" variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }">
          <template #footer>
            <UUser v-bind="testimonial.user" size="xl" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UContainer>
  </UPageSection>

</template>