<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './styles/colors.css'
import './styles/links.css'
import './styles/typography.css'
import './styles/buttons.css'

export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Georgia', serif;
}
.container {
  width: 90%;
  margin: 0 auto;
}
section {
  padding: 40px 0;
  margin: 0 auto;
}
</style>
