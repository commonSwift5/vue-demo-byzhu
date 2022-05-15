<template>
  <div>
    <input type="text" v-model="msg" />
    <div>{{ msg }}</div>
    <!-- 双向绑定原理 -->

    <input type="text" :value="sex" @input="change" />
    <div>性别: {{ sex }}</div>
  </div>
</template>

<script>
export default {
  name: 'TheInput',
  data() {
    return {
      msg: '工作你在哪里呢',
      sex: '男'
    }
  },
  methods: {
    change(e) {
      this.sex = e.target.value
    }
  }
}
</script>

<style></style>
