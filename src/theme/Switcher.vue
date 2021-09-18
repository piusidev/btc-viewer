<template>
  <button v-on:click="store.changeTheme()">
    <img v-if="store.state.theme == 'dark'" src="https://img.icons8.com/color/48/000000/moon-satellite.png" />
    <img v-else src="https://img.icons8.com/color/48/000000/sun.png" />
  </button>
</template>

<script>
import store from './store';

export default {
  name: 'Switcher',
  data: () => {
    return {
      store
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
