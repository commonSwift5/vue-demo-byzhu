<template>
  <div class="thepanle">
    <div class="box">
      <div class="title">
        标题
        <div class="word" @click="change" v-if="show">隐藏</div>
        <div class="word" @click="change" v-else>展开</div>
      </div>
      <div class="content">
        <ul v-if="show">
          <li>lorem5</li>
          <li>lorem5</li>
          <li>lorem5</li>
          <li>lorem5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThePanle',
  data() {
    return {
      show: true
    }
  },
  methods: {
    change() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
div {
  box-sizing: border-box;
}
.thepanle {
  margin-top: 10px;
  width: 500px;
  height: 800px;
  .box {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    .title {
      line-height: 50px;
      vertical-align: center;
      border: 1px solid #ccc;
      position: relative;
      width: 100%;
      height: 50px;
      .word {
        position: absolute;
        top: 0;
        right: 5px;
      }
    }

    ul {
      padding: 0;
      border: 1px solid #ccc;
      width: 400px;
    }
    li {
      margin: 0;
      list-style: none;
    }
  }
}
</style>
