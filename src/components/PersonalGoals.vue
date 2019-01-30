<template>
    <!-- <v-container fluid> -->
        <div class="personal-goals-section">
            <div class="section-labels">
              <h3>PERSONAL GOALS</h3>
              <div>
                <button to="/set-goals" class="set-goals-btn">Set Goals</button>
                <button to="/enter-results" class="enter-results-btn">Enter Results</button>
                <h5>Current Goal Sprint: <span>Feb 1, 2019 - Apr 15, 2019</span></h5>
              </div>
            </div>
            <div class="goal-container">
              <div class="goal-tile water">
                <div class="label">WATER</div>
                <div class="data-container">
                  <div class="percent">32%</div>
                  <div class="accum">672</div>
                </div>
              </div>
            </div>
            <div class="goal-container">
              <div class="goal-tile miles">
                <div class="label">MILES</div>
                <div class="data-container">
                  <div class="percent">12%</div>
                  <div class="accum">451</div>
                </div>
              </div>
            </div>
            <div class="goal-container">
              <div class="goal-tile minutes">
                <div class="label">MINUTES</div>
                <div class="data-container">
                  <div class="percent">32%</div>
                  <div class="accum">223</div>
                </div>
              </div>
            </div>
            <div class="goal-container">
              <div class="goal-tile meals">
                <div class="label">MEALS</div>
                <div class="data-container">
                  <div class="percent">22%</div>
                  <div class="accum">51</div>
                </div>
              </div>
            </div>
            
        </div>
    <!-- </v-container> -->
</template>
<script>
export default {
    name: 'PersonalGoals'
};
</script>
<style lang="scss" scoped>
.personal-goals-section {
  // border: 1px solid lightgray;
  padding: 20px;
  background: rgb(238, 238, 238);
  display: block;
  border-radius: 5px;
  box-shadow: -1px 2px 3px rgba(0,0,0,0.2);
  .section-labels {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 20px 0;
    div {
      h3 {
        margin-top: -5px;
      }
      .set-goals-btn,
      .enter-results-btn {
        background: rgb(24, 132, 255);
        color: #fff;
        border-radius: 3px;
        padding: 3px 12px;
        font-weight: 700;
        font-size: 13px;
        text-transform: uppercase;
      }
      .set-goals-btn {
        display: inline-block;
        margin-right: 16px;
      }  
      .enter-results-btn {
        display: inline-block;
        margin-right: 30px;
      }  
    }
    h5 {
      display: inline-block;
      span {
        color: rgb(147, 147, 255);
        margin-left: 10px;
      }
    }
  }
  .goal-container {
    display: inline-block;
    margin: 0 20px 0 0;
    .goal-tile {
      // background: lightgray;
      padding: 8px;
      // height: 50px;
      width: 200px;
      border-radius: 5px;
      .label {
        text-align: center;
        color: #fff;
        font-weight: 900;
        font-size: 10px;
        letter-spacing: 2px;
        margin-bottom: 3px;
      }
      .data-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        font-size: 26px;
        // .percent {
        //   // display: inline-block;
        // }
        // .accum {
        //   // display: inline-block;
        // }
      }  
    }
  }
  .water {
      // background: linear-gradient(to right, rgb(23, 189, 245), rgb(87, 213, 255));
      background: rgb(23, 189, 245);
    }
    .miles {
      background: orange;
      // background: linear-gradient(black, gray)
    }
    .minutes {
      background: purple;
      // background: linear-gradient(black, gray)
    }
    .meals {
      background: rgb(4, 139, 76);
      // background: linear-gradient(black, gray)
    }
}

</style>