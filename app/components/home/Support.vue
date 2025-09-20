<script setup>

const supportCard = [
    {
        titel: "Equipment & Supplies",
        icon: "🎒",
        description: "Support essential gear, camping equipment, and supplies needed for the 12,000 km journey."
    },
    {
        titel: "Documentation",
        icon: "📱",
        description: "Fund video equipment, internet connectivity, and content creation to share the journey with the world.",
    },
    {
        titel: "Climate Initiatives",
        icon: "🌱",
        description: "Contribute to local climate projects and environmental initiatives discovered along the route."
    }
]

</script>

<template>
    <section id="support" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Support the Journey
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Your support makes this epic journey possible and helps spread
                    climate awareness across continents.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-16 items-center">

                <HomePartialsDonate />

                <div class="space-y-8">
                    <div v-for="(card, index) in supportCard" :key="index" class="bg-white p-8 rounded-2xl shadow-lg">
                        <div class="flex items-center mb-4">
                            <div
                                class="w-12 h-12 bg-climate-green rounded-full flex items-center justify-center text-white text-xl mr-4">
                                {{ card.icon }}
                            </div>
                            <h4 class="text-xl font-bold text-gray-900">
                                {{ card.titel }}
                            </h4>
                        </div>
                        <p class="text-gray-600">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>