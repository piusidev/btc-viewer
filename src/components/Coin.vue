<template>
  <div class="border-card">
    <div class="crypto-card">
      <div class="percent">
        <span :class="[percent < 0 ? 'error' : 'success']">
          {{ percent }}
        </span>
      </div>
      <div>
        <div class="crypto">{{ crypto }}</div>
        <div class="price">{{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import stream from '../service/websocket'
import utils from '../utils/'

export default {
  name: 'coin',
  data: function () {
    return {
      price: null,
      crypto: null,
      currency: null,
      percent: null
    }
  },
  created: function () {
    stream('BTCUSDT', (resp) => {
      this.price = resp.data.c
      this.crypto = resp.data.s
      this.percent = utils.formatPercent(resp.data.P)
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
  box-shadow: 0 12px 30px rgba(138, 255, 128, 0.3);
}

.crypto-card {
  min-width: 300px;
  min-height: 200px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

  background: var(--backgroundAlt);
  color: var(--text);
}

.crypto {
  font-weight: 800;
  margin-bottom: 5px;
}

.price {
  font-size: 25px;
}

.percent {
  font-size: 14px;
  position: absolute;
  top: 10%;
  right: 10%;
}

.error {
  color: var(--error);
  opacity: 0.7;
}

.error::after {
  content: 	"\2193";
  font-size: 1rem;
}

.success {
  color: var(--success);
}

.success::after {
  content: 	"\2191";
  font-size: 1rem;
}
</style>