<script setup>

const titles = ref([
  { text: 'Adventure Guide', color: 'bg-teal-500/90' },
  { text: 'Trekking Instructor', color: 'bg-blue-500/90' },
  { text: 'Nature Conservationist', color: 'bg-emerald-500/90' }
])

</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with parallax effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-teal-900 via-blue-900 to-emerald-900">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg')]" width="60" height="60" viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg" %3E%3Cg fill-rule="evenodd" fill="%23ffffff" fill-opacity="0.03" %3E%3Ccircle
        cx="30" cy="30"></div>
    </div>

    <!-- Floating elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-teal-400/20 rounded-full blur-xl animate-float"></div>
    <div class="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float-delayed"></div>
    <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-float"></div>

    <div class="relative z-10 text-center px-4 max-w-6xl mx-auto">
      <!-- Profile Image with glow effect -->
      <div class="relative inline-block mb-8" data-aos="zoom-in">
        <div class="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-blue-500 p-1 shadow-2xl">
          <div class="w-full h-full rounded-full bg-white flex items-center justify-center">
            <div
              class="w-36 h-36 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">
              J
            </div>
          </div>
        </div>
        <div
          class="absolute -top-2 -right-2 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      <!-- Name and Title -->
      <h1 class="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="200">
        JAYDIP
      </h1>

      <div class="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="400">
        <span v-for="(title, index) in titles" :key="index"
          :class="`px-6 py-2 ${title.color} text-white rounded-full font-semibold backdrop-blur-sm`">
          {{ title.text }}
        </span>
      </div>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up"
        data-aos-delay="600">
        From a small village in Bhavnagar, Gujarat to inspiring thousands across India and Europe.
        A visionary who believes in connecting with nature and empowering others through adventure.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
        <button
          class="px-8 py-4 bg-white text-teal-900 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
          Discover My Journey
        </button>
        <button
          class="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-teal-900 transform hover:scale-105 transition-all duration-300">
          View Achievements
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up"
      data-aos-delay="1000">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
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
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}
</style>