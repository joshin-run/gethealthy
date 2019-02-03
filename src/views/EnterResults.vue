<template>
    <v-container>
        <v-layout column>
            <h1>Enter Results</h1>

            <h3>Week 1</h3>
            <div row class="input-container">
                <results-input class="inputs"
                    v-for="item in rowOne"
                    v-bind:key="item.key"
                    v-bind:id="item.id"         
                />
            </div>    
            <h3>Week 2</h3>
            <div row class="input-container">
                <results-input class="inputs"
                    v-for="item in rowTwo"
                    v-bind:key="item.key"
                    v-bind:id="item.id"         
                />
            </div>    
            <h3>Week 3</h3>
            <div row class="input-container">
                <results-input class="inputs"
                    v-for="item in rowThree"
                    v-bind:key="item.key"
                    v-bind:id="item.id"         
                />
            </div>    
            <h3>Week 4</h3>
            <div row class="input-container">
                <results-input class="inputs"
                    v-for="item in rowFour"
                    v-bind:key="item.key"
                    v-bind:id="item.id"         
                />
            </div>    
            <h3>Week 5</h3>
            <div row class="input-container">
                <results-input class="inputs"
                    v-for="item in rowFive"
                    v-bind:key="item.key"
                    v-bind:id="item.id"         
                />
            </div>    
            <h3>Week 6</h3>
            <div row class="input-container">
                <results-input class="inputs"
                    v-for="item in rowSix"
                    v-bind:key="item.key"
                    v-bind:id="item.id"         
                />
            </div>    

        </v-layout>
    </v-container>
</template>
<script>
import ResultsInput from '@/components/ResultInput.vue'

export default {
    name: 'EnterResults',
    data: () => ({
        rowOne: [
            {
                key: 1,
                id: 'w1-r1'
            },
            {
                key: 2,
                id: 'w1-r2'
            },
            {
                key: 3,
                id: 'w1-r3'
            },
            {
                key: 4,
                id: 'w1-r4'
            },
            {
                key: 5,
                id: 'w1-r5'
            },
            {
                key: 6,
                id: 'w1-r6'
            },
            {
                key: 7,
                id: 'w1-r7'
            }

        ],
        rowTwo: [
            {
                key: 1,
                id: 'w2-r1'
            },
            {
                key: 2,
                id: 'w2-r2'
            },
            {
                key: 3,
                id: 'w2-r3'
            },
            {
                key: 4,
                id: 'w2-r4'
            },
            {
                key: 5,
                id: 'w2-r5'
            },
            {
                key: 6,
                id: 'w2-r6'
            },
            {
                key: 7,
                id: 'w2-r7'
            }

        ],
        rowThree: [
            {
                key: 1,
                id: 'w3-r1'
            },
            {
                key: 2,
                id: 'w3-r2'
            },
            {
                key: 3,
                id: 'w3-r3'
            },
            {
                key: 4,
                id: 'w3-r4'
            },
            {
                key: 5,
                id: 'w3-r5'
            },
            {
                key: 6,
                id: 'w3-r6'
            },
            {
                key: 7,
                id: 'w3-r7'
            }

        ],
        rowFour: [
            {
                key: 1,
                id: 'w4-r1'
            },
            {
                key: 2,
                id: 'w4-r2'
            },
            {
                key: 3,
                id: 'w4-r3'
            },
            {
                key: 4,
                id: 'w4-r4'
            },
            {
                key: 5,
                id: 'w4-r5'
            },
            {
                key: 6,
                id: 'w4-r6'
            },
            {
                key: 7,
                id: 'w4-r7'
            }

        ],
        rowFive: [
            {
                key: 1,
                id: 'w5-r1'
            },
            {
                key: 2,
                id: 'w5-r2'
            },
            {
                key: 3,
                id: 'w5-r3'
            },
            {
                key: 4,
                id: 'w5-r4'
            },
            {
                key: 5,
                id: 'w5-r5'
            },
            {
                key: 6,
                id: 'w5-r6'
            },
            {
                key: 7,
                id: 'w5-r7'
            }

        ],
        rowSix: [
            {
                key: 1,
                id: 'w7-r1'
            },
            {
                key: 2,
                id: 'w7-r2'
            },
            {
                key: 3,
                id: 'w7-r3'
            },
            {
                key: 4,
                id: 'w7-r4'
            },
            {
                key: 5,
                id: 'w7-r5'
            },
            {
                key: 6,
                id: 'w7-r6'
            },
            {
                key: 7,
                id: 'w7-r7'
            }

        ]

    }),
    components: {
        ResultsInput
    }
};
</script>
<style lang="scss" scoped>
.input-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    .inputs {
        margin: 0 2px;
    }
}
</style>