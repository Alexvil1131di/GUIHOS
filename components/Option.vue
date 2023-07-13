<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow h-52">
        <div class="p-5 h-full flex flex-col justify-between">
            <div>
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {{ info.title }}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">
                    {{ info.details }}
                </p>
            </div>
            <div>
                <nuxt-link :to="info.link1"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Design
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </nuxt-link>
                <nuxt-link :to="info.link2"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Directrices
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['info']
}
</script>