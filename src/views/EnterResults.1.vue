<!-- // <template>
//     <v-container>
//         <v-layout column>
//             <h1>Enter Results</h1>

//             <div id="miles-wrapper">
//                 <h3>water</h3>
//                 <h6>Week 1</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in water.rowOne"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 2</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in water.rowTwo"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 3</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in water.rowThree"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 4</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in water.rowFour"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 5</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in water.rowFive"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 6</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in water.rowSix"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>   
//             </div>     

//             <!-- <div id="water-wrapper">
//                 <h2>water</h2>
//                 <h6>Week 1</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in rowOne"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 2</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in rowTwo"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 3</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in rowThree"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 4</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in rowFour"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 5</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in rowFive"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>    
//                 <h6>Week 6</h6>
//                 <div row class="input-container">
//                     <results-input class="inputs"
//                         v-for="item in rowSix"
//                         v-bind:key="item.key"
//                         v-bind:id="item.id"         
//                     />
//                 </div>   
//             </div>      -->
//             <!-- </div> -->

//         </v-layout>
//     </v-container>
// </template>
// <script>
// import ResultsInput from '@/components/ResultInput.vue'

// export default {
//     name: 'EnterResults',
//     data: () => ({
//         water: {
//             rowOne: [
//                 {
//                     key: 1,
//                     id: 'meals_w1_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w1_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w1_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w1_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w1_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w1_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w1_r7'
//                 }
//             ],
//             rowTwo: [
//                 {
//                     key: 1,
//                     id: 'meals_w2_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w2_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w2_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w2_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w2_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w2_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w2_r7'
//                 }

//             ],
//             rowThree: [
//                 {
//                     key: 1,
//                     id: 'meals_w3_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w3_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w3_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w3_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w3_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w3_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w3_r7'
//                 }

//             ],
//             rowFour: [
//                 {
//                     key: 1,
//                     id: 'meals_w4_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w4_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w4_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w4_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w4_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w4_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w4_r7'
//                 }

//             ],
//             rowFive: [
//                 {
//                     key: 1,
//                     id: 'meals_w5_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w5_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w5_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w5_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w5_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w5_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w5_r7'
//                 }

//             ],
//             rowSix: [
//                 {
//                     key: 1,
//                     id: 'meals_w6_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w6_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w6_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w6_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w6_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w6_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w6_r7'
//                 }
//             ]
//         },









//         meals: {
//             rowOne: [
//                 {
//                     key: 1,
//                     id: 'meals_w1_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w1_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w1_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w1_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w1_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w1_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w1_r7'
//                 }
//             ],
//             rowTwo: [
//                 {
//                     key: 1,
//                     id: 'meals_w2_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w2_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w2_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w2_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w2_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w2_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w2_r7'
//                 }

//             ],
//             rowThree: [
//                 {
//                     key: 1,
//                     id: 'meals_w3_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w3_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w3_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w3_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w3_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w3_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w3_r7'
//                 }

//             ],
//             rowFour: [
//                 {
//                     key: 1,
//                     id: 'meals_w4_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w4_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w4_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w4_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w4_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w4_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w4_r7'
//                 }

//             ],
//             rowFive: [
//                 {
//                     key: 1,
//                     id: 'meals_w5_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w5_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w5_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w5_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w5_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w5_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w5_r7'
//                 }

//             ],
//             rowSix: [
//                 {
//                     key: 1,
//                     id: 'meals_w6_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w6_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w6_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w6_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w6_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w6_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w6_r7'
//                 }
//             ]
//         },



// water: {
//             rowOne: [
//                 {
//                     key: 1,
//                     id: 'meals_w1_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w1_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w1_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w1_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w1_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w1_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w1_r7'
//                 }
//             ],
//             rowTwo: [
//                 {
//                     key: 1,
//                     id: 'meals_w2_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w2_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w2_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w2_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w2_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w2_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w2_r7'
//                 }

//             ],
//             rowThree: [
//                 {
//                     key: 1,
//                     id: 'meals_w3_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w3_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w3_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w3_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w3_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w3_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w3_r7'
//                 }

//             ],
//             rowFour: [
//                 {
//                     key: 1,
//                     id: 'meals_w4_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w4_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w4_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w4_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w4_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w4_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w4_r7'
//                 }

//             ],
//             rowFive: [
//                 {
//                     key: 1,
//                     id: 'meals_w5_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w5_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w5_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w5_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w5_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w5_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w5_r7'
//                 }

//             ],
//             rowSix: [
//                 {
//                     key: 1,
//                     id: 'meals_w6_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'meals_w6_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'meals_w6_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'meals_w6_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'meals_w6_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'meals_w6_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'meals_w6_r7'
//                 }
//             ]
//         }








//         // water: {

//         // },
//         // meals: {

//         // },
//         // water: {

//         // },
//         // rowOne: [
//         //     {
//         //         key: 1,
//         //         id: 'w1_r1'
//         //     },
//         //     {
//         //         key: 2,
//         //         id: 'w1_r2'
//         //     },
//         //     {
//         //         key: 3,
//         //         id: 'w1_r3'
//         //     },
//         //     {
//         //         key: 4,
//         //         id: 'w1_r4'
//         //     },
//         //     {
//         //         key: 5,
//         //         id: 'w1_r5'
//         //     },
//         //     {
//         //         key: 6,
//         //         id: 'w1_r6'
//         //     },
//         //     {
//         //         key: 7,
//         //         id: 'w1_r7'
//         //     }

