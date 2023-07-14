
<template>
    <div class="relative w-full h-fit">
        <div class="relative h-56 overflow-hidden md:h-[600px]">
            <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
                <nuxt-link to="/conocenos#queEsGuihos"
                    class="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="@/assets/slider/logoWhite.png" class="w-full brightness-custom  object-center object-cover"
                        alt="...">
                    <p
                        class="absolute top-1/2 left-1/2 text-white text-xl font-bold transform -translate-x-1/2 -translate-y-1/2">
                        ¿Qué es GUIHOS?
                    </p>
                    <p
                        class="absolute top-1/2 left-1/2 text-white transform text-justify hidden 2xl:block -translate-x-1/2 -translate-y-[-50%]">
                        Descubre GUIHOS: La guía para el diseño de áreas hospitalarias en la República Dominicana. Obtén
                        pautas, recomendaciones y estándares actualizados que mejorarán la calidad y eficacia de tus
                        proyectos
                    </p>
                </nuxt-link>
            </div>
            <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
                <nuxt-link to="/conocenos"
                    class="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="@/assets/slider/ramonGay.jpg" class="w-full brightness-custom  object-center object-cover"
                        alt="...">
                    <p
                        class="absolute top-1/2 left-1/2 text-white text-xl font-bold transform -translate-x-1/2 -translate-y-1/2">
                        Conoce al creador de GUIHOS
                    </p>
                    <p
                        class="absolute top-1/2 left-1/2 text-white transform text-justify hidden 2xl:block -translate-x-1/2 -translate-y-[-50%]">
                        Conoce más sobre el autor detrás de GUIHOS: Ramón Antonio Crousset Núñez. Ramón Antonio es un
                        estudiante de término de Ingeniería Biomédica en el Instituto Tecnológico de Santo Domingo (INTEC) y
                        apasionado por el campo de la Ingeniería Clínica. Descubre su trayectoria académica, su dedicación a
                        la mejora continua y su compromiso en contribuir al desarrollo de espacios hospitalarios eficientes
                        y seguros.
                    </p>
                </nuxt-link>
            </div>
            <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
                <nuxt-link to="/catalog"
                    class="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="@/assets/slider/plano.jpg" class="w-full brightness-custom  object-center object-cover"
                        alt="...">
                    <p
                        class="absolute top-1/2 left-1/2 text-white text-xl font-bold transform -translate-x-1/2 -translate-y-1/2">
                        Explora nuestro catálogo
                    </p>
                    <p
                        class="absolute top-1/2 left-1/2 text-white transform text-justify hidden 2xl:block -translate-x-1/2 -translate-y-[-50%]">
                        Descubre las dos áreas hospitalarias que hemos desarrollado en nuestro proyecto. Nuestro catálogo
                        presenta diseños especializados y detallados para cada una de estas áreas, enfocándose en ofrecer
                        entornos funcionales, confortables y eficientes.
                    </p>
                </nuxt-link>
            </div>
            <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
                <nuxt-link to="/directrices"
                    class="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src="@/assets/slider/coroDeLoco.jpg" class="w-full brightness-custom  object-center object-cover"
                        alt="...">
                    <p
                        class="absolute top-1/2 left-1/2 text-white text-xl font-bold transform -translate-x-1/2 -translate-y-1/2">
                        Directrices
                    </p>
                    <p
                        class="absolute top-1/2 left-1/2 text-white transform text-justify hidden 2xl:block -translate-x-1/2 -translate-y-[-50%]">
                        Descubre nuestras directrices, un marco sólido y ampliamente utilizado por arquitectos y diseñadores
                        de todo el mundo, para la creación de hospitales. Estas pautas proporcionan un enfoque estructurado
                        y detallado para el diseño de instalaciones hospitalarias, teniendo en cuenta la funcionalidad, la
                        seguridad y el bienestar de los pacientes y el personal médico.
                    </p>
                </nuxt-link>
            </div>
        </div>


        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full"></button>
            <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full"></button>
            <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full"></button>
            <button id="carousel-indicator-4" type="button" class="w-3 h-3 rounded-full"></button>
        </div>
        <button id="data-carousel-prev" type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button id="data-carousel-next" type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div>
</template>

<script>
import { Carousel } from 'flowbite';
export default {
    mounted() {
        const items = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4')
            },
        ];

        const options = {
            defaultPosition: 1,
            interval: 4000,

            indicators: {
                activeClasses: 'bg-white dark:bg-gray-800',
                inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                items: [
                    {
                        position: 0,
                        el: document.getElementById('carousel-indicator-1')
                    },
                    {
                        position: 1,
                        el: document.getElementById('carousel-indicator-2')
                    },
                    {
                        position: 2,
                        el: document.getElementById('carousel-indicator-3')
                    },
                    {
                        position: 3,
                        el: document.getElementById('carousel-indicator-4')
                    },
                ]
            },

            // callback functions
            onNext: () => {
                console.log('next slider item is shown');
            },
            onPrev: () => {
                console.log('previous slider item is shown');
            },
            onChange: () => {
                console.log('new slider item has been shown');
            }
        };

        const carousel = new Carousel(items, options);
        const prevButton = document.getElementById('data-carousel-prev');
        const nextButton = document.getElementById('data-carousel-next');

        prevButton.addEventListener('click', () => {
            carousel.prev();
        });

        nextButton.addEventListener('click', () => {
            carousel.next();
        });

        const autoMove = () => {
            carousel.next();
        };

        setInterval(autoMove, options.interval);

    },
}
</script>

<style scoped>
.brightness-custom {
    filter: brightness(35%);
}
</style>