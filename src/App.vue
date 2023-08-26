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
</style>
