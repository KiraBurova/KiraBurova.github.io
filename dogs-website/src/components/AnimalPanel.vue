<template>
  <div class="panel">
      <slot name="slide">
        <div class="panel__img" :style="{ 'background-image': 'url(' + image + ')' }"></div>
        <span
          class="panel__name">
          {{title}}
        </span>
        <button>Learn more</button>
      </slot>
  </div>
</template>
<script>
export default {
  props: ['title', 'image']
}
</script>

<style scoped>
.panel {
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
