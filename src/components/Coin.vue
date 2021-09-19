<template>
  <div>
    {{ price }}
  </div>
</template>

<script>
import stream from '../service/websocket'
export default {
  name: 'coin',
  data: function () {
    return {
      stream,
      price: null
    }
  },
  created: function () {
    stream('BTCUSDT', (resp) => {
      this.price = resp.data.c
    })
  }
}
</script>

<style>

</style>