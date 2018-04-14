<template>
<section class="donation">
  <div class="container">
  <div class="donation__info">
    <h2 class="dontaion__title">In addition, you <br> can make a donation</h2>
    <label class="donation__label">Name of the bank / Type of bank account</label>
    <input type="text" class="donation__card-input">
    <p class="donation__legal">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
        ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
        et malesuada fames ac ante ipsum primis in faucibus.
    </p>
  </div></div>
</section>
</template>

<style scoped>
.donation {
  background-color: var(--background_dark);
  background-image: url('../assets/img/donation.png');
  background-repeat: no-repeat;
  background-position: 5% center;
}
.donation__info {
  margin-left: 50%;
  width: 30%;
}
.donation__label {
  display: block;
  margin-bottom: 20px;
}
.donation__card-input {
  display: block;
  width: 65%;
  background: var(--highlight);
  background-image: url('../assets/icons/credit-card.png');
  background-repeat: no-repeat;
  background-position: 15px center;
  font-size: 0.8em;
  font-family: 'Georgia', serif;
  padding: 10px 20px 10px 60px;
  border: none;
  border-radius: 10px;
  outline: none;
}
.donation__legal {
  font-style: italic;
  color: var(--light_gray);
  font-size: 0.75em;
}
</style>
