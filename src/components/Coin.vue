<template>
  <div class="border-card">
    <div class="crypto-card">
      {{ price }}
    </div>
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
.border-card {
  padding: 0.3rem;
  border-radius: 2rem;
  background: linear-gradient(
    to right bottom,
    rgba(128, 255, 234, 1),
    rgba(138, 255, 128, 1)
  );
}

.crypto-card {
  min-width: 300px;
  min-height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

  background: var(--backgroundAlt);
  color: var(--text);
}
</style>