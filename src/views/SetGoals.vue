<template>
    <div class="wrapper" >
        <v-layout column>
            <div class="goals-wrapper">
                <div class="set-goal-wrapper">
                    <h1>Set Goals </h1>
                    <div class="btn-cntr">
                        <v-btn class="dash-btn" color="blue lighten-1" to="/dashboard">Save and Close</v-btn>
                    </div>
                    <div>
                        <h2 class="weeks-inpt-label">Weeks:</h2>
                        <input @change="totalsUpdate($event)" class="weeks-inpt" v-model.number="state.weeks">
                    </div>    
                    <div v-for="section in weekly" :key="section.key">
                        <v-layout row wrap>
                            <v-flex xs12>
                                <div class="weekly-input-container">
                                    <h3>{{section.title}}</h3>
                                    <div class="per-day">
                                        <p>{{section.dayTitle}}</p>
                                        <input @change="totalsUpdate($event)" :id="section.dayId" v-model.number="section.dayVal">
                                        <!-- <input :value="section.dayVal" :id="section.dayId" @input="updateMessage"> -->
                                    </div>
                                    <div class="per-week">
                                        <p>{{section.weekTitle}}</p>
                                        <input @change="totalsUpdate($event)" :id="section.weekId" v-model.number="section.weekVal">
                                    </div>
                                        <div class="total">
                                        <p>{{section.totalTitle}}</p>
                                    <p>{{section.totalMsg1}} {{section.dayVal *
                                    section.weekVal}} {{section.totalMsg2}}</p>
                                    </div>
                                </div>  
                            </v-flex>
                        </v-layout>
                    </div>
                </div>    
                <div id="dropdown-example">
                    <div>
                        <div>
                            <h1>Totals for {{state.weeks}} weeks</h1>
                            <div v-for="section in weekly"
                           :key="section.key">
                                <h3>{{state.weeks * section.dayVal * section.weekVal}} total {{section.title}}</h3>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </v-layout>
    </div>
</template>
<script>
import WeeklyInput from '@/components/WeeklyInput';
import { mapState } from 'vuex'

export default {
    name: 'SetGoals',
    computed: {
        ...mapState(['grandTotals', 'setGoalsContent', 'weeks']),
        weekly () {
            return this.$store.state.setGoalsContent
        },
        state () {
            return this.$store.state
        }
    },
    methods: {
        totalsUpdate (evt) {
            let tMinutes = this.weeks * this.setGoalsContent[0].dayVal * this.setGoalsContent[0].weekVal
            let tWater = this.weeks * this.setGoalsContent[1].dayVal * this.setGoalsContent[1].weekVal
            let tMeals = this.weeks * this.setGoalsContent[2].dayVal * this.setGoalsContent[2].weekVal
            let tMiles = this.weeks * this.setGoalsContent[3].dayVal * this.setGoalsContent[3].weekVal
            let tArr = [tMinutes, tWater, tMeals, tMiles]
            let arr = ['minutes', 'water', 'meals', 'miles']
            let obj = {
                tArr: tArr,
                arr: arr
            }
            this.$store.commit('updateGrandTotals', obj)
        }
    }
};
</script>
<style lang="scss" scoped>
.goals-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    .totals-container {
        width: 50%;
        // width: 30%;
        h3 {
            font-weight: normal;
        }
    }
}
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
.weeks-inpt,
.weeks-inpt-label {
    display: inline-block;
}

.weeks-inpt-label {
    margin-right: 10px;
}
.set-goal-wrapper {
    width: 50%;
}
.wrapper {
    padding: 20px;
}
.btn-cntr {
    // display: inline-block;
    margin-bottom: 25px;
    .dash-btn {
        color: #fff;
    }
}
h1 {
    display: inline-block;
}
</style>

