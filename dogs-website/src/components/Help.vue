<template>
  <section class="help">
      <div class="container">
      <h2 class="help__title">Than you can help <br> our shelter</h2>
      <div class="help-grid grid">
          <div class="grid__item">
              <img src="../assets/icons/cat-food.png" alt="" class="grid__img">
              <span class="grid__title">Pet food</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/ambulance.png" alt="" class="grid__img">
              <span class="grid__title">Transporation</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/ball.png" alt="" class="grid__img">
              <span class="grid__title">Toys</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/bowl.png" alt="" class="grid__img">
              <span class="grid__title">Bowls and cups</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/shampoo.png" alt="" class="grid__img">
              <span class="grid__title">Shampoos</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/pills.png" alt="" class="grid__img">
              <span class="grid__title">Vitamins</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/syringe.png" alt="" class="grid__img">
              <span class="grid__title">Medicines</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/leash.png" alt="" class="grid__img">
              <span class="grid__title">Collars/Leashes</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/sleeping-area.png" alt="" class="grid__img">
              <span class="grid__title">Sleeping area</span>
          </div>
      </div>
      </div>
  </section>
</template>

<style scoped>
    .help {
        text-align: center;
    }
    .grid {
        padding-top: 50px;
        display: grid;
        grid-template-rows: 50% 50% auto;
        grid-template-columns: repeat(5, 185px);
        grid-column-gap: 100px;
        grid-row-gap: 70px;
        justify-items: center;
        align-items: center;
    }
    .grid__item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
