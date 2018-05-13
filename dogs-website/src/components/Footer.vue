<template>
  <footer class="footer">
      <div class="container">
        <section class="footer__wrapper">
        <div class="footer__contact contact">
          <h2 class="footer__title">For questions <br> and suggestions</h2>
          <span class="contact__phone">email@shelter.com</span>
          <span class="contact__email">+13 674 567 75 54</span>
        </div>
        <div class="footer__address address">
          <h2 class="footer__title">We are waiting <br> for your visit</h2>
          <span class="address__usa">Boston, Central Street, 1st <br> (Entrance from the store)</span>
          <span class="address__uk">London, South Park, 18st</span>
        </div>
        </section>
      </div>
  </footer>
</template>

<style scoped>
.footer {
  background-image: url('../assets/img/footer.png'), url('../assets/img/background.jpg');
  background-repeat: no-repeat;
  background-position: right center;
}
.footer__wrapper {
  display: flex;
}
.contact,
.address {
  color: var(--highlight);
  width: 40%;
}
.footer__title {
  color: var(--white)
}
.address__usa,
.address__uk,
.contact__email,
.contact__phone {
  display: block;
}
.address__uk,
.address__usa {
  height: 36px;
  padding-left: 70px;
  background-image: url('../assets/icons/pin.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
.address__usa {
  margin-bottom: 25px;
}
.contact__email {
  height: 40px;
  background-image: url('../assets/icons/envelope.svg');
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: 70px;
}
.contact__phone {
  height: 40px;
  background-image: url('../assets/icons/telephone.svg');
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: 70px;
  margin-bottom: 25px;
}
@media screen and (max-width: 920px) {
  .footer {
    background-position: right bottom;
  }
  .footer__wrapper {
    flex-direction: column;
  }
  .footer__contact,
  .footer__address {
    width: 100%;
  }
}
</style>
