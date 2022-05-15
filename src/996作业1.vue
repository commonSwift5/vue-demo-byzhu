<template>
  <div id="app">
    <table>
      <caption>
        欢迎光临
      </caption>
      <tr>
        <td>苹果{{ price }}/斤 ,折扣（8折）</td>
      </tr>
      <tr>
        <td>
          请输入你要购买的斤数<input type="text" v-model.number="count" />
        </td>
      </tr>
      <tr>
        <td>
          <button @click="settle">结账买单</button>
        </td>
      </tr>
      <tr>
        <td>总价{{ newPrice }}折后价 {{ newzh }}省了{{ sl }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 10,
      count: 1,
      newPrice: 0,
      newzh: 0,
      sl: 0
    }
  },
  methods: {
    settle() {
      this.newPrice = this.price * this.count
      this.newzh = this.price * this.count * 0.8
      this.sl = this.newPrice - this.newzh
    }
  }
}
</script>

<style lang="less">
#app {
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  table {
    width: 1000px;
    td {
      border: 1px solid #ccc;
    }
  }
}
</style>
