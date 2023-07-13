<template>
    <div>
        <div class="container mx-auto pt-28 grid gap-5 grid-cols-1 md:grid-cols-2">
            <divc class="flex flex-col justify-center">
                <h1 class="text-6xl">Titulo</h1>
                <h3 class="text-3xl my-3">Subtitulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam perspiciatis ducimus maxime vitae ad
                    odit incidunt deserunt quis earum architecto, magnam, cupiditate tempora distinctio, doloremque expedita
                    quibusdam modi. Optio!</p>
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
                    title: "Option 1",
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    link1: "",
                    link2: "",
                },
                {
                    title: "Option 1",
                    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    link1: "",
                    link2: "",
                }
            ]
        }
    },

}
</script>