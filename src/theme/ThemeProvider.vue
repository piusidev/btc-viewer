<template>
  <div :theme="getTheme">
    <slot />
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'ThemeProvider',
  data: () => {
    return {
      store
    }
  },
  computed: {
    getTheme: () => {
      return store.state.theme
    }
  }
}
</script>

<style>
[theme="dark"] {
  --background: #282a36;
  --text: #f8f8f2;
}

[theme="light"] {
  --background: #f8f8f2;
  --text: #282a36;
}
</style>