<template>
  <div class="panel">
      <slot name="slide">
        <div class="panel__img" :style="{ 'background-image': 'url(' + image + ')' }"></div>
        <span
          class="panel__name">
          {{title}}
        </span>
        <button @click="openModal($event)">Learn more</button>
      </slot>
  </div>
</template>
<script>
import Modal from '@/components/Modal'

export default {
  data () {
    return {
      activePet: null
    }
  },
  components: {
    'app-modal': Modal
  },
  props: ['title', 'image'],
  methods: {
    openModal (event) {
      this.$store.state.pets.filter((pet) => {
        if (pet.name === event.target.parentNode.children[1].innerText) {
          this.activePet = pet
        }
      })
      this.$store.commit('openModal', this.activePet)
    }
  }
}
</script>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-basis: 320px;
  height: 415px;
  margin-right: 50px;
  background: var(--background_light);
  border-radius: 9px;
  transition: all .3s ease-in-out;
}
.panel:hover {
  box-shadow: 0 2px 30px 5px rgba(13, 13, 13, 0.04);
}
.panel__img {
  width: 270px;
  height: 260px;
  background-repeat: no-repeat;
  background-position: center center;
}
.panel__name {
  font-size: 1.25rem;
  color: var(--gray)
}
</style>
