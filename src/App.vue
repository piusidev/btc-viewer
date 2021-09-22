<template>
  <div id="app">
    <theme-provider>
      <main>
        <coin />
      </main>
    </theme-provider>
  </div>
</template>

<script>
import ThemeProvider from './theme/ThemeProvider.vue'
import Coin from './components/Coin.vue'

export default {
  name: 'App',
  components: {
    ThemeProvider,
    Coin
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  background: var(--background);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>