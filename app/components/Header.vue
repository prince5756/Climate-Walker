<script setup lang="ts">
const appConfig = useAppConfig()
const isClose = ref(true)

// Close sidebar when route changes (if using Nuxt/Vue Router)
const route = useRoute()

watch(() => route.path, () => {
  isClose.value = true
})

// Clean up body scroll when component unmounts
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
})
</script>

<template>
  <header
    class="w-full flex lg:justify-around justify-between items-center p-2 z-40 transition-all duration-300 absolute top-0">
    <div class="flex items-center">
      <img height="50" width="50" src="/images/climate-walker-logo.jpg" class="rounded-full"
        :alt="appConfig.owner.CompanyName" />
      <span class="ml-3 text-xl font-bold">{{ appConfig.owner.CompanyName }}</span>
    </div>

    <nav class="hidden lg:flex items-center space-x-8">
      <a :href="item.url" v-for="item in appConfig.navigationLinks" class="hover:text-climate-green transition-colors">
        {{ item.title }}
      </a>
      <DonateButton />
    </nav>

    <button @click="isClose = false"
      class="btn btn-square btn-ghost lg:hidden block bg-transparent border-none shadow-none">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        class="inline-block h-10 w-10 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </header>

  <Sidebar v-model:isClose="isClose" @closeSidebar="isClose = $event" />
</template>