<template>
  <div class="result-input-container">
    <input v-model="message">
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'ResultInput'
}
</script>

<style scoped lang="scss">
.result-input-container {
  width: 40px;
  input {
    height: auto;
    width: 40px;
    padding: 5px;
    border: 1px solid gray;
    text-align: center;
    display: inline-block;
  }
}
</style>
