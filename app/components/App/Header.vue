<script setup lang="ts">

const nuxtApp = useNuxtApp()

const { activeHeadings, updateHeadings } = useScrollspy()
import { useRoute } from '#imports'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
const isAboutPage = computed(() => route.path === '/about')
const isGlobalRecognition = computed(() => route.path === '/global-recognition')
const isJourneyTimeline = computed(() => route.path === '/journey-timeline')
const isWhyThisMission = computed(() => route.path === '/why-this-mission')

const items = computed(() => [{
  label: 'Home',
  to: '/#home',
  active: isHomePage.value && !activeHeadings.value.includes('achievements')
}, {
  label: 'About',
  to: '/about',
  active: isAboutPage.value
}, {
  label: 'Achievements',
  to: '/#achievements',
  active: isHomePage.value && activeHeadings.value.includes('achievements') && !activeHeadings.value.includes('home')
}, {
  label: 'Global Recognition',
  to: '/global-recognition',
  active: isGlobalRecognition.value
}, {
  label: 'Journey Timeline',
  to: '/journey-timeline',
  active: isJourneyTimeline.value
}, {
  label: 'Why this mission',
  to: '/why-this-mission',
  active: isWhyThisMission.value
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#home'),
    document.querySelector('#achievements'),
  ].filter(Boolean) as Element[])
})

</script>

<template>
  <UHeader>

    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu :items="items" variant="link" class="hidden lg:block" />

      <UButton to="#support-us" label="Donate Now" variant="subtle" class="hidden lg:block" />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton to="#support-us" class="mt-4" label="Donate Now" variant="subtle" block />
    </template>

  </UHeader>
</template>
