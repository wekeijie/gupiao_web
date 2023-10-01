<template>
      <div class="tab-box">
    <div class="tablist">
      <ul class="tabs-period">
        <li v-for='(period,inx) in PeriodList.Content' :key='inx' :class='{active : TabTextIndex == inx}' @click='ChangeChartTab(period.Name,inx)'>{{period.Name}}</li>
      </ul>
    </div>
    
  </div>  
</template>
<script setup>
import '../../assets/style/hqiconfont.css'
import {ref} from 'vue'
const PeriodList = ref({Title:'分时',Content:[            
          {Name:"分时",Value:1},
          {Name:"五日",Value:5},
          {Name:"日线",Value:0},
          {Name:"周线",Value:1},
          {Name:"月线",Value:2},
          // {Name:"年线",Value:3},
          // {Name:"1分钟",Value:4},
          {Name:"5分钟",Value:5},
          // {Name:"15分钟",Value:6},
          // {Name:"30分钟",Value:7},
          // {Name:"60分钟",Value:8}
        ]})
const TabTextIndex = ref(0)
const IsMinute = ref(true)
const IsPeriod = ref(false)  //周期
const emit = defineEmits(['dialogEmit'])

const ChangeChartTab = (name,index) =>{
    PeriodList.Title = name;
    if(PeriodList.Title == "分时" || PeriodList.Title == "五日"){
        IsMinute.value = true;
    }else{
        IsMinute.value = false;
    }
    IsPeriod.value = false;
    TabTextIndex.value = index;
    emit('ChangeChartTab',name,index)
    // this.$emit('ChangeChartTab',name,index);
}

</script>

<style lang="less">
  body,#app{
    height: 100%;
    width: 100%;
  }
  html,body{
    font: 62.5% "PingFang-SC-Regular", 'Microsoft Yahei';
  }
  .active{
    color: #000 !important;
  }
  .liactive{
    background-color: #ececec;
    height: 34px;
    color: hsl(210, 74%, 49%);
  }
  .tab-box{
    .tablist{
      width: 100%;
      height: 3.4rem;
      // border-top: 1px solid #ececec;
      >ul{
        display: flex;
        width: 100%;
        height: 3.4rem;
        list-style-type: none;
        // border-bottom: 1px solid #cccccc;
        >li{
          position:relative;
          flex: 1;
          height: 3.4rem;
          line-height: 3.4rem;
          font-size: 1.5rem;
          text-align: center;
          color: #666666;
          // border-right: 1px solid #cccccc;
          .tabs-period{
            position: absolute;
            top: 3.5rem;
            z-index: 2;
            width: 7rem;
            // background: #ffffff;
            box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.6);
            >li{
              display: block;
              line-height: 3.5rem;
              font-size: 1.4rem;
              // border-bottom:1px solid #ececec;
              color: #ffffff;
            }
          }
          .hq-icon{
            font-size: 20px;
          }
        }
        >li:last-child{
          border-right:none;
        }
      }
    }
    .phoneRight { 
      position: absolute;
      top: 3.5rem;
      z-index: 2;
      margin-top: 0;
      width: 7rem;  
      height: auto;
      background: #ffffff;
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.6);
      li {
        line-height: 37px; 
        font-size: 1.4rem;
        text-align: center;
        border-bottom:1px solid #ececec;
      }
      li.active {
        color: #217cd9;
        background-color: #ffffff;
      }
      .phone-tilte{
        margin-top: 0!important;
        line-height: 3rem;
        background-color: #ececec;
      }
    } 
    .indexWrap{
      width: 9rem; 
      li{
        padding-left: 0.8rem;
        box-sizing: border-box;
        text-align: left;
      }
    }
  }
  
</style>