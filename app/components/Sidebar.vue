<script setup lang="ts">
const appConfig = useAppConfig()

const props = defineProps({
    isClose: Boolean,
})

const emit = defineEmits(['closeSidebar'])

// whenever you want to close it again, call:
const closeSidebar = () => {
    emit('closeSidebar', true)
}
</script>

<template>
    <div :class="{ 'right-[-71%]': props.isClose, 'right-0': !props.isClose }"
        class="lg:hidden fixed top-0 z-50 w-[70%] h-screen bg-gray-900 transition-all duration-300">
        <button @click="closeSidebar" class="text-gray-400 hover:text-white transition-colors duration-200 p-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                </path>
            </svg>
        </button>

        <nav class="flex flex-col pt-2">
            <a v-for="link in appConfig.navigationLinks" :key="link.url" :href="link.url"
                class="px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 border-b border-gray-700 last:border-b-0">
                {{ link.title }}
            </a>
        </nav>

        <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
            <div class="space-y-4">
                <h3 class="text-white text-lg font-medium mb-4">Support Our Journey</h3>

                <a href="https://rzp.io/rzp/EERYYaM"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M22.5 4h-21C.67 4 0 4.67 0 5.5v13C0 19.33.67 20 1.5 20h21c.83 0 1.5-.67 1.5-1.5v-13C24 4.67 23.33 4 22.5 4zM22 18H2V6h20v12z" />
                        <path d="M6 8h12v2H6zM6 12h8v2H6z" />
                    </svg>
                    <span>Donate via Razorpay</span>
                </a>

                <a href="#"
                    class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.79A.859.859 0 0 1 5.791 2H14.05c3.33 0 5.618 1.681 6.058 4.479.45 2.883-.818 4.898-3.37 5.31.874.405 1.295 1.395.295 3.479C16.03 17.597 14.372 19 12.029 19H9.578a.859.859 0 0 0-.847.691l-.584 2.373a.641.641 0 0 1-.633.491h-.001zm.141-3.262c.027.02.03.06.006.088H6.31l.184-.742a.859.859 0 0 1 .847-.69h1.411c.474 0 .756-.242.809-.587a.405.405 0 0 0-.344-.478z" />
                    </svg>
                    <span>Donate via PayPal</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
nav {
    scrollbar-width: thin;
    scrollbar-color: #4B5563 #1F2937;
}

nav::-webkit-scrollbar {
    width: 6px;
}

nav::-webkit-scrollbar-track {
    background: #1F2937;
}

nav::-webkit-scrollbar-thumb {
    background: #4B5563;
    border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
    background: #6B7280;
}
</style>