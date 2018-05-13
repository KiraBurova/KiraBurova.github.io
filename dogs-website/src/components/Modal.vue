<template>
  <div class="modal">
      <div class="modal__inner">
        <button class="modal__close" @click="closeModal"></button>
        <div class="modal__left" :style="{ 'background-image': 'url(' + this.$store.state.activePet.image + ')' }"></div>
        <div class="modal__right">
          <h3 class="modal__head">{{this.$store.state.activePet.name}}</h3>
          <span class="modal__type">{{this.$store.state.activePet.breed}}</span>
          <p class="modal__descr">
            {{this.$store.state.activePet.descr}}
          </p>
          <ul class="modal__list">
            <li class="modal__list-item">Age: {{this.$store.state.activePet.age}}</li>
            <li class="modal__list-item">Inoculations: {{this.$store.state.activePet.inoculations}}</li>
            <li class="modal__list-item">Diseases: {{this.$store.state.activePet.diseases}}</li>
            <li class="modal__list-item">Parasites: {{this.$store.state.activePet.parasites}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image'],
  methods: {
    closeModal () {
      this.$store.commit('closeModal')
    }
  }
}
</script>

<style>
.modal::before {
  display: block;
  content: "";
  background: var(--background_light);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.modal__close {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  right: -30px;
  top: -30px;
  background: url('../assets/icons/cancel.svg');
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center center;
}
.modal__inner {
  display: flex;
  width: 1024px;
  height: 530px;
  position: fixed;
  top: 30%;
  left: 20%;
  background: var(--background_light);
  box-shadow: 0 2px 30px 5px rgba(13, 13, 13, 0.04);
  z-index: 99;
}
.modal__left,
.modal__right {
  flex: 50%;
  height: 100%;
}
.modal__left {
  background-repeat: no-repeat;
  background-position: center center;
}
.modal__right {
  padding: 70px 50px;
}
</style>
