<template>
   <div>
      <app-header></app-header>
      <app-about></app-about>
      <app-carousel></app-carousel>
    </div>
</template>

<script>
import Header from './Header.vue'
import About from './About.vue'
import Carousel from './Carousel.vue'

export default {
  name: 'mane',
  components: {
    'app-header': Header,
    'app-about': About,
    'app-carousel': Carousel
  }
}
</script>

<style scoped>
</style>
