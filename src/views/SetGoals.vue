<template>
    <v-container >
        <v-layout column>
            <h1>Set Goals</h1>
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

export default {
    name: 'SetGoals',
    data: () => ({
        inputs: [
            {
                key: 1,
                dayId: 'd_1',
                weekId: 'w-1',
                title: 'Miles'
            },
            {
                key: 2,
                dayId: 'd_2',
                weekId: 'w-2',
                title: 'Minutes'
            },
            {
                key: 3,
                dayId: 'd_3',
                weekId: 'w-3',
                title: 'Meals'
            },
            {
                key: 4,
                dayId: 'd_4',
                weekId: 'w-4',
                title: 'Water'
            }

        ]

    }),
    components: {
        WeeklyInput
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
</style>

