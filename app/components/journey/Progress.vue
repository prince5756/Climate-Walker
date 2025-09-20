<!-- components/JourneyProgress.vue -->
<script setup>
// Progress section for the Journey page
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-gray-800 mb-6">Journey Progress</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Track my real-time progress across continents
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative bg-gradient-to-br from-blue-50 to-green-50 p-12 rounded-3xl shadow-2xl">
          <div class="flex justify-center mb-8">
            <div class="relative w-40 h-40">
              <svg class="progress-ring w-full h-full" viewBox="0 0 144 144">
                <circle cx="72" cy="72" r="60" stroke="#e5e7eb" stroke-width="8" fill="none" />
                <circle cx="72" cy="72" r="60" stroke="#10b981" stroke-width="8" fill="none" stroke-dasharray="377"
                  stroke-dashoffset="377" class="progress-circle" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-3xl font-bold text-climate-green">0%</div>
                  <div class="text-sm text-gray-600">Complete</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <div class="text-2xl font-bold text-blue-600 mb-2">Not Started</div>
              <div class="text-gray-600">Current Status</div>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <div class="text-2xl font-bold text-green-600 mb-2">0 / 617</div>
              <div class="text-gray-600">Days Completed</div>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <div class="text-2xl font-bold text-red-600 mb-2">Malta</div>
              <div class="text-gray-600">Starting Point</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>