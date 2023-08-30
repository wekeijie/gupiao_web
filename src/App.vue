<template>
  <router-view />
</template>

<script setup>
  //
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.flexBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flexEnd {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexAroud {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flexStart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}


.roseColor {
  color: red;
}

.pinkColor {

  color: rgb(251, 92, 57);
}

.redBg {
  background-color: #fb5c39 !important;
  color: #fff !important;
}

.fallColor {
  color: rgb(26, 173, 25);

}

.blueColor {
  color: rgb(9, 187, 7);
}

.grayBackgroud {
  background: #f6f6f6;
}
</style>
