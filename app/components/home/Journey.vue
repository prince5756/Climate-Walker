<script setup>
const cardContent = [
    {
        title: "About Me",
        classes: "from-climate-green/10 to-climate-blue/10 border-climate-green",
        content: `I am Jaydip from Bhavnagar, Gujarat, an adventurer and nature
                lover. I worked as a trekking instructor with Invincible NGO and
                explored India on foot for 182 days, which gave me a deeper
                purpose in life.`},
    {
        title: "My Work",
        classes: "from-climate-blue/10 to-purple-500/10 border-climate-blue",
        content: `I became a certified kayaking instructor and founded Gujarat’s
                first kayaking organization, where over 15,000 people trained. I
                am also a certified lifeguard and power paraglider, combining
                adventure with safety and skill.`
    },
    {
        title: "Global Recognition",
        classes: "from-purple-500/10 to-pink-500/10 border-purple-500",
        content: `My passion for travel and eco-tourism led me to study in Europe,
                and in 2025 I was invited to Greece for an international youth
                festival to inspire students and youth.`
    },
]
</script>

<template>
    <!-- Journey Section -->
    <section id="journey" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    The Epic Journey
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    From the Mediterranean shores of Malta to the diverse landscapes of
                    India, every step tells a story of climate resilience and hope.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <img src="/images/my_journey.jpg" width="400px" alt="Mountain hiking journey" />
                </div>

                <div class="space-y-8">
                    <div v-for="(item, index) in cardContent" :key="index"
                        class="bg-gradient-to-r p-8 rounded-2xl border-l-4" :class="item.classes">
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ item.title }}</h3>
                        <p class="text-gray-700 leading-relaxed">
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>