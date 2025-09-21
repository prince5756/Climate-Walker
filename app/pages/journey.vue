<!-- pages/journey.vue -->
<script setup>
// This will be our main journey page
</script>

<template>
  <div>
    <JourneyHero />
    <JourneyProgress />
    <JourneyChapters />
    <JourneyRouteMap />
    <JourneyStats />
  </div>
</template>

<style>
.hero-journey {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), 
              url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.chapter-gradient-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.chapter-gradient-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.chapter-gradient-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.chapter-gradient-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.chapter-gradient-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.chapter-gradient-6 { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring circle {
  transition: stroke-dashoffset 0.5s ease-in-out;
}
</style>