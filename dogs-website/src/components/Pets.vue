<template>
  <section class="pets">
    <div class="container">
        <app-top-header></app-top-header>
          <paginate
            v-if="show"
            name="pets"
            :list="pets"
            :per="8"
           >
            <div class="pets__main">
              <animal-panel v-for="pet in paginated('pets')" :key="pet.name" :title="pet.name" :image="pet.image"></animal-panel>
            </div>
          </paginate>
    </div>
    <paginate-links for="pets" :limit="3"></paginate-links>
    <app-modal v-if="this.$store.state.openModal"></app-modal>
    <app-footer></app-footer>
  </section>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import Footer from '@/components/Footer'
import AnimalPanel from '@/components/AnimalPanel'
import Modal from '@/components/Modal'

export default {
  components: {
    'app-top-header': TopHeader,
    'app-footer': Footer,
    'app-modal': Modal,
    AnimalPanel
  },
  data () {
    return {
      pets: [],
      paginate: ['pets'],
      show: false
    }
  },
  methods: {
    fetchPhotos () {
      this.$store.dispatch('fetchPets').then(() => { this.pets = this.$store.state.pets })
    }
  },
  created: function () {
    this.fetchPhotos()
    this.show = true
  }
}
</script>

<style>
.pets {
    background: var(--background_dark);
    padding: 0;
}
.pets__main .panel {
  flex-basis: 270px;
  margin-bottom: 30px;
}
.pets__main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.pets .menu .menu__item {
  color: var(--gray);
}
.pets .menu .menu__item:hover {
  color: var(--black);
}
.pets .header-top .header__logo,
.pets .header-top .header__logo span {
  color: var(--gray);
}
.paginate-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 60px 0;
}
.paginate-links .number {
  list-style: none;
  width: 45px;
  height: 45px;
  margin-right: 20px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid var(--highlight);
  text-align: center;
  line-height: 2.5rem;
  cursor: pointer;
}
.paginate-links .number a {
  display: block;
  font-size: 1.25rem;
}
</style>
