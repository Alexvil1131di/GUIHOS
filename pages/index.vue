<template>
  <div>
    <Slider />
    <div class="container mx-auto py-28">
      <h2 class="text-center text-6xl mb-6">Conocenos</h2>
      <p class="mb-10 md:w-9/12 mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, recusandae? Vero velit eos accusantium a ab
        minus dolores, nemo voluptate necessitatibus excepturi optio, cupiditate repellendus quos nobis, dignissimos
        labore quas.
      </p>
      <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Details v-for="item in details" :info="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider';
import Details from '@/components/Details';

export default {
  component: {
    Slider,
    Details
  },
  data() {
    return {
      details: [
        {
          title: "Quienes somos?",
          information: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, recusandae? Vero velit eos accusantium a ab minus dolores, nemo voluptate necessitatibus excepturi optio, cupiditate repellendus quos nobis, dignissimos labore quas."
        },

        {
          title: "Quienes somos?",
          information: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, recusandae? Vero velit eos accusantium a ab minus dolores, nemo voluptate necessitatibus excepturi optio, cupiditate repellendus quos nobis, dignissimos labore quas."
        },
        {
          title: "Quienes somos?",
          information: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, recusandae? Vero velit eos accusantium a ab minus dolores, nemo voluptate necessitatibus excepturi optio, cupiditate repellendus quos nobis, dignissimos labore quas."
        }
      ]
    }
  },
}
</script>

<style>
* {
  font-family: 'Source Code Pro', monospace;
}
</style>