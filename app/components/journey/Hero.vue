<!-- components/JourneyHero.vue -->
<script setup>
// Hero section for the Journey page
const stats = [
  {
    value: "617",
    label: "Total Days",
    color: "text-climate-green",
  },
  {
    value: "18",
    label: "Countries",
    color: "text-climate-blue",
  },
  {
    value: "6",
    label: "Chapters",
    color: "text-yellow-500",
  },
  {
    value: "∞",
    label: "Stories",
    color: "text-red-500",
  }
]
</script>

<template>
  <section class="hero-journey min-h-screen flex items-center justify-center relative">
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
    <div class="hero-content text-center text-white relative z-10 max-w-6xl mx-auto px-6">
      <div>
        <h1 class="text-6xl md:text-8xl font-black mb-8">
          The Epic Route
        </h1>
        <p class="text-2xl md:text-3xl mb-12 font-light max-w-4xl mx-auto leading-relaxed">
          617 Days. 18 Countries. One Planet. One Mission.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div v-for="(stat, index) in stats" :key="index" class="glass-card p-6 rounded-2xl">
            <div class="text-3xl font-bold" :class="stat.color">{{ stat.value }}</div>
            <div class="text-sm opacity-90">{{ stat.label }}</div>
          </div>
        </div>
        <button class="btn btn-lg bg-red-600 hover:bg-red-700 text-white border-none mr-4">
          Follow Live
        </button>
        <button class="btn btn-lg btn-outline text-white hover:bg-white hover:text-gray-800">
          View Timeline
        </button>
      </div>
    </div>
  </section>
</template>