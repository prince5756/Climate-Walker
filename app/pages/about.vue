<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-emerald-50">

    <AboutHeroSection />
    <AboutStorySection />
    <AboutJourneyTimeline />
    <AboutAchievementsGrid />
    <AboutImpactNumbers />
    <AboutMediaCoverage />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'

// Meta tags
useHead({
  title: 'About Jaydip - Adventure Guide & Nature Enthusiast',
  meta: [
    {
      name: 'description',
      content: 'Learn about Jaydip\'s incredible journey from a small village in Gujarat to becoming India\'s renowned trekking instructor, kayaking expert, and nature conservation advocate.'
    }
  ]
})

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  })
})
</script>