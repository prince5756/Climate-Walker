<script setup>
</script>

<template>
  <HomeHero />
  <HomeJourney />
  <HomeClimateAction />
  <HomeSupport />
  <HomeSocial />
</template>

<style>
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-bg {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("/images/mountain3.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>