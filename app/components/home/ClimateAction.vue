<script setup>

const titel = ""

const climateChangeCard = [
    {
        titel: "Rising Temperatures",
        url: "#",
        icon: "🌡️",
        description: "Global temperatures continue to rise, affecting weather patterns worldwide",
    },
    {
        titel: "Melting Ice",
        url: "#",
        icon: "🏔️",
        description: "Glaciers and polar ice caps are disappearing at unprecedented rates.",
    },
    {
        titel: "Sea Level Rise",
        url: "#",
        icon: "🌊",
        description: "Coastal communities face increasing threats from rising ocean levels.",
    }
]

const tags = ["SustainableTravel", "ClimateAction", "WalkForEarth", "ClimateAwareness"]
</script>

<template>
    <section id="impact" class="py-20 gradient-bg text-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Why Climate Action Matters
                </h2>
                <p class="text-xl opacity-90 max-w-3xl mx-auto">
                    Climate change affects every corner of our planet. This journey
                    connects stories, communities, and solutions from across continents.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <NuxtLink :to="card.url" v-for="(card, index) in climateChangeCard" :key="index"
                    class="glass-effect p-8 rounded-3xl text-center transform hover:scale-105 transition-all" data-aos="zoom-out">
                    <div class="text-5xl mb-4">{{ card.icon }}</div>
                    <h3 class="text-2xl font-bold mb-4">{{ card.titel }}</h3>
                    <p class="opacity-90">
                        {{ card.description }}
                    </p>
                </NuxtLink>
            </div>

            <div class="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center">
                <h3 class="text-3xl font-bold mb-6">
                    Together, We Can Make a Difference
                </h3>
                <p class="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
                    This walking journey represents hope, determination, and the power
                    of individual action to inspire global change. Every step taken is a
                    step toward a sustainable future.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <span v-for="(tag, index) in tags" :key="index" class="bg-white/20 px-6 py-3 rounded-full">#{{ tag
                        }}</span>
                </div>
            </div>
        </div>
    </section>
</template>