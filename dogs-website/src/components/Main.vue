<template>
   <div>
      <app-header></app-header>
      <app-about></app-about>
    </div>
</template>

<script>
import Header from './Header.vue'
import About from './About.vue'

export default {
  name: 'mane',
  components: {
    'app-header': Header,
    'app-about': About
  }
}
</script>

<style scoped>
</style>
