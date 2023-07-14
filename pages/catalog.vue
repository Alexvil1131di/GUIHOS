<template>
    <div>
        <div class="container mx-auto pt-28 grid gap-5 grid-cols-1 md:grid-cols-2">
            <divc class="flex flex-col justify-center">

                <h3 class="text-3xl my-3">Catálogo</h3>
                <p class="text-justify">Sumérgete en nuestro catálogo y descubre los diseños excepcionales de nuestro
                    Quirófano de Cardiología y
                    Central de Esterilización. Estas áreas han sido meticulosamente desarrolladas para cumplir con los más
                    altos estándares de seguridad, funcionalidad y eficiencia. Nuestro Quirófano de Cardiología ofrece un
                    entorno optimizado para procedimientos cardíacos especializados, mientras que nuestra Central de
                    Esterilización garantiza la esterilización y preparación adecuada de los instrumentos quirúrgicos. </p>
            </divc>
            <div>
                <div class="aspect-video">
                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/HDYu7-x71xM" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        <div class="container my-28 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2">
            <Option v-for="item in options" :info="item" />
        </div>
    </div>
</template>

<script>
import Option from '@/components/Option';

export default {
    component: {
        Option,
    },
    data() {
        return {
            options: [
                {
                    title: "Sala de operaciones cardiotorácicas",
                    details: "Inspirado en las propuestas de la World Board of Design for Health (WBDG), nuestro Quirófano de Cardiología ofrece un entorno seguro y eficiente para realizar procedimientos cardíacos especializados. Equipado con tecnología de vanguardia y una disposición cuidadosamente planificada, garantiza la precisión y el confort necesarios para una atención cardiológica de excelencia.",
                    link1: "",
                    link2: "",
                },
                {
                    title: "Central de esterilización",
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    link1: "",
                    link2: "",
                }
            ]
        }
    },

}
</script>