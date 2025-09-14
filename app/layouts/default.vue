<script setup>
</script>

<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <Footer />

    <!-- Floating Donate Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <button
        class="bg-climate-green hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl animate-pulse-slow transform hover:scale-110 transition-all flex items-center gap-2">
        <span class="font-semibold">Donate</span>
      </button>
    </div>
  </div>
</template>
