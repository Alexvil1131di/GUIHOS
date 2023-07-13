<template>
    <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
            <img class="rounded-lg w-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="image description">
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <h1 class="text-3xl">{{ info.title }}</h1>
            <p>{{ info.information }}</p>
        </figcaption>
    </figure>
</template>

<script>
export default {
    props: ['info']
}
</script>