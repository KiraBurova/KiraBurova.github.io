<template>
<section class="carousel__wrapper">
  <h2>Our friends who <br> are looking for a house</h2>
  <div class="carousel">
    <carousel :per-page="3" :navigationEnabled="true" :paginationEnabled="false" :autoplay="false">
      <slide v-for="slide in slides" :key="slide.name">
        <animal-panel
          name="slide"
          :title="slide.name"
          :image="slide.image">
        </animal-panel>
      </slide>
    </carousel>
    </div>
    <button class="carousel__cta">Get to know the rest</button>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import AnimalPanel from '@/components/AnimalPanel'

export default {
  components: {
    Carousel,
    Slide,
    AnimalPanel
  },
  data () {
    return {
      slides: [],
      currentNumber: 0
    }
  },
  beforeMount () {
    const data = require('../assets/pets-data.json')
    this.slides = this.slides.concat(data)
  }
}
</script>
<style>
.carousel__wrapper {
  background: var(--background_dark);
  text-align: center;
}
.carousel {
  width: 1040px;
  margin: 40px auto;
}
.VueCarousel-slide:nth-of-type(3n) {
  margin-right: 0;
}
.carousel button.VueCarousel-navigation-button  {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.18rem solid var(--highlight);
  font-size: 0;
}
.VueCarousel-navigation-prev {
  background-image: url('../assets/icons/long-left-arrow.png');
  background-repeat: no-repeat;
  background-position: center;
  left: -40px!important;
}
.VueCarousel-navigation-next {
  background-image: url('../assets/icons/long-right-arrow.png');
  background-repeat: no-repeat;
  background-position: center;
  right: -40px!important;
}
.carousel__cta {
  background: var(--highlight);
}
</style>
