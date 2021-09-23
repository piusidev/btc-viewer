<template>
  <div class="chart">
    <chart
      :chartdata="datacollection"
      :options="options"
    />
  </div>
</template>

<script>
import Chart from "./Chart.vue"
import data from '../../service/chartdata'

export default {
  name: 'CryptoChart',
  components: {
    Chart,
  },
  data: function () {
    return {
      datacollection: null,
      options: null
    };
  },
  created: function () {
    this.fillData()
  },
  methods: {
    fillData: function () {
      this.datacollection = {
        labels: data.map(crypto => crypto.date),
        datasets: [
          {
            label: "Bitcoin",
            borderColor: "rgb(138, 255, 128)",
            data: data.map(crypto => crypto.price),
            // TODO implement dynamic data from https://docs.cryptowat.ch/rest-api/markets/ohlc
          },
        ]
      }

      this.options = {
        responsive: true,
        maintainAspectRatio: false
      }
    },
  }
};
</script>

<style>
.chart {
  position: relative;
  width: 100%;
  max-width: 700px;
}
</style>