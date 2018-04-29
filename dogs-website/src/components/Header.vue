<template>
  <header class="header">
    <div class="container">
      <TopHeader/>
      <section class="header__main">
          <div class="header__left">
              <h1>Now only people <br> need a house </h1>
              <p class="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
                est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula
                condimentum erat fringilla et.
                </p>
                <button class="header__cta">Make a friend</button>
          </div>
          <div class="header__right"></div>
      </section>
    </div>
  </header>
</template>

<script>
import TopHeader from '@/components/TopHeader'

export default {
  components: {
    TopHeader
  }
}
</script>
<style scoped>
.header {
    box-sizing: border-box;
    min-height: 100vh;
    height: 100vh;
    background-image: url('../assets/img/header.png'), url('../assets/img/background.jpg');
    background-size: cover;
    background-position: center top;
    margin: 0 auto;
}
.header__left {
    padding: 25vh 0;
    width: 30%;
}
.header__text {
    color: var(--white);
    font-family: 'Arial', serif;
    padding: 2.8rem 0;
    line-height: 1.5rem;
}
.header__cta {
    background-color: var(--highlight);
    font-size: 1.1em;
}
@media (max-width: 1405px) {
    .header__left {
        width: 40%;
    }
};
@media (max-width: 980px) {
    .header__left {
        width: 100%;
    }
};
@media (max-width: 855px) {
    .header__top {
        flex-direction: column
    }
};
@media (max-width: 670px) {
    .header__left {
        padding: 10vh 0;
    }
    .menu {
        width: 100%;
        text-align: center;
    }
    .menu__inner {
        flex-direction: column;
    }
    .menu__item:last-child {
        margin-right: 35px;
    }
}
@media (max-width: 328px) {
    .header__left {
        padding: 5vh 0;
    }
}
</style>
