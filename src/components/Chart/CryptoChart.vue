<template>
  <div>
    <chart
      :chartdata="datacollection"
    ></chart>
  </div>
</template>

<script>
import Chart from "./Chart.vue"
import data from '../../service/chartdata'

export default {
  name: 'CryptoChart',
  components: {
    Chart
  },
  data: function () {
    return {
      datacollection: null,
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
          },
        ]
      }
    },
  }
};
</script>

<style>
</style>