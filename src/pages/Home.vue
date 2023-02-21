<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>Mata Uang</th>
        <th>Harga Beli Bitcoin</th>
        <th>Harga Jual Bitcoin</th>
      </tr>
      <tr v-for="currency in tickerData" :key="currency.name">
        <th>{{ currency.name }}</th>
        <th>{{ currency.buy }}</th>
        <th>{{ currency.sell }}</th>
      </tr>
    </table>
  </div>
</template>

<!-- Dollar Australia (AUD), Euro Eropa (EUR), Poundsterling Inggris (GBP), Yen Jepang (JPY) dan Dollar Amerika (USD). -->
<script>
export default {
  name: "HomePage",
  data() {
    return {
      tickerData: [],
      mapper: {
        AUD: "Dollar Australia",
        EUR: "Euro Eropa",
        GBP: "Poundsterling Inggris",
        JPY: "Yen Jepang",
        USD: "Dollar Amerika",
      },
    };
  },
  mounted() {
    fetch("https://blockchain.info/ticker")
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ file: Home.vue:16 ~ .then ~ data:", data);
        // this.tickerData = data;
        const formattedData = Object.keys(data).reduce((acc, key) => {
          if (this.mapper[key]) {
            acc.push({
              name: this.mapper?.[key],
              buy: data[key]?.buy,
              sell: data[key]?.sell,
            });
          }
          return acc;
        }, []);
        console.log(
          "🚀 ~ file: Home.vue:44 ~ formattedData ~ formattedData:",
          formattedData
        );
        this.tickerData = formattedData;
      });
  },
};
</script>
<style scoped>
.table tr th {
  border: 2px solid black;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
