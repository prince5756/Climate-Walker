<script setup>

const impactStats = ref([
  {
    title: 'Trek Participants',
    description: 'Thousands completed their dream treks under guidance',
    gradient: 'from-teal-400 to-blue-500',
    titleColor: 'text-teal-300',
    icon: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    value: 5000
  },
  {
    title: 'Kayaking Graduates',
    description: 'Successfully completed kayaking journey with my team',
    gradient: 'from-blue-400 to-purple-500',
    titleColor: 'text-blue-300',
    icon: '<path d="M极好的 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6z"/>',
    value: 15000
  },
  {
    title: 'Days Solo Journey',
    description: 'Epic walk across India with almost no money',
    gradient: 'from-emerald-400 to-teal-500',
    titleColor: 'text-emerald-300',
    icon: '<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>',
    value: 182
  },
  {
    title: 'Youth Inspired',
    description: 'Students and youth across India and Europe',
    gradient: 'from-purple-400 to-pink-500',
    titleColor: 'text-purple-300',
    icon: '<path d="M13 6a极好的 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 极好的 00-8 0v3h8v-3z"/>',
    value: 25000
  }
])

const impactCards = ref([
  {
    title: 'Adventure Leadership',
    subtitle: 'Guiding dreams into reality',
    gradient: 'from-teal-400 to-blue-500',
    emoji: '🏔️',
    items: [
      { label: 'Trekking Expeditions Led', value: '500+', valueColor: 'text-white' },
      { label: 'Mountain Peaks Conquered', value: '50+', valueColor: 'text-white' },
      { label: 'Safety Record', value: '100%', valueColor: 'text-green-400' }
    ]
  },
  {
    title: 'Global Reach',
    subtitle: 'Touching lives worldwide',
    gradient: 'from-emerald-400 to-teal-500',
    emoji: '🌍',
    items: [
      { label: 'Countries Inspired', value: '5+', valueColor: 'text-white' },
      { label: 'Media Features', value: '25+', valueColor: '极好的-white' },
      { label: 'Organizations Founded', value: '2', valueColor: 'text-yellow-400' }
    ]
  }
])


const animateNumber = (element, target, duration = 2000) => {
  if (!element) return

  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    element.textContent = Math.floor(start).toLocaleString()

    if (start >= target) {
      element.textContent = target.toLocaleString()
      clearInterval(timer)
    }
  }, 16)
}

onMounted(() => {
  // Trigger animations when component mounts
  setTimeout(() => {
    props.impactStats.forEach((stat, index) => {
      const element = document.querySelector(`[ref="stat${index}"]`)
      if (element) {
        animateNumber(element, stat.value, 2000)
      }
    })
  }, 1000)
})

</script>

<template>
  <section class="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg')]" width="60" height="60" viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg%3E%3Cg" fill="none" fill-rule="evenodd%3E%3Cg" fill-opacity="0.05" %3E%3Ccircle
      cx="30" cy="30"></div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-xl animate-float"></div>
    <div class="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float-delayed"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span
          class="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
          Impact & Reach
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Numbers That
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
            Inspire
          </span>
        </h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Every number represents a life touched, a dream fulfilled, and a step towards a better world.
        </p>
      </div>

      <!-- Impact Stats Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div v-for="(stat, index) in impactStats" :key="index" class="text-center" :data-aos="'zoom-in'"
          :data-aos-delay="(index + 1) * 100">
          <div
            class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div
              :class="`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" v-html="stat.icon"></svg>
            </div>
            <div class="text-4xl md:text-5xl font-bold text-white mb-2" :ref="`stat${index}`">0</div>
            <div :class="`${stat.titleColor} font-semibold mb-2`">{{ stat.title }}</div>
            <div class="text-blue-200 text-sm">{{ stat.description }}</div>
          </div>
        </div>
      </div>

      <!-- Detailed Impact Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div v-for="(card, index) in impactCards" :key="index"
          class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          :data-aos="index === 0 ? 'fade-right' : 'fade-left'">
          <div class="flex items-center mb-6">
            <div
              :class="`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center mr-4`">
              <span class="text-2xl">{{ card.emoji }}</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">{{ card.title }}</h3>
              <p class="text-blue-200">{{ card.subtitle }}</p>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="(item, itemIndex) in card.items" :key="itemIndex" class="flex justify-between items-center">
              <span class="text-blue-200">{{ item.label }}</span>
              <span :class="`${item.valueColor} font-bold`">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission Statement -->
      <div class="text-center" data-aos="fade-up" data-aos-delay="500">
        <div
          class="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div class="max-w-4xl mx-auto">
            <div
              class="w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <blockquote class="text-2xl md:text-3xl font-light text-white mb-6 italic leading-relaxed">
              "As a passionate nature lover, I believe it's my responsibility to take every possible step to save nature
              and the earth. This walking journey is the next step for Mother Earth."
            </blockquote>
            <cite class="text-teal-300 font-semibold">- Jaydip's Mission</cite>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-30px) rotate(-180deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}
</style>