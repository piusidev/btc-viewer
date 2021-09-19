<template>
  <div id="app">
    <theme-provider>
      <coin />
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