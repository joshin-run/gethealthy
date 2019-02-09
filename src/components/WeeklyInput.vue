<template>
  <div class="weekly-input-container">
    <h3 v-html=title></h3>
    <div class="per-day">
      <p>Per Day</p>
      <input :value="message" :id="dayId" @input="updateMessage">
    </div>
    <div class="per-week">
      <p>Per Week</p>
      <input :id="weekId">
    </div>
    <div class="total">
      <p>Total</p>
      <p>{{ title }} per week.</p>
    </div>
  </div>  
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WeeklyInput',
  props: {
    title: String,
    dayId: String,
    weekId: String
  },
  computed: {
    ...mapState({
      message: state => state.obj.message
    })
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e,target.value)
    }
  }
}
</script>

<style scoped lang="scss">
input {
  height: auto;
  width: 40px;
  padding: 5px;
  border: 1px solid gray;
  text-align: center;
}
.weekly-input-container {
  width: 100%;
  h3 {
    color: #000;
    margin-bottom: 2px;
  }
  .per-day,
  .per-week,
  .total {
    display: inline-block;
    margin: 0 20px 26px 0;
    p {
      font-size: 10px;
      font-weight: bold;
    }
  }
  .total {
    p:nth-of-type(1) {
      font-size: 10px;
      font-weight: bold;
      margin-bottom: 10px;
    }    
    p:nth-of-type(2) {
      font-size: 14px;
      font-weight: normal;
    }    
  }
}
p {
  margin-bottom: 5px;
}
</style>
