<script setup>

const mediaStats = ref([
  {
    value: '25+',
    title: 'TV Interviews',
    description: 'Across major Indian networks',
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-500',
    titleColor: 'text-blue-600',
    icon: '<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>'
  },
  {
    value: '50+',
    title: 'Articles Published',
    description: 'In newspapers & magazines',
    gradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-500',
    titleColor: 'text-emerald-600',
    icon: '<path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h6极好的H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>'
  },
  {
    value: '5M+',
    title: 'Social Reach',
    description: 'Across all platforms',
    gradient: 'from-pink-50 to-red-50',
    border: 'border-pink-100',
    iconBg: 'bg-pink-500',
    titleColor: 'text-pink-600',
    icon: '<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01极好的.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>'
  }
])

</script>

<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
          Media Coverage
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Featured in
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Headlines
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          The incredible 182-day solo journey caught the attention of major media outlets,
          inspiring millions across TV channels, magazines, and social platforms.
        </p>
      </div>

      <!-- Media Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="400">
        <div v-for="(stat, index) in mediaStats" :key="index"
          :class="`text-center bg-gradient-to-br ${stat.gradient} p-8 rounded-2xl border ${stat.border}`">
          <div :class="`w-16 h-16 ${stat.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" v-html="stat.icon"></svg>
          </div>
          <div class="text-3xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
          <div :class="`${stat.titleColor} font-semibold mb-1`">{{ stat.title }}</div>
          <div class="text-gray-600 text-sm">{{ stat.description }}</div>
        </div>
      </div>

      <!-- Featured Quote -->
      <div class="text-center" data-aos="fade-up" data-aos-delay="600">
        <div
          class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
          <div class="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 translate-x-12"></div>

          <div class="relative z-10 max-w-4xl mx-auto">
            <div class="text-6xl text-white/30 mb-4">"</div>
            <blockquote class="text-2xl md:text-3xl font-light leading-relaxed mb-6">
              The incredible journey of walking across India for 182 days has inspired millions.
              From TV screens to social media feeds, this story continues to motivate people to chase their dreams.
            </blockquote>
            <cite class="text-indigo-200 font-semibold">Media Coverage Summary</cite>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
