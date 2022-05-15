<template>
  <div>
    <input type="text" v-model="msg" />
    <p>{{ reverse }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheReverse',
  data() {
    return {
      msg: 'hello world'
    }
  },
  created() {
    console.log(this.$route)
  },
  mounted() {
    console.log(this.$route)
  },
  computed: {
    reverse: function () {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style></style>
