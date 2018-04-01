<template>
  <header class="header">
    <div class="container">
      <section class="header__top">
          <a href="" class="header__logo">
              Cozy House <br>
              <span>Shelter for pets in Boston</span>
          </a>
          <nav class="header__menu menu">
              <ul class="menu__inner">
                  <li class="menu__item">About the shelter</li>
                  <li class="menu__item">Our pets</li>
                  <li class="menu__item">To help the shelter</li>
                  <li class="menu__item">Contact</li>
              </ul>
          </nav>
      </section>
      <section class="header__main">
          <div class="header__left">
              <h1>Now only people <br> need a house </h1>
          </div>
          <div class="header__right"></div>
      </section>
    </div>
  </header>
</template>

<script>

export default {
}
</script>

<style scoped>
.header {
    box-sizing: border-box;
    min-height: 100vh;
    height: 100vh;
    background-image: url('../assets/header.png'), url('../assets/background.jpg');
    background-size: cover;
    margin: 0 auto;
}
.header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
}
.menu__inner {
    display: flex;
}
.menu__item {
    list-style: none;
    margin-right: 35px;
    padding: 8px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: var(--white)
}
.menu__item:last-child {
    margin-right: 0;
}
.menu__item:hover {
    border-bottom: 2px solid var(--highlight);
}
.header__logo {
    font-size: 32px;
    color: var(--highlight);
    text-align: center;
}
.header__logo span {
    font-size: 12px;
}
.header__left {
    padding: 25vh 0;
}
</style>
