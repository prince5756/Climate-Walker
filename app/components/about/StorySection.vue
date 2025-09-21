<script setup>

const stories = ref([
  {
    title: 'Humble Beginnings',
    gradient: 'from-teal-50 to-blue-50',
    border: 'border-teal-100',
    iconColor: 'bg-teal-500',
    icon: '<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 极好的 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 极好的 01-1.4 0zM6 18a1 1 0 001-1v-极好的.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>',
    content: 'Born in the small village of <strong>Bhavnagar, Gujarat</strong>, I was a brilliant student who initially pursued chartered accountancy (C.A.) in Surat. However, my heart was drawn to the vast possibilities of the tourism sector, leading me to pivot toward <strong>tour and travel management</strong>.'
  },
  {
    title: 'Finding My Path',
    gradient: 'from-blue-50 to-emerald-50',
    border: 'border-blue-100',
    iconColor: 'bg-blue-500',
    icon: '<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 极好的 2 0 000 4z" clip-rule="evenodd"/>',
    content: 'After completing my management course, I became a certified trekking instructor and joined <strong>Invincible NGO</strong>, India\'s largest trekking organization. This marked the beginning of my journey as a senior trekking instructor and volunteer, where I discovered my true calling.'
  },
  {
    title: 'Life-Changing Journey',
    gradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    iconColor: 'bg-emerald-500',
    icon: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    content: 'During COVID-19, I embarked on an incredible <strong>182-day solo backpacking journey</strong> across India with almost no money. This transformative experience showed me the real and rural India, giving me practical knowledge about traveling and a deeper meaning in life.'
  }
])

const milestones = ref([
  { emoji: '🎓', title: 'Education Transform', description: 'C.A. to Tourism Management' },
  { emoji: '🥾', title: 'Certified Instructor', description: 'Joined Invincible NGO' },
  { emoji: '🗺️', title: 'Epic Journey', description: '182 Days Across India' },
  { emoji: '🌍', title: 'Global Impact', description: 'India to Europe Inspiration' }
])

</script>

<template>
  <section class="py-20 bg-white relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500"></div>

    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-4">
          My Story
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Journey of a
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            Dreamer
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Every great adventure begins with a single step. Here's how a brilliant student from Bhavnagar
          became a beacon of inspiration for thousands.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Story Content -->
        <div class="space-y-8" data-aos="fade-right">
          <div v-for="(story, index) in stories" :key="index"
            :class="`bg-gradient-to-br ${story.gradient} p-8 rounded-2xl border ${story.border}`">
            <div class="flex items-center mb-4">
              <div :class="`w-12 h-12 ${story.iconColor} rounded-lg flex items-center justify-center mr-4`">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" v-html="story.icon"></svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ story.title }}</h3>
            </div>
            <p class="text-gray-700 leading-relaxed" v-html="story.content"></p>
          </div>
        </div>

        <!-- Visual Elements -->
        <div class="relative" data-aos="fade-left">
          <div class="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12">
            </div>

            <div class="relative z-10">
              <h3 class="text-3xl font-bold mb-6">Key Milestones</h3>

              <div class="space-y-6">
                <div v-for="(milestone, index) in milestones" :key="index" class="flex items-center">
                  <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span class="text-2xl font-bold">{{ milestone.emoji }}</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">{{ milestone.title }}</h4>
                    <p class="text-blue-100">{{ milestone.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating quote -->
          <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-xs">
            <p class="text-gray-800 font-medium italic">
              "This walking journey is the next step for Mother Earth."
            </p>
            <div class="flex items-center mt-3">
              <div class="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
              <span class="text-sm text-gray-600">Jaydip's Mission</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>