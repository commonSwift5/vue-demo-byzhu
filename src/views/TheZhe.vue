<template>
  <div>
    <router-link to="/reverse">1231</router-link>
    <TheInput />
    <ThePanle />
  </div>
</template>

<script>
import TheInput from '../components/TheInput.vue'
import ThePanle from '../components/ThePanle.vue'
export default {
  name: 'TheZhe',
  components: {
    TheInput,
    ThePanle
  }
}
</script>

<style></style>
