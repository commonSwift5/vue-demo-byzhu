<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.count }}</li>
    </ul>
    <button @click="change">修改数字</button>
    <!-- 但是数组在下⾯两种情况下⽆法监听
利⽤索引直接设置数组项时，例如arr[indexofitem]=newValue
修改数组的长度时，例如arr.length=newLength
。 -->
    <ul>
      <li v-for="item in firut" :key="item">{{ item }}</li>
    </ul>
    <button @click="changeF">修改水果</button>

    <ul>
      <li v-for="(item, key) in info" :key="item">{{ key }}--{{ item }}</li>
    </ul>
    <button @click="objChange">改变对象</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, count: 2 },
        { id: 2, count: 3 }
      ],
      firut: ['apple', 'banana'],
      info: {
        name: 'lisi',
        age: 12
      }
    }
  },
  methods: {
    change() {
      this.list[1].count = 5 // 通过索引修改一个对象内部 可以响应
    },
    changeF() {
      this.firut[0] = 'orige' // 不会引起页面刷新
    },
    objChange() {
      this.info.gender = '男' // 这里不会引起改变
    }

    // 无法监听总结
    // 对象
    // 1.对象的增加、删除 无法被vue监听到
    //  数组
    // 1.通过数组下标赋值
    // 2.修改数组长度
  }
}
</script>

<style></style>
