<template>
    <div class="flex flex-col 2xl:flex-row w-full p-8">
        <div class="flex justify-between h-fit 2xl:max-w-[400px] w-full 2xl:flex-col overflow-scroll gap-2 mr-4 mb-4">
            <h2>{{ selectedName }}</h2>
            <button v-for="button in buttons" :key="button.id" @click="changeImage(button.image, button.name)"
                class="flex w-full gap-4 max-w-[300px] items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <svg class="w-4 h-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.59 7.58L7 6.17l5 5-5 5-1.41-1.41L9.17 12 5.59 8.41zM16 6h2v12h-2z" />
                </svg>
                {{ button.name }}
            </button>
            <br><br><br>

            <h2>Descargar Planos</h2>

            <a v-for="docs in docs" :href=docs.link target="_blank"
                class="flex w-full gap-4 items-center max-w-[300px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                    <path
                        d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" />
                </svg>
                {{ docs.name }}
            </a>


        </div>


        <div class="flex w-full text-center justify-center max-w-[1500px] rounded-md">

            <div class=" flex justify-center bg-[#d7d7d7] p-11 items-center rounded w-fit overflow-hidden">
                <img :src="selectedImage" :alt="selectedImage"
                    class=" w-full max-w-[1200px] rounded-md object-cover object-center" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            buttons: [
                { id: 1, name: 'Planta Baja', image: require('@/assets/planos/plano.jpg') },
                { id: 2, name: 'Plano de Techo', image: require('@/assets/planos/techo.jpeg') },
                { id: 3, name: 'Elevacion Frontal', image: require('@/assets/planos/lat1.jpeg') },
                { id: 3, name: 'Elevacion Lateral', image: require('@/assets/planos/lat2.jpeg') },


            ],
            docs: [
                { id: 5, name: 'Leyenda', link: 'https://docs.google.com/spreadsheets/d/1AU1Z3_6LW2PMR3-ljbU3XSuNeJZBhJkF/edit?usp=sharing&ouid=105147507560821714601&rtpof=true&sd=true' },
                { id: 1, name: 'Planta Baja', link: 'https://drive.google.com/file/d/1EJQgeEPl7oTudp4mi2GDVRP9gA6UgdGa/view?usp=drive_link' },
                { id: 2, name: 'Plano de Techo', link: 'https://drive.google.com/file/d/1CqeQhEQGiKLIJcHvWGyK0p3YT23PmqYx/view?usp=drive_link' },
                { id: 3, name: 'Elevacion Frontal', link: 'https://drive.google.com/file/d/1lt5GI_NhqRse7PCEIPHhlrMQtes5mV_1/view?usp=drive_link' },
                { id: 4, name: 'Elevacion Lateral', link: 'https://drive.google.com/file/d/1AJQ_YyB0ANhSVB6FPCnleAZI_vG0AyyP/view?usp=drive_link' },


            ],
            selectedImage: require('@/assets/planos/plano.jpg'),
            selectedName: 'Planta Baja',
            pdfPath: require('@/assets/document.docx') // Ruta relativa al archivo PDF
        };
    },
    methods: {
        changeImage(image, name) {
            this.selectedImage = image;
            this.selectedName = name
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
