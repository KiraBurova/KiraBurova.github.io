<template>
  <section class="pets">
    <div class="container">
        <app-top-header></app-top-header>
        <div class="pets__main">

        </div>
    </div>
    <app-footer></app-footer>
  </section>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import Footer from '@/components/Footer'

export default {
  components: {
    'app-top-header': TopHeader,
    'app-footer': Footer
  },
  data () {
    return {
      photos: [],
      totalPhotos: 0,
      perPage: 8,
      currentPage: 1
    }
  }
}
</script>

<style>
  .pets .menu .menu__item {
    color: var(--gray);
  }
  .pets .menu .menu__item:hover {
    color: var(--black);
  }
  .pets .header-top .header__logo,
  .pets .header-top .header__logo span {
    color: var(--gray);
  }
</style>
