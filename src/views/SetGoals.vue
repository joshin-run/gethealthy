<template>
    <v-container >
        <v-layout column>
            <h1>Set Goals</h1>

            <div v-for="(section, index) in weekly" :key="weekly.key">
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="weekly-input-container">
                            <h3>{{section.title}}</h3>
                            <div class="per-day">
                                <p>{{section.dayTitle}}</p>
                                <input :value="section.dayVal"
                                :id="section.dayId" v-model="section.dayVal">
                                <!-- <input :value="section.dayVal" :id="section.dayId" @input="updateMessage"> -->
                            </div>
                            <div class="per-week">
                                <p>{{section.weekTitle}}</p>
                                <input :value="section.weekVal"
                                :id="section.weekId" v-model="section.weekVal">
                            </div>
                                <div class="total">
                                <p>{{section.totalTitle}}</p>
                            <p>{{section.dayVal * section.weekVal}}
                            {{section.title.toLowerCase()}} {{section.totalMsg}}</p>
                            </div>
                        </div>  
                   </v-flex>
                </v-layout>
            </div>

            <div class="goals-wrapper">
                <!-- <v-container id="dropdown-example" grid_list-xl> -->
                    <v-layout row wrap>
                        <v-flex xs12>
                            <weekly-input 
                                v-for="item in inputs"
                                v-bind:key="item.key"
                                v-bind:dayId="item.dayId"
                                v-bind:weekId="item.weekId"  
                                v-bind:title="item.title"  
                               
                            />
                        </v-flex>
                    </v-layout>
                    <!-- <div>{{minutes.dayly}}</div> -->
                    <v-layout class="totals-container">
                        <v-flex xs12>
                            <h1>Full Sprint Totals</h1>  
                            <h3 
                                v-for="item in inputs"
                                v-bind:key="item.key"
                                v-bind:title="item.title"
                            >{{item.title}}:</h3>

                            
                        </v-flex>    
                    </v-layout>
                <!-- </v-container> -->

                <!-- <Checkbox
              v-for="box in checkboxesOneColumnTwo"
              v-bind:key="box.key"
              v-bind:id="box.id"
              v-bind:message="box.message"
              v-bind:name="box.name"
              v-bind:value="box.value"
              v-bind:showIcon="box.showIcon"
              v-bind:toolTxt="box.toolTxt"
              v-on:checkbox-input="checkMarks($event, 'qSum', 'sectSum')" />
          </div> -->

                 <!-- <v-container id="dropdown-example" grid_list-xl>
                    <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <p>Weeks</p>

                        <v-overflow-btn
                        :items="weeks"
                        label="Overflow Btn"
                        target="#dropdown-example"
                        ></v-overflow-btn>
                    </v-flex>
                    </v-layout>
                </v-container> -->
            </div>
        </v-layout>
    </v-container>
</template>
<script>
import WeeklyInput from '@/components/WeeklyInput';
import { mapState } from 'vuex'

export default {
    name: 'SetGoals',
    data: () => ({
        minutes: {
            dayly: 0,
            weekly: 0
        },
        inputs: [
            {
                key: 2,
                dayId: 'minutes_d',
                weekId: 'mintues_w',
                title: 'Minutes'
            },
            {
                key: 4,
                dayId: 'water_d',
                weekId: 'water_w',
                title: 'Water'
            },
            {
                key: 3,
                dayId: 'meals_d',
                weekId: 'meals_w',
                title: 'Meal Plan'
            },
            {
                key: 1,
                dayId: 'miles_d',
                weekId: 'miles_w',
                title: 'Miles'
            }

        ]

    }),
    computed: {
        weekly () {
            return this.$store.state.setGoalsContent
        }
    // components: {
    //     WeeklyInput
    // },
    // methods: {
    //     storeId: function () {
            
    //         store.commit('')
    //     }
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
        width: 30%;
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
</style>

