<template>
  <section class="help">
      <div class="container">
      <h2 class="help__title">Than you can help <br> our shelter</h2>
      <div class="help-grid grid">
          <div class="grid__item">
              <img src="../assets/icons/cat-food.svg" alt="" class="grid__img">
              <span class="grid__title">Pet food</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/ambulance.svg" alt="" class="grid__img">
              <span class="grid__title">Transporation</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/ball.svg" alt="" class="grid__img">
              <span class="grid__title">Toys</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/bowl.svg" alt="" class="grid__img">
              <span class="grid__title">Bowls and cups</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/shampoo.svg" alt="" class="grid__img">
              <span class="grid__title">Shampoos</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/pills.svg" alt="" class="grid__img">
              <span class="grid__title">Vitamins</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/syringe.svg" alt="" class="grid__img">
              <span class="grid__title">Medicines</span>
          </div>
          <div class="grid__item collars">
              <img src="../assets/icons/leash.svg" alt="" class="grid__img">
              <span class="grid__title">Collars / Leashes</span>
          </div>
          <div class="grid__item">
              <img src="../assets/icons/cat.svg" alt="" class="grid__img">
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
        padding: 70px 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 80px;
    }
    .grid__item {
        height: 125px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: var(--gray);
        font-size: 1.25rem;
    }
    .grid__img {
        width: 100px;
        height: 100px;
    }
    .grid__item {
        grid-column: span 2;
    }
    .grid__item:nth-child(1) {
        grid-column: 2 / span 2;
    }
    .grid__item:nth-child(6) {
        grid-column: 3 / span 2;
    }
    .collars {
        white-space: nowrap;
    }
@media screen and (max-width: 935px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .grid__item,
    .grid__item:nth-child(1),
    .grid__item:nth-child(6) {
        grid-column: span 1;
    }
    .grid__item:last-child {
        grid-column: span 2;
    }
}
@media screen and (max-width: 662px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
}
@media screen and (max-width: 440px) {
    .grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
}
@media screen and (max-width: 350px) {
    .grid__item,
    .grid__item:nth-child(1),
    .grid__item:nth-child(6) {
        grid-column: span 2;
    }
}
</style>
