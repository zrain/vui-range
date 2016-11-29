<style>
  body {
    background-color: #e1e1e1;
  }
  .vui-range {
  }
  .wrapper {
    margin-top: 100px;    
  }
  .wrapper p {
    width: 400px;
    margin: 0 auto;
    padding: 20px 0;
  }
  /* range的样式 */
  .vui-range .range {
    
  }
  /* range-btn样式 */
  .vui-range .range-btn:before {

  }
</style>

<template>
  <div class="wrapper">
    <!-- <div class="demo-group">
      <h4>Demo1: 默认情况</h4>
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tr>
          <td>:max</td>
          <td>100</td>
        </tr>
        <tr>
          <td>:min</td>
          <td>0</td>
        </tr>
        <tr>
          <td>:step</td>
          <td>1</td>
        </tr>
      </table>
    </div> -->
    <p>
      <span>Demo1: 默认情况</span><br/>
      <span>默认  max  =  100</span><br/>
      <span>默认  min  =  0</span><br/>
      <span>默认  step =  1</span><br/>
      <span>
        当前值: {{rangeData}}
      </span><br/>
    </p>
    <p>
      <vui-range class="vui-range"
        :onchange="handleVuiRangeChange"
        :value="rangeData"
      >
      </vui-range>
    </p>
    <p>
      <span>Demo2:</span><br/>
      <span>Max= 60</span><br/>
      <span>Min= - 60</span><br/>
      <span>Default Value = 30</span><br/>
      <span>
        当前值: {{rangeData1}}
      </span>
    </p>
    <p>
      <vui-range class="vui-range"
        :onchange="handleVuiRange1Change"
        :value="rangeData1"
        :max="60"
        :min="-60"
      >
      </vui-range>
    </p>
  </div>
</template>

<script>
  import vuiRange from "../vui-range/vui-range.vue";
  export default {
    components: {
      "vui-range": vuiRange
    },
    computed() {
      let self = this;
      setTimeout(function(){
        self.rangeData = 10;
      },3000);
    },
    data: function(){
      return {
        rangeData: 0,
        rangeData1: 30,
      }
    },
    methods: {
      handleVuiRangeChange( result ){
        this.rangeData = result;
      },
      handleVuiRange1Change( result ){
        this.rangeData1 = result;
      }
    }
  }
</script>