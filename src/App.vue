<template>
  <div id="app">
    <theme-provider>
    </theme-provider>
  </div>
</template>

<script>
// import Switcher from './theme/Switcher.vue'
import ThemeProvider from './theme/ThemeProvider.vue'
import stream from './service/websocket'

export default {
  name: 'App',
  components: {
    ThemeProvider,
  },
  created: () => {
    stream('BTCUSDT', (resp) => {
      console.log(resp.data.c)
    })
  }

}
</script>