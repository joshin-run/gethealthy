<template>
    <div class="results-wrapper">
        <h1>Enter Results</h1>
        <div class="results-row">
            <div class="miles-wrapper">
                <h3>Minutes</h3>
                <h6>Week 1</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in minutes.rowOne"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 2</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in minutes.rowTwo"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 3</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in minutes.rowThree"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 4</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in minutes.rowFour"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 5</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in minutes.rowFive"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 6</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in minutes.rowSix"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>   
            </div>     

            <div class="water-wrapper">
                <h3>Water</h3>
                <h6>Week 1</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in water.rowOne"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 2</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in water.rowTwo"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 3</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in water.rowThree"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 4</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in water.rowFour"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 5</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in water.rowFive"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 6</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in water.rowSix"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>   
            </div>     
        </div>
         <div class="results-row">
            <div class="meals-wrapper">
                <h3>Meal Plan</h3>
                <h6>Week 1</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in meals.rowOne"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 2</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in meals.rowTwo"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 3</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in meals.rowThree"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 4</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in meals.rowFour"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 5</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in meals.rowFive"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 6</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in meals.rowSix"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>   
            </div>     

            <div class="miles-wrapper">
                <h3>Miles</h3>
                <h6>Week 1</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in miles.rowOne"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 2</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in miles.rowTwo"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 3</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in miles.rowThree"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 4</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in miles.rowFour"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 5</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in miles.rowFive"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>    
                <h6>Week 6</h6>
                <div row class="input-container">
                    <results-input class="inputs"
                        v-for="item in miles.rowSix"
                        v-bind:key="item.key"
                        v-bind:id="item.id"         
                    />
                </div>   
            </div>     
        </div>

    </div>
</template>
<script>
import ResultsInput from '@/components/ResultInput.vue'

