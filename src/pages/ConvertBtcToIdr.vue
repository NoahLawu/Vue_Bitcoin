<template>
  <div class="container">
    <input v-model="value" type="number" />
    <div>BTC {{ value }} = IDR {{ btcValue }}</div>
  </div>
</template>
<script>
export default {
  name: "ConvertBtcToIdrPage",
  data() {
    return {
      value: null,
      btcValue: 0,
      btcValueUSD: 0,
    };
  },
  async mounted() {
    const tickerData = await fetch("https://blockchain.info/ticker").then(
      (res) => res.json()
    );
    this.btcValueUSD = tickerData.USD.buy;
  },
  methods: {
    async getBTC(value) {
      console.log("jalan", value);
      const res = await fetch(
        `https://blockchain.info/tobtc?currency=USD&value=${value}`
      ).then((res) => {
        return res.json();
      });
      return res;
    },
  },
  watch: {
    async value(newValue) {
      this.btcValue = await this.getBTC(newValue * this.btcValueUSD * 14000);
    },
  },
};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
