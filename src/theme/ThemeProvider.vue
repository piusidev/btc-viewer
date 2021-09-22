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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}

:root {
  --error: #ff5555;
  --success:  #8be9fd;
}

[theme="dark"] {
  --background: #282a36;
  --backgroundAlt: #1d1e26;
  --text: #f8f8f2;
}

[theme="light"] {
  --background: #f8f8f2;
  --backgroundAlt: transparent;
  --text: #282a36;
}
</style>