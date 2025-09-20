<!-- components/JourneyChapters.vue -->
<script setup>
// Chapters section for the Journey page
const chapters = [
  {
    number: 1,
    title: "Mediterranean Islands",
    description: "Starting in Malta's ancient harbors, walking through Italy's diverse landscapes to Vatican City's spiritual heart.",
    days: "60 Days",
    nations: "4 Nations",
    details: "Malta, Italy, Vatican, San Marino",
    gradient: "chapter-gradient-1",
    nationSubtext: "Island & Peninsula Culture",
  },
  {
    number: 2,
    title: "Balkan Crossroads",
    description: "Through Slovenia's Alps to Croatia's coast, across Bosnia's mountains and Serbia's plains.",
    days: "63 Days",
    nations: "7 Nations",
    details: "Slovenia to Macedonia",
    gradient: "chapter-gradient-2",
    nationSubtext: "Mountain & Valley Paths",
  },
  {
    number: 3,
    title: "Eastern Passage",
    description: "Bulgaria's rose valleys to Greece's ancient paths, crossing into Turkey's gateway between continents.",
    days: "96 Days",
    nations: "3 Nations",
    details: "Bulgaria, Greece, Turkey",
    gradient: "chapter-gradient-3",
    nationSubtext: "East meets West",
  },
  {
    number: 4,
    title: "Caucasus Heights",
    description: "Georgia's wine country to Armenia's ancient monasteries, crossing some of Earth's highest mountain passes.",
    days: "51 Days",
    nations: "2 Nations",
    details: "Georgia & Armenia",
    gradient: "chapter-gradient-4",
    nationSubtext: "Ancient Civilizations",
  },
  {
    number: 5,
    title: "Persian Journey",
    description: "Iran's vast deserts and ancient cities, experiencing Persian hospitality and climate adaptation.",
    days: "117 Days",
    nations: "1 Nation",
    details: "Longest Single Country",
    gradient: "chapter-gradient-5",
    nationSubtext: "Desert to Mountains",
  },
  {
    number: 6,
    title: "Himalayan Finale",
    description: "Pakistan's mighty peaks to India's diverse landscapes, completing the epic transcontinental journey.",
    days: "102 Days",
    nations: "2 Nations",
    details: "Pakistan & India",
    gradient: "chapter-gradient-6",
    nationSubtext: "Journey\'s End",
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-gray-800 mb-6">Journey Chapters</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Six distinct phases, each with unique challenges and discoveries
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <div v-for="(chapter, index) in chapters" :key="index"
          :class="['p-8 rounded-3xl text-white shadow-2xl', chapter.gradient]">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
              {{ chapter.number }}
            </div>
            <h3 class="text-3xl font-bold">{{ chapter.title }}</h3>
          </div>
          <p class="text-xl mb-6 opacity-90">
            {{ chapter.description }}
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/20 backdrop-blur p-4 rounded-xl">
              <div class="text-2xl font-bold">{{ chapter.days }}</div>
              <div class="text-sm opacity-90">{{ chapter.details }}</div>
            </div>
            <div class="bg-white/20 backdrop-blur p-4 rounded-xl">
              <div class="text-2xl font-bold">{{ chapter.nations }}</div>
              <div class="text-sm opacity-90">{{ chapter.nationSubtext }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>