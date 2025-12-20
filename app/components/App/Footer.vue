<script setup lang="ts">

const columns = [
  {
    label: 'Links',
    children: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/#achievements', label: 'Achievements' },
      { to: '/global-recognition', label: 'Global Recognition' },
      { to: '/journey-timeline', label: 'Journey Timeline' },
      { to: '/why-this-mission', label: 'Why this mission' },
    ]
  },
  {
    label: 'Connect with us',
    children: [
      { label: 'YouTube', href: 'https://www.youtube.com/@the.climate.walker', target: '_blank' },
      { label: 'Instagram', href: 'https://www.instagram.com/the.climate.walker', target: '_blank' },
      { label: 'Facebook', href: 'https://www.facebook.com/share/1EvQgo67RF/', target: '_blank' },
      { label: 'WhatsApp', href: 'https://wa.me/917435827283', target: '_blank' }
    ]
  }
]

</script>

<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" class="h-px" />

  <UFooter :ui="{ top: 'border-b border-default' }">

    <template #top>
      <UContainer>

        <UFooterColumns :columns="columns">
          <template #right>

            <div>
              <div class="flex items-center mb-6">
                <img src="/climate-walker-logo.png" class="h-12" />
                <span class="text-2xl ml-5 font-bold flex flex-col">
                  Climate Walker
                  <a href="mailto:theclimatewalker@gmail.com"
                    class="text-climate-green text-sm text-green-400 hover:text-green-600">
                    theclimatewalker@gmail.com
                  </a>
                </span>
              </div>

              <p class="text-gray-400 leading-relaxed">
                Walking for climate awareness, one step at a time. Join me in
                creating a sustainable future for our planet.
              </p>
            </div>

          </template>
        </UFooterColumns>

      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        Climate Walker. Every step counts towards a sustainable future. • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton to="https://www.youtube.com/@the.climate.walker" target="_blank" icon="i-simple-icons-youtube"
        aria-label="Climate Walker on Youtube" color="neutral" variant="ghost" />
      <UButton to="https://www.instagram.com/the.climate.walker" target="_blank" icon="i-simple-icons-instagram"
        aria-label="Climate Walker on Instagram" color="neutral" variant="ghost" />
      <UButton to="https://www.facebook.com/share/1EvQgo67RF/" target="_blank" icon="i-simple-icons-facebook"
        aria-label="Climate Walker on Facebook" color="neutral" variant="ghost" />
      <UButton to="https://wa.me/917435827283" target="_blank" icon="i-simple-icons-whatsapp"
        aria-label="Climate Walker on WhatsApp" color="neutral" variant="ghost" />
    </template>

  </UFooter>
</template>
