<script setup>
</script>

<template>
    <div data-aos="fade-right">
        <div class="bg-white p-10 rounded-3xl shadow-2xl">
            <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center">
                Make a Donation
            </h3>

            <div class="grid grid-cols-2 gap-4 mb-8">
                <button
                    class="bg-climate-green hover:bg-green-600 text-white p-4 rounded-xl font-semibold transition-colors">
                    $25
                </button>
                <button
                    class="bg-climate-green hover:bg-green-600 text-white p-4 rounded-xl font-semibold transition-colors">
                    $50
                </button>
                <button
                    class="bg-climate-green hover:bg-green-600 text-white p-4 rounded-xl font-semibold transition-colors">
                    $100
                </button>
                <button
                    class="border-2 border-climate-green text-climate-green hover:bg-climate-green hover:text-white p-4 rounded-xl font-semibold transition-all">
                    Custom
                </button>
            </div>

            <button
                class="w-full bg-gradient-to-r from-climate-green to-climate-blue text-white py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all transform hover:scale-105">
                💳 Donate Now
            </button>

            <p class="text-sm text-gray-500 text-center mt-4">
                100% of donations go directly to supporting the journey and
                climate initiatives.
            </p>
        </div>
    </div>
</template>