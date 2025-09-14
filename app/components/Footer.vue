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
    hoverColor: "hover:text-red-400"
  },
  {
    url: appConfig.owner.social.Instagram,
    icon: Instagram,
    title: "Instagram",
    hoverColor: "hover:text-pink-400"
  },
  {
    url: appConfig.owner.social.Facebook,
    icon: Facebook,
    title: "Facebook",
    hoverColor: "hover:text-blue-400"
  },
  {
    url: appConfig.owner.social.WhatsApp,
    icon: WhatsApp,
    title: "WhatsApp",
    hoverColor: "hover:text-green-400"
  },
]
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-6">
            <img height="50" width="50" src="/images/climate-walker-logo.jpg" alt="climate-walker" />
            <span class="text-2xl ml-5 font-bold flex flex-col">
              {{ appConfig.owner.CompanyName }}
              <a :href="'mailto:' + appConfig.owner.email" class="text-climate-green text-sm hover:text-green-400">
                {{ appConfig.owner.email }}
              </a>
            </span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Walking for climate awareness, one step at a time. Join me in
            creating a sustainable future for our planet.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-400">Links</h4>
          <ul class="space-y-3 text-gray-400">
            <li v-for="(item, index) in appConfig.navigationLinks" :key="index">
              <NuxtLink :to="item.url" class="hover:text-purple-400 transition-colors">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-400">Connect</h4>
          <ul class="space-y-3 text-gray-400">
            <li v-for="(item, index) in social" :key="index">
              <a :href="item.url" :class="item.hoverColor" class="transition-colors flex items-center gap-2 mb-2">
                <component :is="item.icon" />
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-400">Support</h4>
          <div class="space-y-4">
            <p class="text-gray-400">Help me continue this climate journey</p>

            <DonateButton />
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p class="flex items-center justify-center gap-2">
          <span>Made with</span>
          <span class="text-red-400 text-xl">❤️</span>
          <span>for our planet</span>
          <span class="text-green-400 text-xl">🌍</span>
        </p>
        <p class="mt-2">
          &copy; {{ appConfig.copyrightYear }} {{ appConfig.owner.CompanyName }}. Every step counts towards a
          sustainable
          future.
        </p>
      </div>
    </div>
  </footer>

</template>
