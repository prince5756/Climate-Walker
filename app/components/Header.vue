<script setup></script>

<template>
  <nav class="w-full z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto text-white">
      <div class="flex justify-between items-center h-16">
        <div class="flex ml-12 md:ml-0 items-center">
          <img height="50" width="50" src="/images/climate-walker-logo.png" alt="climate-walker" />
          <span class="ml-3 text-xl font-bold">Climate Walker</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="hover:text-climate-green transition-colors">Home</a>
          <a href="/journey" class="hover:text-climate-green transition-colors">Journey</a>
          <a href="/about" class="hover:text-climate-green transition-colors">About</a>
          <a href="/gallery" class="hover:text-climate-green transition-colors">Gallery</a>
          <a href="/contact" class="hover:text-climate-green transition-colors">Contact</a>
          <a href="#" class="hover:text-climate-green transition-colors">Live Map</a>
          <button
            class="bg-climate-green hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors transform hover:scale-105 shadow-lg">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
