<template>
    <div class="flex flex-col w-full bg-white py-8 ">


        <div class="flex">
            <div class="flex flex-col mr-4">
                <button v-for="button in buttons" :key="button.id" @click="changeImage(button.image)"
                    class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    <svg class="w-4 h-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M5.59 7.58L7 6.17l5 5-5 5-1.41-1.41L9.17 12 5.59 8.41zM16 6h2v12h-2z" />
                    </svg>
                    {{ button.name }}
                </button>
            </div>
            <div class="rounded overflow-hidden">
                <img :src="selectedImage" :alt=selectedImage class="w-64 h-64 object-cover object-center" />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            buttons: [
                { id: 1, name: 'Botón 1', image: 'ruta-de-la-imagen-1.jpg' },
                { id: 2, name: 'Botón 2', image: 'ruta-de-la-imagen-2.jpg' },
                { id: 3, name: 'Botón 3', image: 'ruta-de-la-imagen-3.jpg' },
            ],
            selectedImage: 'ruta-de-la-imagen-1.jpg',
        };
    },
    methods: {
        changeImage(image) {
            this.selectedImage = image;
        },
    },
};
</script>
  
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

button:focus {
    outline: none;
}

svg {
    fill: currentColor;
}
</style>