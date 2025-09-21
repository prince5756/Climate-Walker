<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <nav class="w-full z-50 transition-all duration-300 absolute top-0">
    <div class="max-w-7xl mx-auto text-white">
      <div class="flex justify-between items-center h-16">
        <div class="flex ml-4 lg:ml-0 items-center">
          <img height="50" width="50" src="/images/climate-walker-logo.jpg" class="rounded-full" :alt="appConfig.owner.CompanyName" />
          <span class="ml-3 text-xl font-bold">{{ appConfig.owner.CompanyName }}</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">

          <NuxtLink v-for="item in appConfig.navigationLinks" :to="item.url"
            class="hover:text-climate-green transition-colors">
            {{ item.title }}
          </NuxtLink>

          <DonateButton />
        </div>
      </div>
    </div>
  </nav>
</template>
