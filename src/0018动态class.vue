<template>
  <div>
    <!-- 语法:
      :class="{类名: 布尔值}"
      使用场景: vue变量控制标签是否应该有类名
     -->
    <p :class="{ red_str: bool }">动态class</p>
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >
      2222
    </div>
    <!-- text-danger 用短横线连接 必须用字符串 -->
    <!-- 数组语法 -->
    <div v-bind:class="[activeClass, errorClass]">12315</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      isActive: true,
      hasError: true,
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  }
}
</script>

<style scoped>
.red_str {
  color: red;
}
.active {
  background-color: aquamarine;
}
.text-danger {
  color: blue;
}
</style>
