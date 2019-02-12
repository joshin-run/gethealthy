<template>
  <div class="result-input-container">
    <input @change="inputChange($event)" :id=id>
    <!-- <input v-model="message"> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'ResultInput',
  methods: {
    inputChange (event) {
      this.$emit('input-change', event)
    }
  }, 
  props: {
    id: String
  }
}
</script>

<style scoped lang="scss">
.result-input-container {
  width: 40px;
  input {
    height: auto;
    width: 35px;
    padding: 3px;
    border: 1px solid gray;
    text-align: center;
    display: inline-block;
  }
}
</style>
