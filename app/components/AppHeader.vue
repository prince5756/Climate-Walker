<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Home',
  to: '#home',
  active: activeHeadings.value.includes('home')
}, {
  label: 'About',
  to: '#about',
  active: activeHeadings.value.includes('about') && !activeHeadings.value.includes('home')
}, {
  label: 'Journey',
  to: '#journey',
  active: activeHeadings.value.includes('journey') && !activeHeadings.value.includes('about')
}, {
  label: 'Support Us',
  to: '#support-us',
  active: activeHeadings.value.includes('support-us') && !activeHeadings.value.includes('journey')
}, {
  label: 'Achievements',
  to: '#achievements',
  active: activeHeadings.value.includes('achievements') && !activeHeadings.value.includes('support-us')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#home'),
    document.querySelector('#about'),
    document.querySelector('#journey'),
    document.querySelector('#support-us'),
    document.querySelector('#achievements'),
    document.querySelector('#testimonials')
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
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        to="https://rzp.io/rzp/EERYYaM"
        target="_blank"
        label="Donate Now"
        variant="subtle"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        to="https://rzp.io/rzp/EERYYaM"
        target="_blank"
        class="mt-4"
        label="Donate Now"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
