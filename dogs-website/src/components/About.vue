<template>
  <section class="about">
      <div class="about__left">
          <img src="../assets/img/about.png" alt="">
      </div>
      <div class="about__right">
          <h2 class="about__headline">About the shelter
            <br>
            "Cozy House"
           </h2>
           <p class="about__text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.
               Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis
                ultrices pharetra. Morbi tempus at ante sit amet tristique.
                Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim
                lorem. Sed at ligula et sem mattis gravida ac vel erat.
           </p>
      </div>
  </section>
</template>

<style scoped>
    .about {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 89px 0;
        background-color: var(--background_light);
    }
    .about__right {
        width: 50%;
    }
    .about__headline {
        padding-bottom: 40px;
    }
    .about__text {
        font-family: 'Arial';
        font-weight: 400;
        font-size: 1em;
    }
    @media (max-width: 675px) {
    .about {
        flex-direction: column;
        text-align: center;
    }
    .about__right {
        width: 100%;
    }
};
</style>
