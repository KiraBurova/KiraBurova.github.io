<template>
  <div class="modal">
      <div class="modal__inner">
        <button class="modal__close" @click="closeModal"></button>
        <div class="modal__left" :style="{ 'background-image': 'url(' + this.$store.state.activePet.image + ')' }"></div>
        <div class="modal__right">
          <h2 class="modal__head">{{this.$store.state.activePet.name}}</h2>
          <span class="modal__type">{{this.$store.state.activePet.breed}}</span>
          <p class="modal__descr">
            {{this.$store.state.activePet.descr}}
          </p>
          <ul class="modal__list">
            <li class="modal__list-item">Age: <span>{{this.$store.state.activePet.age}}</span></li>
            <li class="modal__list-item">Inoculations: <span>{{this.$store.state.activePet.inoculations}}</span></li>
            <li class="modal__list-item">Diseases: <span>{{this.$store.state.activePet.diseases}}</span></li>
            <li class="modal__list-item">Parasites: <span>{{this.$store.state.activePet.parasites}}</span></li>
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
  right: -60px;
  top: -60px;
  background: url('../assets/icons/cancel.svg');
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center center;
}
.modal__inner {
  display: flex;
  max-width: 1024px;
  width: 75%;
  height: 530px;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--background_light);
  color: var(--gray);
  box-shadow: 0 2px 30px 5px rgba(13, 13, 13, 0.04);
  border-radius: 9px;
  z-index: 99;
}
.modal__left,
.modal__right {
  flex: 50%;
}
.modal__left {
  background-repeat: no-repeat;
  background-position: center center;
}
.modal__right {
  padding: 4.375rem 3.125rem 0 3.125rem;
}
.modal__head {
  margin: 0;
}
.modal__descr {
  line-height: 1.5rem;
  font-family: 'Arial', sans-serif;
}
.modal__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.modal__list-item {
  margin-bottom: 15px;
}
.modal__list-item:last-child {
  margin-bottom: 0;
}
.modal__list-item::before {
  background-color: var(--highlight);
  border-radius: 50%;
  content: "";
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 2px;
  height: 5px;
  width: 5px;
}
.modal__list-item span {
  font-family: 'Arial', sans-serif;
}
@media screen and (max-width: 870px) {
  .modal__right {
    padding-top: 3.5rem;
  }
}
@media screen and (max-width: 780px) {
  .modal__right {
    padding-top: 2rem;
  }
}
@media screen and (max-width: 675px) {
  .modal__descr {
    line-height: 1.2rem;
  }
}
@media screen and (max-width: 570px) {
  .modal__inner {
    flex-direction: column;
  }
  .modal__right {
    padding-top: 0;
    padding-bottom: 1.25rem;
  }
  .modal__list-item {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 550px) {
  .modal__descr {
    line-height: 1rem;
  }
}
@media screen and (max-width: 475px) {
  .modal__left {
    background-size: contain;
  }
  .modal__right {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 470px) {
  .modal__close {
    top: -30px;
    right: -30px;
  }
}
</style>
