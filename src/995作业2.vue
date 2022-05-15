<template>
  <div>
    <p>选择你喜欢的</p>
    <template v-for="item in arr">
      <input :key="item" type="checkbox" v-model="checkArr" :value="item" />
      {{ item }}
    </template>
    <ul>
      <li v-for="item in checkArr" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['科幻', '喜剧', '动漫', '冒险', '科技', '军事', '娱乐', '奇闻'],
      checkArr: []
    }
  }
}
</script>

<style></style>
