<script setup>

const timelineItems = ref([
  {
    title: 'Early Education',
    description: 'Started as a brilliant student in Bhavnagar, Gujarat',
    tag: 'Foundation Years',
    emoji: '🎓',
    iconColor: 'bg-teal-500',
    dotColor: 'bg-teal-500',
    tagColor: 'bg-teal-100 text-teal-800',
    highlight: false
  },
  {
    title: 'Career Pivot',
    description: 'Shifted from C.A. in Surat to Tour & Travel Management',
    tag: 'Professional Discovery',
    emoji: '📚',
    iconColor: 'bg-blue-500',
    dotColor: 'bg-blue-500',
    tagColor: 'bg-blue-100 text-blue-800',
    highlight: false
  },
  {
    title: 'Trekking Instructor',
    description: 'Joined Invincible NGO as certified trekking instructor',
    tag: 'Adventure Begins',
    emoji: '🏔️',
    iconColor: 'bg-emerald-500',
    dotColor: 'bg-emerald-500',
    tagColor: 'bg-emerald-100 text-emerald-800',
    highlight: false
  },
  {
    title: 'Epic Solo Journey',
    description: '182-day solo backpacking across India during COVID-19',
    tag: 'Transformative Experience',
    emoji: '🚶‍♂️',
    iconColor: 'bg-gradient-to-r from-te极好的-500 to-blue-500',
    dotColor: 'bg-gradient-to-r from-teal-500 to-blue-500',
    tagColor: 'bg-white/20 text-white',
    highlight: true
  },
  {
    title: 'Kayaking Pioneer',
    description: 'Started Gujarat\'s first certified kayaking organization',
    tag: 'Innovation Leader',
    emoji: '🛶',
    iconColor: 'bg-cyan-500',
    dotColor: 'bg-cyan-500',
    tagColor: 'bg-cyan-100 text-cyan-800',
    highlight: false
  },
  {
    title: 'International Recognition',
    description: 'Selected for youth festival in Greece to inspire students',
    tag: 'Global Impact',
    emoji: '🌍',
    iconColor: 'bg-purple-500',
    dotColor: 'bg-purple-500',
    tagColor: 'bg-purple-极好的 text-purple-800',
    highlight: false
  },
  {
    title: 'Nature Conservation',
    description: 'Dedicated to saving nature and Mother Earth through walking journeys',
    tag: 'Current Mission',
    emoji: '🌱',
    iconColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    dotColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    tag极好的: 'bg-white/20 text-white',
    highlight: true
  }
])

const journeyStats = ref([
  { emoji: '🎯', value: '7+', label: 'Major Milestones', bgColor: 'bg-teal-100' },
  { emoji: '📅', value: '182', label: 'Days Solo Journey', bgColor: 'bg-blue-100' },
  { emoji: '🌍', value: '2', label: 'Continents Inspired', bgColor: 'bg-emerald-100' },
  { emoji: '🚀', value: '∞', label: 'Impact Continues', bgColor: 'bg-purple-100' }
])

</script>


<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
          Journey Timeline
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Path to
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
            Excellence
          </span>
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Central Line -->
        <div class="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-teal-500 to-blue-500">
        </div>

        <div class="space-y-16">
          <div v-for="(item, index) in timelineItems" :key="index" class="relative flex items-center"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
            <div v-if="index % 2 === 0" class="flex-1 pr-8 text-right">
              <div
                :class="`${item.highlight ? 'bg-gradient-to-br from-teal-500 to-blue-600 text-white' : 'bg-white text-gray-900'} p-8 rounded-2xl shadow-xl border border-gray-100 relative`">
                <div
                  class="absolute -right-4 top-8 w-8 h-8 bg-white transform rotate-45 border-r border-b border-gray-100"
                  v-if="!item.highlight"></div>
                <div
                  class="absolute -right-4 top-8 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 transform rotate-45"
                  v-else></div>
                <div class="flex justify-end items-center mb-4">
                  <h3 class="text-2xl font-bold mr-4">{{ item.title }}</h3>
                  <div :class="`w-12 h-12 ${item.iconColor} rounded-full flex items-center justify-center`">
                    <span class="text-xl">{{ item.emoji }}</span>
                  </div>
                </div>
                <p class="mb-3" :class="item.highlight ? 'text-blue-100' : 'text-gray-600'">{{ item.description }}</p>
                <div class="flex justify-end">
                  <span :class="`px-3 py-1 ${item.tagColor} rounded-full text-sm`">{{ item.tag }}</span>
                </div>
              </div>
            </div>

            <!-- Central Dot -->
            <div
              :class="`relative z-10 w-6 h-6 ${item.dotColor} rounded-full border-4 border-white shadow-lg ${item.highlight ? 'w-8 h-8' : ''}`">
              <div v-if="item.highlight" class="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div v-if="index % 2 !== 0" class="flex-1 pl-8">
              <div
                :class="`${item.highlight ? 'bg-gradient-to-br from-teal-500 to-blue-600 text-white' : 'bg-white text-gray-900'} p-8 rounded-2xl shadow-xl border border-gray-100 relative`">
                <div
                  class="absolute -left-4 top-8 w-8 h-8 bg-white transform rotate-45 border-l border-t border-gray-100"
                  v-if="!item.highlight"></div>
                <div
                  class="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 transform rotate-45"
                  v-else></div>
                <div class="flex items-center mb-4">
                  <div :class="`w-12 h-12 ${item.iconColor} rounded-full flex items-center justify-center mr-4`">
                    <span class="text-xl">{{ item.emoji }}</span>
                  </div>
                  <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                </div>
                <p class="mb-3" :class="item.highlight ? 'text-blue-100' : 'text-gray-600'">{{ item.description }}</p>
                <span :class="`px-3 py-1 ${item.tagColor} rounded-full text-sm`">{{ item.tag }}</span>
              </div>
            </div>

            <div v-if="index % 2 === 0" class="flex-1 pl-8"></div>
          </div>
        </div>
      </div>

      <!-- Journey Stats -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
        <div v-for="(stat, index) in journeyStats" :key="index"
          class="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
          <div :class="`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`">
            <span class="text-2xl">{{ stat.emoji }}</span>
          </div>
          <div class="text-3xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>