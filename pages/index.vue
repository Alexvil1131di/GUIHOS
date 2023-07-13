<template>
  <div>
    <Slider />
    <div class="container mx-auto py-12">
      <h2 class="text-center text-3xl mb-6">Conócenos</h2>
      <p class="mb-10 md:w-9/12 mx-auto text-justify">
        GUIHOS es un proyecto que se refiere a la "Guía para el Diseño de Áreas Hospitalarias" (GUIHOS es el acrónimo de
        este nombre). Es una iniciativa orientada a proporcionar una guía completa y actualizada sobre el diseño de áreas
        hospitalarias, centrándose específicamente en las necesidades y los avances en materia hospitalaria de la
        República Dominicana.
      </p>
      <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Details v-for="item in details" :key="item.title" :info="item" />
      </div>

    </div>

  </div>
</template>

<script>
import Slider from '@/components/Slider';
import Details from '@/components/Details';
import PSPDFKitContainer from '@/components/PSPDFKitContainer';

export default {
  components: {
    Slider,
    Details,
    PSPDFKitContainer
  },
  data() {
    return {
      details: [
        {
          title: "Misión",
          information: "Nuestra misión en GUIHOS es proporcionar una guía completa y actualizada de áreas hospitalarias para la República Dominicana, basada en los últimos avances en materia hospitalaria.",
          urlImage: require("@/assets/img/mision2.png") // Utiliza require() para resolver la ruta de la imagen
        },
        {
          title: "Visión",
          information: "Nuestra visión en GUIHOS es convertirnos en la principal referencia y fuente confiable de guías de áreas hospitalarias en la República Dominicana.",
          urlImage: require("@/assets/img/vision2.png") // Utiliza require() para resolver la ruta de la imagen
        },
        {
          title: "Valores",
          information: "Nuestros valores reflejan nuestro compromiso con la excelencia, la colaboración, la sostenibilidad y la calidad en el diseño de áreas hospitalarias.",
          urlImage: require("@/assets/img/valore2.png") // Utiliza require() para resolver la ruta de la imagen
        }
      ],
      pdfFile: this.pdfFile || "/document.pdf",
    }
  },
}
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 32.5px;
}
</style>
