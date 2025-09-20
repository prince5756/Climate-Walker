<script setup lang="ts">
import Youtube from '@/components/icons/Youtube.vue';
import Instagram from '@/components/icons/Instagram.vue';
import Facebook from '@/components/icons/Facebook.vue';
import WhatsApp from '@/components/icons/WhatsApp.vue';

const appConfig = useAppConfig()

const social = [
  {
    url: appConfig.owner.social.YouTube,
    icon: Youtube,
    title: "YouTube",
    color: "bg-red-600 hover:bg-red-700"
  },
  {
    url: appConfig.owner.social.Instagram,
    icon: Instagram,
    title: "Instagram",
    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
  },
  {
    url: appConfig.owner.social.Facebook,
    icon: Facebook,
    title: "Facebook",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    url: appConfig.owner.social.WhatsApp,
    icon: WhatsApp,
    title: "WhatsApp",
    color: "bg-green-500 hover:bg-green-600"
  },
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-6">
        Follow the Journey
      </h2>
      <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Stay updated with daily progress, stunning photos, and inspiring
        stories from the road.
      </p>

      <div class="flex flex-wrap justify-center gap-6">
        <a v-for="(item, index) in social" :key="index" :href="item.url" target="_blank" :class="item.color"
          class="group text-white px-8 py-4 rounded-2xl shadow-lg transition-all transform hover:scale-105 flex items-center gap-3">

          <component :is="item.icon" />

          <span class="font-semibold">{{ item.title }}</span>
        </a>
      </div>
    </div>
  </section>
</template>