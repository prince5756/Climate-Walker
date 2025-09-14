<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <section id="home" class="flex flex-col hero-bg min-h-screen relative p-2">
        <div class="flex-1 grid place-content-center">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
            <div class="max-w-6xl mx-auto text-center px-6 relative z-10">
                <div class="animate-fade-in-up">
                    <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Walking for Our
                        <span class="text-climate-green animate-pulse">Planet</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Join the epic {{ appConfig.journeyStats.Kilometers }} km journey from Malta to India - one step at
                        a time, spreading climate awareness across {{ appConfig.journeyStats.Countries }} countries and
                        countless communities.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a target="_blank" :href="appConfig.owner.social.YouTube"
                            class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl">
                            Watch the Journey
                        </a>
                        <button
                            class="glass-effect text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-105">
                            Support the Mission
                        </button>
                    </div>
                </div>

                <!-- Journey Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    <div v-for="(value, key, index) in appConfig.journeyStats" :key="index" class="glass-effect p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
                        <div :class="index === Object.keys(appConfig.journeyStats).length - 1 ? 'text-climate-green' : 'text-white'" class="text-3xl font-bold mb-2">{{ value }}</div>
                        <div class="text-gray-300">{{ key }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>