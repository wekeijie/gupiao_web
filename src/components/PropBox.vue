<template>
  <div>
    <v-dialog
      v-model="isProp"
      persistent
      class="flexCenter"
    >

      <div class="prop-tips">
        <h1>温馨提示</h1>
        <div class="prop-cont">
          <h2>我司最新域名 zjcl5845.com zjcl6521.com zjcl7495.com请各位用户相互告知。 </h2>
          <p>我司入款账号因资金流水已达充值最大额度，不时更换收款账户，请需要充值的会员<span>请联系客服</span>，以每次网站充值页面所显示的银行卡为准，感谢您的支持与配合！</p>
        </div>
        <p class="prop-lab">所有解释权归本公司所有</p>
        <div
          class="prop-btn"
          @click="isProp=false"
        >好的，我知道了</div>
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
const props = defineProps({
  isProp: {
    type: Boolean,
    default: false
  }
}
)
const isProp = ref(props.isProp)

</script>
<style lang="scss" scoped>
.prop-tips {
  width: 100%;
  background: #fdfbfc;
  border-radius: 9px;
  h1 {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    letter-spacing: 2px;
    background-color: #dd5054;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    color: #fff;
    padding: 5px 0;
  }

  .prop-cont {
    margin: 25px 15px 25px 15px;
    font-size: 13px;
    line-height: 22px;
    background: #fff;
    padding: 10px;
    z-index: 9;
    overflow: hidden;
    max-height: 280px;
    overflow: auto;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    h2 {
      font-size: 13px;
      line-height: 22px;
    }
    p {
      margin-top: 5px;
      text-indent: 10px;
      font-size: 13px;
      line-height: 22px;
      span {
        color: #e03e2d;
      }
    }
  }
  .prop-lab {
    text-align: center;
    font-size: 12px;
  }
  .prop-btn {
    border-radius: 8px;
    border: none;
    background-color: #dd5054;
    line-height: 38px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    margin: 10px 10px 20px 20px;
  }
}
</style>