export default {
    name: 'EnterResults',
    data: () => ({
        minutes: {
            rowOne: [
                {
                    key: 1,
                    id: 'minutes_w1_r1'
                },
                {
                    key: 2,
                    id: 'minutes_w1_r2'
                },
                {
                    key: 3,
                    id: 'minutes_w1_r3'
                },
                {
                    key: 4,
                    id: 'minutes_w1_r4'
                },
                {
                    key: 5,
                    id: 'minutes_w1_r5'
                },
                {
                    key: 6,
                    id: 'minutes_w1_r6'
                },
                {
                    key: 7,
                    id: 'minutes_w1_r7'
                }
            ],
            rowTwo: [
                {
                    key: 1,
                    id: 'minutes_w2_r1'
                },
                {
                    key: 2,
                    id: 'minutes_w2_r2'
                },
                {
                    key: 3,
                    id: 'minutes_w2_r3'
                },
                {
                    key: 4,
                    id: 'minutes_w2_r4'
                },
                {
                    key: 5,
                    id: 'minutes_w2_r5'
                },
                {
                    key: 6,
                    id: 'minutes_w2_r6'
                },
                {
                    key: 7,
                    id: 'minutes_w2_r7'
                }

            ],
            rowThree: [
                {
                    key: 1,
                    id: 'minutes_w3_r1'
                },
                {
                    key: 2,
                    id: 'minutes_w3_r2'
                },
                {
                    key: 3,
                    id: 'minutes_w3_r3'
                },
                {
                    key: 4,
                    id: 'minutes_w3_r4'
                },
                {
                    key: 5,
                    id: 'minutes_w3_r5'
                },
                {
                    key: 6,
                    id: 'minutes_w3_r6'
                },
                {
                    key: 7,
                    id: 'minutes_w3_r7'
                }

            ],
            rowFour: [
                {
                    key: 1,
                    id: 'minutes_w4_r1'
                },
                {
                    key: 2,
                    id: 'minutes_w4_r2'
                },
                {
                    key: 3,
                    id: 'minutes_w4_r3'
                },
                {
                    key: 4,
                    id: 'minutes_w4_r4'
                },
                {
                    key: 5,
                    id: 'minutes_w4_r5'
                },
                {
                    key: 6,
                    id: 'minutes_w4_r6'
                },
                {
                    key: 7,
                    id: 'minutes_w4_r7'
                }

            ],
            rowFive: [
                {
                    key: 1,
                    id: 'minutes_w5_r1'
                },
                {
                    key: 2,
                    id: 'minutes_w5_r2'
                },
                {
                    key: 3,
                    id: 'minutes_w5_r3'
                },
                {
                    key: 4,
                    id: 'minutes_w5_r4'
                },
                {
                    key: 5,
                    id: 'minutes_w5_r5'
                },
                {
                    key: 6,
                    id: 'minutes_w5_r6'
                },
                {
                    key: 7,
                    id: 'minutes_w5_r7'
                }

            ],
            rowSix: [
                {
                    key: 1,
                    id: 'minutes_w6_r1'
                },
                {
                    key: 2,
                    id: 'minutes_w6_r2'
                },
                {
                    key: 3,
                    id: 'minutes_w6_r3'
                },
                {
                    key: 4,
                    id: 'minutes_w6_r4'
                },
                {
                    key: 5,
                    id: 'minutes_w6_r5'
                },
                {
                    key: 6,
                    id: 'minutes_w6_r6'
                },
                {
                    key: 7,
                    id: 'minutes_w6_r7'
                }
            ]
        },
        water: {
            rowOne: [
                {
                    key: 1,
                    id: 'water_w1_r1'
                },
                {
                    key: 2,
                    id: 'water_w1_r2'
                },
                {
                    key: 3,
                    id: 'water_w1_r3'
                },
                {
                    key: 4,
                    id: 'water_w1_r4'
                },
                {
                    key: 5,
                    id: 'water_w1_r5'
                },
                {
                    key: 6,
                    id: 'water_w1_r6'
                },
                {
                    key: 7,
                    id: 'water_w1_r7'
                }
            ],
            rowTwo: [
                {
                    key: 1,
                    id: 'water_w2_r1'
                },
                {
                    key: 2,
                    id: 'water_w2_r2'
                },
                {
                    key: 3,
                    id: 'water_w2_r3'
                },
                {
                    key: 4,
                    id: 'water_w2_r4'
                },
                {
                    key: 5,
                    id: 'water_w2_r5'
                },
                {
                    key: 6,
                    id: 'water_w2_r6'
                },
                {
                    key: 7,
                    id: 'water_w2_r7'
                }

            ],
            rowThree: [
                {
                    key: 1,
                    id: 'water_w3_r1'
                },
                {
                    key: 2,
                    id: 'water_w3_r2'
                },
                {
                    key: 3,
                    id: 'water_w3_r3'
                },
                {
                    key: 4,
                    id: 'water_w3_r4'
                },
                {
                    key: 5,
                    id: 'water_w3_r5'
                },
                {
                    key: 6,
                    id: 'water_w3_r6'
                },
                {
                    key: 7,
                    id: 'water_w3_r7'
                }

            ],
            rowFour: [
                {
                    key: 1,
                    id: 'water_w4_r1'
                },
                {
                    key: 2,
                    id: 'water_w4_r2'
                },
                {
                    key: 3,
                    id: 'water_w4_r3'
                },
                {
                    key: 4,
                    id: 'water_w4_r4'
                },
                {
                    key: 5,
                    id: 'water_w4_r5'
                },
                {
                    key: 6,
                    id: 'water_w4_r6'
                },
                {
                    key: 7,
                    id: 'water_w4_r7'
                }

            ],
            rowFive: [
                {
                    key: 1,
                    id: 'water_w5_r1'
                },
                {
                    key: 2,
                    id: 'water_w5_r2'
                },
                {
                    key: 3,
                    id: 'water_w5_r3'
                },
                {
                    key: 4,
                    id: 'water_w5_r4'
                },
                {
                    key: 5,
                    id: 'water_w5_r5'
                },
                {
                    key: 6,
                    id: 'water_w5_r6'
                },
                {
                    key: 7,
                    id: 'water_w5_r7'
                }

            ],
            rowSix: [
                {
                    key: 1,
                    id: 'water_w6_r1'
                },
                {
                    key: 2,
                    id: 'water_w6_r2'
                },
                {
                    key: 3,
                    id: 'water_w6_r3'
                },
                {
                    key: 4,
                    id: 'water_w6_r4'
                },
                {
                    key: 5,
                    id: 'water_w6_r5'
                },
                {
                    key: 6,
                    id: 'water_w6_r6'
                },
                {
                    key: 7,
                    id: 'water_w6_r7'
                }
            ]
        },
        meals: {
            rowOne: [
                {
                    key: 1,
                    id: 'meals_w1_r1'
                },
                {
                    key: 2,
                    id: 'meals_w1_r2'
                },
                {
                    key: 3,
                    id: 'meals_w1_r3'
                },
                {
                    key: 4,
                    id: 'meals_w1_r4'
                },
                {
                    key: 5,
                    id: 'meals_w1_r5'
                },
                {
                    key: 6,
                    id: 'meals_w1_r6'
                },
                {
                    key: 7,
                    id: 'meals_w1_r7'
                }
            ],
            rowTwo: [
                {
                    key: 1,
                    id: 'meals_w2_r1'
                },
                {
                    key: 2,
                    id: 'meals_w2_r2'
                },
                {
                    key: 3,
                    id: 'meals_w2_r3'
                },
                {
                    key: 4,
                    id: 'meals_w2_r4'
                },
                {
                    key: 5,
                    id: 'meals_w2_r5'
                },
                {
                    key: 6,
                    id: 'meals_w2_r6'
                },
                {
                    key: 7,
                    id: 'meals_w2_r7'
                }

            ],
            rowThree: [
                {
                    key: 1,
                    id: 'meals_w3_r1'
                },
                {
                    key: 2,
                    id: 'meals_w3_r2'
                },
                {
                    key: 3,
                    id: 'meals_w3_r3'
                },
                {
                    key: 4,
                    id: 'meals_w3_r4'
                },
                {
                    key: 5,
                    id: 'meals_w3_r5'
                },
                {
                    key: 6,
                    id: 'meals_w3_r6'
                },
                {
                    key: 7,
                    id: 'meals_w3_r7'
                }

            ],
            rowFour: [
                {
                    key: 1,
                    id: 'meals_w4_r1'
                },
                {
                    key: 2,
                    id: 'meals_w4_r2'
                },
                {
                    key: 3,
                    id: 'meals_w4_r3'
                },
                {
                    key: 4,
                    id: 'meals_w4_r4'
                },
                {
                    key: 5,
                    id: 'meals_w4_r5'
                },
                {
                    key: 6,
                    id: 'meals_w4_r6'
                },
                {
                    key: 7,
                    id: 'meals_w4_r7'
                }

            ],
            rowFive: [
                {
                    key: 1,
                    id: 'meals_w5_r1'
                },
                {
                    key: 2,
                    id: 'meals_w5_r2'
                },
                {
                    key: 3,
                    id: 'meals_w5_r3'
                },
                {
                    key: 4,
                    id: 'meals_w5_r4'
                },
                {
                    key: 5,
                    id: 'meals_w5_r5'
                },
                {
                    key: 6,
                    id: 'meals_w5_r6'
                },
                {
                    key: 7,
                    id: 'meals_w5_r7'
                }

            ],
            rowSix: [
                {
                    key: 1,
                    id: 'meals_w6_r1'
                },
                {
                    key: 2,
                    id: 'meals_w6_r2'
                },
                {
                    key: 3,
                    id: 'meals_w6_r3'
                },
                {
                    key: 4,
                    id: 'meals_w6_r4'
                },
                {
                    key: 5,
                    id: 'meals_w6_r5'
                },
                {
                    key: 6,
                    id: 'meals_w6_r6'
                },
                {
                    key: 7,
                    id: 'meals_w6_r7'
                }
            ]
        },
        miles: {
            rowOne: [
                {
                    key: 1,
                    id: 'miles_w1_r1'
                },
                {
                    key: 2,
                    id: 'miles_w1_r2'
                },
                {
                    key: 3,
                    id: 'miles_w1_r3'
                },
                {
                    key: 4,
                    id: 'miles_w1_r4'
                },
                {
                    key: 5,
                    id: 'miles_w1_r5'
                },
                {
                    key: 6,
                    id: 'miles_w1_r6'
                },
                {
                    key: 7,
                    id: 'miles_w1_r7'
                }
            ],
            rowTwo: [
                {
                    key: 1,
                    id: 'miles_w2_r1'
                },
                {
                    key: 2,
                    id: 'miles_w2_r2'
                },
                {
                    key: 3,
                    id: 'miles_w2_r3'
                },
                {
                    key: 4,
                    id: 'miles_w2_r4'
                },
                {
                    key: 5,
                    id: 'miles_w2_r5'
                },
                {
                    key: 6,
                    id: 'miles_w2_r6'
                },
                {
                    key: 7,
                    id: 'miles_w2_r7'
                }

            ],
            rowThree: [
                {
                    key: 1,
                    id: 'miles_w3_r1'
                },
                {
                    key: 2,
                    id: 'miles_w3_r2'
                },
                {
                    key: 3,
                    id: 'miles_w3_r3'
                },
                {
                    key: 4,
                    id: 'miles_w3_r4'
                },
                {
                    key: 5,
                    id: 'miles_w3_r5'
                },
                {
                    key: 6,
                    id: 'miles_w3_r6'
                },
                {
                    key: 7,
                    id: 'miles_w3_r7'
                }

            ],
            rowFour: [
                {
                    key: 1,
                    id: 'miles_w4_r1'
                },
                {
                    key: 2,
                    id: 'miles_w4_r2'
                },
                {
                    key: 3,
                    id: 'miles_w4_r3'
                },
                {
                    key: 4,
                    id: 'miles_w4_r4'
                },
                {
                    key: 5,
                    id: 'miles_w4_r5'
                },
                {
                    key: 6,
                    id: 'miles_w4_r6'
                },
                {
                    key: 7,
                    id: 'miles_w4_r7'
                }

            ],
            rowFive: [
                {
                    key: 1,
                    id: 'miles_w5_r1'
                },
                {
                    key: 2,
                    id: 'miles_w5_r2'
                },
                {
                    key: 3,
                    id: 'miles_w5_r3'
                },
                {
                    key: 4,
                    id: 'miles_w5_r4'
                },
                {
                    key: 5,
                    id: 'miles_w5_r5'
                },
                {
                    key: 6,
                    id: 'miles_w5_r6'
                },
                {
                    key: 7,
                    id: 'miles_w5_r7'
                }

            ],
            rowSix: [
                {
                    key: 1,
                    id: 'miles_w6_r1'
                },
                {
                    key: 2,
                    id: 'miles_w6_r2'
                },
                {
                    key: 3,
                    id: 'miles_w6_r3'
                },
                {
                    key: 4,
                    id: 'miles_w6_r4'
                },
                {
                    key: 5,
                    id: 'miles_w6_r5'
                },
                {
                    key: 6,
                    id: 'miles_w6_r6'
                },
                {
                    key: 7,
                    id: 'miles_w6_r7'
                }
            ]
        }
    }),
    components: {
        ResultsInput
    }
};
</script>
<style lang="scss" scoped>
.results-wrapper {
    // h1 {
    //     padding-left: 3px;
    // }
    padding: 16px;
    .results-row {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        @media (min-width: 768px) {
            flex-flow: row nowrap;
        }
        .miles-wrapper,
        .water-wrapper,
        .meals-wrapper,
        .miles-wrapper {
            width: 100%;
            margin: 0 0 20px 0;
        }
    }
}
.input-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 15px 0;
    // .inputs {
    //     // margin: 0 2px;
    // }
}

</style>