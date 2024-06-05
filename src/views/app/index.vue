<template>
  <div class="container">
    <img src="@/assets/static/png-logo.png" alt="中金澳融" class="logo" />
    <div class="title mt-n3">中金澳融</div>
    <div class="version">
      1.2.1 （Build 1.2.1）<br />最后更新:2024-05-24 15:00:10
    </div>
    <a href="/central_gold.apk" class="button" v-if="isAndroid">下载 App</a>

    <div v-else-if="isIOS && isSafari">
      <a href="/ios_zj.mobileconfig" class="button d-block bg-red"
        >第一步安装描述文件</a
      >
    </div>
    <a v-else class="button bg-red">请使用Safari浏览器访问本页面.</a>
    <div class="note">如果遇到下载失败问题，请删除原APP后重新下载</div>
  </div>
  <div class="patterns">
    <div class="pattern" style="background-color: #ff8a65"></div>
    <div class="pattern" style="background-color: #4caf50"></div>
    <div class="pattern" style="background-color: #1e88e5"></div>
    <div class="pattern" style="background-color: #e53935"></div>
  </div>
  <div class="container summary pb-15 text-left" v-if="isIOS && isSafari">
    <h4>中金澳融iOS安装步骤说明</h4>
    <p>点击【第一步安装描述文件】然后点击【允许】完成下载</p>

    <img src="@/assets/app/1.png" alt="中金澳融" />
    <img src="@/assets/app/2.png" alt="中金澳融" />
    <img src="@/assets/app/3.png" alt="中金澳融" />
    <p>
      返回桌面打开【设置】找到【已下载描述文件】然后点击右上角【安装】根据提示完成安装
    </p>
    <img src="@/assets/app/4.png" alt="中金澳融" />
    <img src="@/assets/app/5.png" alt="中金澳融" />
    <img src="@/assets/app/6.png" alt="中金澳融" />
    <img src="@/assets/app/7.png" alt="中金澳融" />
    <img src="@/assets/app/8.png" alt="中金澳融" />
    <p>返回桌面即可看到【中金澳融】APP</p>
    <img src="@/assets/app/9.png" alt="中金澳融" />
  </div>
</template>
<script setup>
import Cookies from "js-cookie";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  detectDeviceAndBrowser();
  if (route.query.ref) {
    Cookies.set("referrer", route.query.ref, { expires: 7 });
  }
});

const isIOS = ref(false);
const isSafari = ref(false);
const isAndroid = ref(false);

const detectDeviceAndBrowser = () => {
  const userAgent = navigator.userAgent;

  isIOS.value = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  isAndroid.value = /android/i.test(userAgent);

  if (isIOS.value) {
    isSafari.value = /^((?!chrome|android).)*safari/i.test(userAgent);
  }
};
</script>
<style scoped>
.summary img {
  width: 100% !important;
}
.container {
  text-align: center;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 50px;
}
.logo {
  width: 100px;
  margin: 0 auto;
}
.title {
  font-size: 24px;
  color: #333;
  margin: 20px 0;
}
.version {
  color: #999;
  margin: 10px 0;
}
.button {
  background-color: #4caf50;
  color: white;
  padding: 10px 0px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin: 20px 0;
  font-size: 16px;
  text-align: center;
}
.note {
  color: #999;
  font-size: 14px;
}
.patterns {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.pattern {
  width: 50px;
  height: 50px;
}
</style>
