<!-- components/JourneyRouteMap.vue -->
<script setup>
// Route map section for the Journey page
const countries = [
  { code: "M", name: "Malta", description: "Starting Island", days: "1 Day", color: "bg-blue-500", badgeClass: "bg-blue-100 text-blue-800" },
  { code: "IT", name: "Italy", description: "Boot Peninsula", days: "55 Days", color: "bg-green-500", badgeClass: "bg-green-100 text-green-800" },
  { code: "V", name: "Vatican City", description: "Smallest Nation", days: "2 Days", color: "bg-yellow-500", badgeClass: "bg-yellow-100 text-yellow-800" },
  { code: "SM", name: "San Marino", description: "Mountain Republic", days: "2 Days", color: "bg-purple-500", badgeClass: "bg-purple-100 text-purple-800" },
  { code: "SI", name: "Slovenia", description: "Alpine Beauty", days: "11 Days", color: "bg-teal-500", badgeClass: "bg-teal-100 text-teal-800" },
  { code: "HR", name: "Croatia", description: "Adriatic Coast", days: "7 Days", color: "bg-orange-500", badgeClass: "bg-orange-100 text-orange-800" },
  { code: "M", name: "Malta", description: "Starting Island", days: "1 Day", color: "bg-blue-500", badgeClass: "bg-blue-100 text-blue-800" },
  { code: "IT", name: "Italy", description: "Boot Peninsula", days: "55 Days", color: "bg-green-500", badgeClass: "bg-green-100 text-green-800" },
  { code: "V", name: "Vatican City", description: "Smallest Nation", days: "2 Days", color: "bg-yellow-500", badgeClass: "bg-yellow-100 text-yellow-800" },
  { code: "SM", name: "San Marino", description: "Mountain Republic", days: "2 Days", color: "bg-purple-500", badgeClass: "bg-purple-100 text-purple-800" },
  { code: "SI", name: "Slovenia", description: "Alpine Beauty", days: "11 Days", color: "bg-teal-500", badgeClass: "bg-teal-100 text-teal-800" },
  { code: "HR", name: "Croatia", description: "Adriatic Coast", days: "7 Days", color: "bg-orange-500", badgeClass: "bg-orange-100 text-orange-800" }
]

// Swiper integration
const containerRef = ref(null)
const swiper = useSwiper(containerRef)

// Auto-play configuration
const autoplayConfig = {
  delay: 1500, // 3 seconds between slides
  disableOnInteraction: false, // Continue autoplay after user interaction
  pauseOnMouseEnter: true, // Pause when user hovers over slider
}
</script>

<template>
  <section class="py-20 bg-white" id="livemap">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-5xl font-bold text-gray-800 mb-6">The Route</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Follow my path across three continents and 18 countries
        </p>
      </div>
      
      <div class="max-w-6xl mx-auto" data-aos="zoom-in">
        <div class="bg-blue-100 p-8 rounded-3xl shadow-2xl">
          <img src="/images/my_journey.webp" alt="Journey Route Map" class="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg">
          
          <!-- Swiper Container -->
          <ClientOnly>
            <swiper-container 
              ref="containerRef"
              :slides-per-view="2"
              :space-between="200"
              :autoplay="autoplayConfig"
              :loop="true"
              :grab-cursor="true"
              :touch-ratio="1"
              :touch-angle="25"
              :simulate-touch="true"
              :breakpoints="{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 }
              }"
              class="country-swiper"
            >
              <swiper-slide v-for="(country, index) in countries" :key="index">
                <div class="bg-white p-6 rounded-2xl text-center h-full w-[200px]">
                  <div :class="['w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold', country.color]">
                    {{ country.code }}
                  </div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{{ country.name }}</h3>
                  <p class="text-gray-600 mb-2">{{ country.description }}</p>
                  <div class="badge" :class="country.days">{{ country.days }}</div>
                </div>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Swiper styling */
:deep(.country-swiper::part(pagination)) {
  bottom: -10px;
}

:deep(.country-swiper::part(bullet)) {
  background-color: #cbd5e1;
  opacity: 1;
  width: 12px;
  height: 12px;
  margin: 0 4px;
}

:deep(.country-swiper::part(bullet-active)) {
  background-color: #10b981;
}

:deep(.country-swiper swiper-slide) {
  height: auto;
}

/* Mobile touch improvements */
:deep(.country-swiper) {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

:deep(.country-swiper swiper-slide) {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
</style>