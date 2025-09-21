<script setup>

const achievements = ref([
  {
    title: 'Diploma in Tourism',
    description: 'Pursued a comprehensive diploma in hospitality, tour, and travel management from a well-known institute in Surat, Gujarat, India.',
    tag: 'Education',
    gradient: 'from-teal-50 to-blue-50',
    border: 'border-teal-100',
    iconBg: 'bg-teal-500',
    tagBg: 'bg-teal-200',
    tagText: 'text-teal-800',
    icon: '<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/><path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"/>',
  },
  {
    title: 'Certified Trekking Instructor',
    description: 'Became a certified trekking instructor with Invincible NGO, India\'s largest trekking organization. Guided thousands of participants through their dream treks.',
    tag: 'Trekking',
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-500',
    tagBg: 'bg-blue-200',
    tagText: 'text-blue-800',
    icon: '<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>',
    stats: [
      { value: '1000+', label: 'Participants Guided', valueColor: 'text-blue-600' }
    ],
    statsLayout: 'single'
  },
  {
    title: 'First Solo Traveler',
    description: 'First solo traveler from Gujarat who traveled all over India by walking and hitchhiking for 182 days. Featured on TV channels, magazines, and social media.',
    tag: 'Record',
    gradient: 'from-emerald-50 to-green-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-500',
    tagBg: 'bg-emerald-200',
    tagText: 'text-emerald-800',
    icon: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    stats: [
      { value: '182', label: 'Days Journey', valueColor: 'text-emerald-600' },
      { value: '28+', label: 'States Covered', valueColor: 'text-emerald-600' }
    ],
    statsLayout: 'grid'
  },
  {
    title: 'Certified Kayaking Instructor',
    description: 'Passed India\'s toughest institute for watersports "NIWS" (National Institute of Watersports) exam in 2022. Founded Gujarat\'s first certified kayaking organization.',
    tag: 'Water Sports',
    gradient: 'from-cyan-50 to-blue-50',
    border: 'border-cyan-100',
    iconBg: 'bg-cyan-500',
    tagBg: 'bg-cyan-200',
    tagText: 'text-cyan-800',
    icon: '<path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6z"/><path d="M8 8a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H9z"/>',
    stats: [
      { value: '15,000+', label: 'People Trained in Kayaking', valueColor: 'text-cyan-600' }
    ],
    statsLayout: 'single'
  },
  {
    title: 'Lifeguard Certification',
    description: 'Completed lifesaving techniques course and became a lifeguard. Learned rescue, CPR, first aid, and many other essential life-saving skills.',
    tag: 'Life Skills',
    gradient: 'from-red-50 to-pink-50',
    border: 'border-red-100',
    iconBg: 'bg-red-500',
    tagBg: '极好的-red-200',
    tagText: 'text-red-800',
    icon: '<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>',
    indicator: true,
    indicatorColor: 'bg-red-500',
    indicatorText: 'Emergency Response Expert'
  },
  {
    title: 'Certified Power Paraglider',
    description: 'Successfully completed basic and advanced courses in power paragliding from NIMAS in 2023. Soaring through skies with certified expertise.',
    tag: 'Adventure',
    gradient: 'from-purple-50 to-indigo-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-500',
    tagBg: 'bg-purple-200',
    tagText: 'text-purple-800',
    icon: ' <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>',
    indicator: true,
    indicatorColor: 'bg-purple-500',
    indicatorText: 'Sky Adventure Specialist'
  },
  {
    title: 'Malta Hospitality Diploma',
    description: 'Cleared the exam and interview of Malta\'s reputed college to study for a diploma in hospitality in Europe. International education achievement.',
    tag: 'International',
    gradient: 'from-orange-50 to-red-50',
    border: 'border-orange-100',
    iconBg: 'bg-orange-500',
    tagBg: 'bg-orange-200',
    tagText: 'text-orange-800',
    icon: ' <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>',
    indicator: true,
    indicatorColor: 'bg-orange-500',
    indicatorText: 'European Education'
  },
  {
    title: 'Greece Youth Festival',
    description: 'Selected by \'Go Alive\' organization for the youth festival in Greece to inspire Greek students and youth along with 25 other team members.',
    tag: 'Youth Impact',
    gradient: 'from-green-50 to-emerald-50',
    border: 'border-green-100',
    iconBg: 'bg-green-500',
    tagBg: 'bg-green-200',
    tagText: 'text-green-800',
    icon: ' <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>',
    stats: [
      { value: '1000+', label: 'Youth Inspired in Greece', valueColor: 'text-green-600' }
    ],
    statsLayout: 'single'
  }
])

</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
          Achievements
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Milestones of
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            Excellence
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          From certifications to creating organizations, each achievement represents a step towards
          inspiring and empowering others through adventure and nature conservation.
        </p>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(achievement, index) in achievements" :key="index" class="group" :data-aos="'fade-up'"
          :data-aos-delay="(index + 1) * 100">
          <div
            :class="`bg-gradient-to-br h-[350px] ${achievement.gradient} rounded-2xl p-8 border ${achievement.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`">
            <div class="flex items-center justify-between mb-6">
              <div
                :class="`w-16 h-16 ${achievement.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" v-html="achievement.icon"></svg>
              </div>
              <span :class="`px-3 py-1 ${achievement.tagBg} ${achievement.tagText} rounded-full text-sm font-medium`">{{
                achievement.tag }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ achievement.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ achievement.description }}</p>

            <!-- Stats if available -->
            <div v-if="achievement.stats" class="mt-4"
              :class="achievement.statsLayout === 'grid' ? 'grid grid-cols-2 gap-4' : 'flex items-center'">
              <div v-for="(stat, statIndex) in achievement.stats" :key="statIndex"
                :class="statIndex > 0 ? achievement.statsLayout === 'grid' ? '' : 'ml-4 pl-4 border-l border-gray-200' : ''">
                <div :class="`${stat.valueColor} font-bold`">{{ stat.value }}</div>
                <div class="text-xs text-gray-500">{{ stat.label }}</div>
              </div>
            </div>

            <!-- Simple indicator if available -->
            <div v-if="achievement.indicator" class="mt-4 flex items-center">
              <div :class="`w-3 h-3 ${achievement.indicatorColor} rounded-full mr-2`"></div>
              <span class="text-sm text-gray-600">{{ achievement.indicatorText }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="900">
        <div class="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Ready to Start Your Adventure?</h3>
          <p class="text-blue-100 mb-6">Join thousands who have transformed their lives through trekking, kayaking, and
            nature connection.</p>
          <button
            class="px-8 py-3 bg-white text-teal-600 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  </section>
</template>