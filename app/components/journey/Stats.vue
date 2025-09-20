<!-- components/JourneyStats.vue -->
<script setup>
// Statistics section for the Journey page
const stats = [
  { value: "117", label: "Longest Stay", description: "Days in Iran" },
  { value: "78", label: "Mountain Trek", description: "Days in Pakistan" },
  { value: "75", label: "Cultural Bridge", description: "Days in Turkey" },
  { value: "24", label: "Final Destination", description: "Days in India" }
]
</script>

<template>
  <section class="py-20 chapter-gradient-1 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-6">Journey by Numbers</h2>
        <p class="text-xl opacity-90 max-w-3xl mx-auto">
          Breaking down the epic adventure into digestible insights
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, index) in stats" :key="index" class="bg-white/10 backdrop-blur p-8 rounded-3xl text-center">
          <div class="text-4xl font-bold mb-4">{{ stat.value }}</div>
          <div class="text-xl mb-2">{{ stat.label }}</div>
          <div class="text-sm opacity-80">{{ stat.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>