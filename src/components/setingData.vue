<template>
  <div class="text-center">

    <div class="flex-wrap text-primary">
      <div v-for="month in   monthlist  " :key="month" class="calendar-month mt-24 ">
        <div class="date_year text-center">{{ month.date }}</div>
        <ul class="flex-wrap text-sub">
          <li class="text-tip">日</li>
          <li class="text-tip">一</li>
          <li class="text-tip">二</li>
          <li class="text-tip">三</li>
          <li class="text-tip">四</li>
          <li class="text-tip">五</li>
          <li class="text-tip">六</li>

          <li v-for="item in month.week" :key="item" data-id="">
            <div></div>
          </li>

          <li v-for="item in   month.days  " :key="item" :data-id="item.date" @click="ClickItem(item)" class="date_list">
            <div class="relative flexCenter"
              :class="item.selected ? 'isSelected' : nowDay == item.day ? 'is_today' : 'no_selected'">
              <p class="flexCenter">{{ item.day }}</p>
            </div>
            <p v-show="item.day >= nowDay || item.selected" class="join_number">+{{ item.price }}</p>
          </li>

        </ul>
      </div>
    </div>

  </div>
</template>
<script setup>
import moment from "moment"

import { defineComponent, reactive, customRef, toRefs, onMounted, shallowReactive, ref, watch } from 'vue'

const selectedDate = ref()

const isShow = ref(false);
const monthlist = ref([]);
const nowDay = ref(moment().date())


onMounted(() => {


  for (let i = 0; i < 1; i++) { //循环获取几个月
    let firstdate = moment().add(i, 'month').startOf('month');
    console.log(nowDay.value, 'onMounted')
    let enddate = moment().add(i, 'month').endOf('month');
    let date = firstdate.toDate();
    let days = [];
    for (let j = 0; j < enddate.diff(date, 'days') + 1; j++) {
      let date1 = moment(date).add(j, 'day').toDate();
      days.push({
        date: moment(date1).format('YYYY-MM-DD'),
        week: moment(date1).day(),
        day: moment(date1).date() + '',
        hover: false,
        selected: false,
        price: '2'
      })
    }

    monthlist.value.push({
      date: firstdate.format('YYYY 年 MM 月'),
      days: days,
      week: firstdate.day(),
    }
    );
  }

  console.log(monthlist);

})

const ClickItem = (day) => {
  // if (nowDay.value > day.day) return
  day.selected = !day.selected;
}


const ClickWeek = (month, week) => {
  for (let j = 0; j < month.days.length; j++) {
    if (month.days[j].week === week) {
      month.days[j].selected = !month.days[j].selected;
    }
  }
}


const ClickReset = () => {
  for (let i = 0; i < monthlist.value.length; i++) {
    for (let j = 0; j < monthlist.value[i].days.length; j++) {
      let day1 = monthlist.value[i].days[j];
      day1.selected = false;
      day1.hover = false;
    }
  }
}


</script>
<style lang="scss" scoped>
.is_today {
  p {
    color: #fb5c39 !important;
    border: solid 0.5px #fb5c39;
    background: none !important;
  }
}


.calendar-month .isSelected {
  p {
    color: #fff !important;
    background-image: url('../assets/img/activeBg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }
}

.date_list {
  height: 52px;
}

.relative {
  width: 100%;
  margin-top: 10px;

  p {
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    color: #000;
    width: 25px;
    height: 25px;
  }

}

.no_selected {
  p {
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
    color: #000;
    background: rgba($color: #bfbfbf, $alpha: .5);
    width: 25px;
    height: 25px;
  }
}

.calendar-month .isHover {
  background: #6f90e0 !important;
  color: #fff !important;
}

.join_number {
  line-height: 20px;
  margin: auto;
  color: #fb5c39;
  font-size: 10px;
}

.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}


ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

ol,
ul {
  list-style: none;
}

body,
div,
li,
p,
ul {
  margin: 0;
  padding: 0;
}

div {
  display: block;
}

.flex-wrap {
  flex-wrap: wrap;
  display: flex;
}


.text-primary {
  width: 100%;
  color: #333;
}

.text-primary,
.text-sub,
.text-tip {
  line-height: 1.5;
}

.text-center {
  text-align: center;
}

.date_year {
  width: 100%;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 700;
  color: #000;
  text-align: center;
  padding: 10px 0;
}

.text-sub {
  color: #666;
}

.text-tip {
  background: #efefef;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 700;
  color: #000;
}

.color-red {
  color: #f5222d;
}


.absolute {
  position: absolute;
}

.calendar-month {
  // border: 1px solid #d0d0d0;
}

.calendar-month ul {
  width: 100%;
  padding: 1px;
}

.calendar-month li {
  text-align: center;
  width: 14.2%;
  // height: 36px;
  line-height: 36px;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  //border: 1px dashed #8c939d;
}

.calendar-month li span {
  font-size: 8px;
  bottom: -12px;
  left: -2px;
  text-align: center;
  transform: scale(0.6);
}

.calendar-month .isOver {
  background-color: #f0f0f0;
  color: #999;
}
</style>
  