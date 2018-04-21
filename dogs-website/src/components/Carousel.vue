<template>
<section class="carousel__wrapper">
  <h2>Our friends who <br> are looking for a house</h2>
  <div class="carousel">
    <carousel :per-page="3" :navigationEnabled="true" :paginationEnabled="false" :autoplay="false">
      <slide v-for="slide in slides" :key="slide.name">
        <img
          :src="'../assets'+slide.image"
          alt=""
          class="carousel__img">
        <span
          class="carousel__name">
          {{slide.name}}
        </span>
        <button>Learn more</button>
      </slide>
    </carousel>
    </div>
    <button class="carousel__cta">Get to know the rest</button>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      slides: [],
      currentNumber: 0
    }
  },
  beforeMount () {
    const data = require('../assets/pets-data.json')
    console.log(data)
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
.VueCarousel-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-basis: 320px!important;
  height: 415px;
  margin-right: 50px;
  background: var(--background_light);
  border-radius: 9px;
  transition: all .3s ease-in-out;
}
.VueCarousel-slide:nth-of-type(3n) {
  margin-right: 0;
}
.VueCarousel-slide:hover {
  box-shadow: 0 2px 30px 5px rgba(13, 13, 13, 0.04);
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
.carousel__img {
  max-height: 250px;
  width: auto;
}
.carousel__name {
  font-size: 1.25rem;
  color: var(--gray)
}
.carousel__cta {
  background: var(--highlight);
}
</style>
