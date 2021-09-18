<template>
  <div id="app">
    <theme-provider>
    </theme-provider>
  </div>
</template>

<script>
import Switcher from './theme/Switcher.vue'
import ThemeProvider from './theme/ThemeProvider.vue'

export default {
  name: 'App',
  components: {
    ThemeProvider,
    Switcher
  },
}
</script>