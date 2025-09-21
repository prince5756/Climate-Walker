<!-- components/JourneyHero.vue -->
<script setup>
// Hero section for the Journey page
const stats = [
  {
    value: "617",
    label: "Total Days",
    color: "text-climate-green",
    hoverColor: "hover:shadow-climate-green"
  },
  {
    value: "18",
    label: "Countries",
    color: "text-climate-blue",
    hoverColor: "hover:shadow-climate-blue"
  },
  {
    value: "6",
    label: "Chapters",
    color: "text-yellow-500",
    hoverColor: "hover:shadow-yellow-500"
  },
  {
    value: "∞",
    label: "Stories",
    color: "text-red-500",
    hoverColor: "hover:shadow-red-500"
  }
]
</script>

<template>
  <section class="hero-journey min-h-screen flex items-center justify-center relative">
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
    <div class="hero-content text-center text-white relative z-10 max-w-6xl mx-auto px-6" data-aos="fade-up">
      <div>
        <h1 class="text-6xl md:text-8xl font-black mb-8">
          The Epic Route
        </h1>
        <p class="text-2xl font-semibold md:text-3xl mb-12 font-light max-w-4xl mx-auto leading-relaxed">
          617 Days. 18 Countries. One Planet. One Mission.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div v-for="(stat, index) in stats" :key="index" class="glass-card p-6 rounded-2xl transition duration-500 hover:shadow-md hover:scale-105" :class="stat.hoverColor">
            <div class="text-3xl font-bold" :class="stat.color">{{ stat.value }}</div>
            <div class="text-sm opacity-90 font-bold font-sans">{{ stat.label }}</div>
          </div>
        </div>
        <button class="btn btn-lg bg-red-600 hover:bg-red-700 hover:shadow-lg hover:scale-110 text-white border-none mr-4 transition-all delay-150 duration-300">
          Follow Live
        </button>
        <button class="btn btn-lg btn-outline text-white transition-all delay-150 duration-300 hover:border-blue-500 hover:text-blue-500 bg-transparent">
          View Timeline
        </button>
      </div>
    </div>
  </section>
</template>