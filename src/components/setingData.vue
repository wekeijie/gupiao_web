<template>
    <div class="text-center">
  
      <div
        class="flex-wrap text-primary"
        @mouseup="Mouseup"
      >
        <div
          v-for="month in monthlist"
          :key="month"
          class="calendar-month mt-24 "
        >
          <div class="pb-8 text-14 text-center">{{ month.date }}</div>
          <ul class="flex-wrap text-sub">
            <li
              class="text-tip"
              @click="ClickWeek(month,0)"
            >日</li>
            <li
              class="text-tip"
              @click="ClickWeek(month,1)"
            >一</li>
            <li
              class="text-tip"
              @click="ClickWeek(month,2)"
            >二</li>
            <li
              class="text-tip"
              @click="ClickWeek(month,3)"
            >三</li>
            <li
              class="text-tip"
              @click="ClickWeek(month,4)"
            >四</li>
            <li
              class="text-tip"
              @click="ClickWeek(month,5)"
            >五</li>
            <li
              class="text-tip"
              @click="ClickWeek(month,6)"
            >六</li>
  
            <li
              v-for="item in month.week"
              :key="item"
              data-id=""
            >
              <div></div>
            </li>
  
            <li
              v-for="item in month.days"
              :key="item"
              :data-id="item.date"
              @click="ClickItem(item)"
              @mousedown="Mousedown(item)"
              @mouseover="Mouseover(item)"
              @mouseup="Mouseup"
            >
              <div
                class="relative"
                :class="{'isHover':item.hover,'isSelected':item.selected}"
              >
                <p class="">{{ item.day }}</p>
                <span
                  v-show="item.day > nowDay"
                  class="absolute color-red"
                >{{item.price}}</span>
              </div>
            </li>
  
          </ul>
        </div>
      </div>
  
    </div>
  </template>
  <script setup>
  import moment from "moment"
  
  
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  
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
          price: '￥2000'
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
    console.log(day, 'day12312')
    if (nowDay.value > day.day) return
    day.selected = !day.selected;
  }
  
  let date_begin = ''
  const Mousedown = (day) => {
    date_begin = day.date;
  }
  
  const Mouseover = (day) => {
    if (date_begin != '') {
      for (let i = 0; i < monthlist.value.length; i++) {
        for (let j = 0; j < monthlist.value[i].days.length; j++) {
          let day1 = monthlist.value[i].days[j];
          if ((day1.date >= day.date && day1.date <= date_begin) || (day1.date <= day.date && day1.date >= date_begin)) {
            day1.hover = true;
          } else {
            day1.hover = false;
          }
        }
      }
    }
  }
  const Mouseup = () => {
    date_begin = ''
    for (let i = 0; i < monthlist.value.length; i++) {
      for (let j = 0; j < monthlist.value[i].days.length; j++) {
        let day1 = monthlist.value[i].days[j];
        if (day1.selected && day1.hover) {
          day1.selected = false;
          day1.hover = false;
        } else if (!day1.selected && day1.hover) {
          day1.selected = true;
          day1.hover = false;
        }
      }
    }
  }
  
  const ClickWeek = (month, week) => {
    return
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
  
  .mt-24 {
    // margin-top: 24px;
  }
  
  .ml-16 {
    // margin-left: 16px;
  }
  
  .text-primary {
    width: 400px;
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
  
  .text-14 {
    font-size: 14px;
    line-height: 1.5;
  }
  
  .pb-8 {
    padding-bottom: 8px;
  }
  
  .text-sub {
    color: #666;
  }
  
  .text-tip {
    background-color: #f5f7fa;
    color: #999;
  }
  
  .color-red {
    color: #f5222d;
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  
  .calendar-month {
    border: 1px solid #d0d0d0;
  }
  
  .calendar-month ul {
    width: 100%;
    padding: 1px;
  }
  
  .calendar-month li {
    text-align: center;
    width: 14.2%;
    height: 36px;
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
  .calendar-month .isSelected {
    background: #b3c8ff;
    color: #162d53;
  }
  .calendar-month .isHover {
    background: #6f90e0 !important;
    color: #fff !important;
  }
  .calendar-month .isOver {
    background-color: #f0f0f0;
    color: #999;
  }
  //.calendar-month li:nth-of-type(7n), .calendar-month li:nth-of-type(7n - 1) {
  //  background: #f5f7fa;
  //}
  //.calendar-month li:hover{
  //  background-color: #f0f0f0;
  //  color: #999;
  //}
  </style>
  