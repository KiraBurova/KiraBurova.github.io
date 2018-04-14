<template>
   <div>
      <app-header></app-header>
      <app-about></app-about>
      <app-carousel></app-carousel>
      <app-help></app-help>
    </div>
</template>

<script>
import Header from './Header.vue'
import About from './About.vue'
import Carousel from './Carousel.vue'
import Help from './Help.vue'

export default {
  name: 'mane',
  components: {
    'app-header': Header,
    'app-about': About,
    'app-carousel': Carousel,
    'app-help': Help
  }
}
</script>

<style scoped>
</style>
