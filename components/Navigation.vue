<template>
    <nav class="bg-white border-gray-200" style="background-color: #01bbff;">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <nuxt-link to="/" class="flex items-center">
                <img src="@/assets/img/logoNavBar.png" class=" h-[50px] mr-3" alt="GUIHOS Logo" />
            </nuxt-link>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">

                    <nuxt-link to="/" class="block py-2 px-6 rounded-md text-black bg-[#ffffff49] mb-1 "
                        aria-current="page">
                        Inicio
                    </nuxt-link>


                    <nuxt-link to="/catalog" class="block py-2 px-6 rounded-md text-black bg-[#ffffff49] mb-1  ">
                        Catálogo
                    </nuxt-link>

                    <nuxt-link to="/directrices" class="block py-2 px-6 rounded-md text-black bg-[#ffffff49] mb-1  ">
                        Directrices
                    </nuxt-link>

                    <nuxt-link to="/conocenos" class="block py-2 px-6 rounded-md text-black bg-[#ffffff49] mb-1  ">
                        Conocenos
                    </nuxt-link>

                </ul>
            </div>
        </div>
    </nav>
</template>