//         // ],
//         // rowTwo: [
//         //     {
//         //         key: 1,
//         //         id: 'w2_r1'
//         //     },
//         //     {
//         //         key: 2,
//         //         id: 'w2_r2'
//         //     },
//         //     {
//         //         key: 3,
//         //         id: 'w2_r3'
//         //     },
//         //     {
//         //         key: 4,
//         //         id: 'w2_r4'
//         //     },
//         //     {
//         //         key: 5,
//         //         id: 'w2_r5'
//         //     },
//         //     {
//         //         key: 6,
//         //         id: 'w2_r6'
//         //     },
//         //     {
//         //         key: 7,
//         //         id: 'w2_r7'
//         //     }

//         // ],
//         // rowThree: [
//         //     {
//         //         key: 1,
//         //         id: 'w3_r1'
//         //     },
//         //     {
//         //         key: 2,
//         //         id: 'w3_r2'
//         //     },
//         //     {
//         //         key: 3,
//         //         id: 'w3_r3'
//         //     },
//         //     {
//         //         key: 4,
//         //         id: 'w3_r4'
//         //     },
//         //     {
//         //         key: 5,
//         //         id: 'w3_r5'
//         //     },
//         //     {
//         //         key: 6,
//         //         id: 'w3_r6'
//         //     },
//         //     {
//         //         key: 7,
//         //         id: 'w3_r7'
//         //     }

//         // ],
//         // rowFour: [
//         //     {
//         //         key: 1,
//         //         id: 'w4_r1'
//         //     },
//         //     {
//         //         key: 2,
//         //         id: 'w4_r2'
//         //     },
//         //     {
//         //         key: 3,
//         //         id: 'w4_r3'
//         //     },
//         //     {
//         //         key: 4,
//         //         id: 'w4_r4'
//         //     },
//         //     {
//         //         key: 5,
//         //         id: 'w4_r5'
//         //     },
//         //     {
//         //         key: 6,
//         //         id: 'w4_r6'
//         //     },
//         //     {
//         //         key: 7,
//         //         id: 'w4_r7'
//         //     }

//         // ],
//         // rowFive: [
//         //     {
//         //         key: 1,
//         //         id: 'w5_r1'
//         //     },
//         //     {
//         //         key: 2,
//         //         id: 'w5_r2'
//         //     },
//         //     {
//         //         key: 3,
//         //         id: 'w5_r3'
//         //     },
//         //     {
//         //         key: 4,
//         //         id: 'w5_r4'
//         //     },
//         //     {
//         //         key: 5,
//         //         id: 'w5_r5'
//         //     },
//         //     {
//         //         key: 6,
//         //         id: 'w5_r6'
//         //     },
//         //     {
//         //         key: 7,
//         //         id: 'w5_r7'
//         //     }

//         // ],
//         // rowSix: [
//         //     {
//         //         key: 1,
//         //         id: 'w7_r1'
//         //     },
//         //     {
//         //         key: 2,
//         //         id: 'w7_r2'
//         //     },
//         //     {
//         //         key: 3,
//         //         id: 'w7_r3'
//         //     },
//         //     {
//         //         key: 4,
//         //         id: 'w7_r4'
//         //     },
//         //     {
//         //         key: 5,
//         //         id: 'w7_r5'
//         //     },
//         //     {
//         //         key: 6,
//         //         id: 'w7_r6'
//         //     },
//         //     {
//         //         key: 7,
//         //         id: 'w7_r7'
//         //     }

//         // ]

//     }),
//     components: {
//         ResultsInput
//     }
// };
// </script>
// <style lang="scss" scoped>
// .input-container {
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: flex-start;
//     align-items: center;
//     margin: 0 0 15px -2px;
//     .inputs {
//         margin: 0 2px;
//     }
// }
// </style>


//  miles: {
//             rowOne: [
//                 {
//                     key: 1,
//                     id: 'miles_w1_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'miles_w1_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'miles_w1_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'miles_w1_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'miles_w1_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'miles_w1_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'miles_w1_r7'
//                 }
//             ],
//             rowTwo: [
//                 {
//                     key: 1,
//                     id: 'miles_w2_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'miles_w2_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'miles_w2_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'miles_w2_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'miles_w2_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'miles_w2_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'miles_w2_r7'
//                 }

//             ],
//             rowThree: [
//                 {
//                     key: 1,
//                     id: 'miles_w3_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'miles_w3_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'miles_w3_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'miles_w3_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'miles_w3_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'miles_w3_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'miles_w3_r7'
//                 }

//             ],
//             rowFour: [
//                 {
//                     key: 1,
//                     id: 'miles_w4_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'miles_w4_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'miles_w4_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'miles_w4_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'miles_w4_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'miles_w4_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'miles_w4_r7'
//                 }

//             ],
//             rowFive: [
//                 {
//                     key: 1,
//                     id: 'miles_w5_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'miles_w5_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'miles_w5_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'miles_w5_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'miles_w5_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'miles_w5_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'miles_w5_r7'
//                 }

//             ],
//             rowSix: [
//                 {
//                     key: 1,
//                     id: 'miles_w6_r1'
//                 },
//                 {
//                     key: 2,
//                     id: 'miles_w6_r2'
//                 },
//                 {
//                     key: 3,
//                     id: 'miles_w6_r3'
//                 },
//                 {
//                     key: 4,
//                     id: 'miles_w6_r4'
//                 },
//                 {
//                     key: 5,
//                     id: 'miles_w6_r5'
//                 },
//                 {
//                     key: 6,
//                     id: 'miles_w6_r6'
//                 },
//                 {
//                     key: 7,
//                     id: 'miles_w6_r7'
//                 }
//             ]
//         }