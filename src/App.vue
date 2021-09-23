<template>
  <div id="app">
    <theme-provider>
      <main>
        <coin />
        <crypto-chart />
      </main>
    </theme-provider>
  </div>
</template>

<script>
import ThemeProvider from './theme/ThemeProvider.vue'
import Coin from './components/Coin.vue'
import CryptoChart from './components/Chart/CryptoChart.vue'

export default {
  name: 'App',
  components: {
    ThemeProvider,
    Coin,
    CryptoChart,
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
  justify-content: space-around;
  padding: 1rem;
  gap: 2rem;
}

@media (max-width: 768px) {
  main {
    min-height: 100vh;
    flex-direction: column;
  }
}
</style>