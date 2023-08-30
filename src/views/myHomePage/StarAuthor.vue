<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>明星投资者计划</template>
        </page-header>

        <div class="invite-cont">
            <img src="../../assets/img/longPicture/startAuthor.png" alt="">
        </div>

        <div class="bottom-btn flexCenter">
            <p>立即申请
            </p>
        </div>




    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()

</script>
<style lang="scss" scoped>
.bottom-btn {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 18px 15px;
    background: #fff;
    text-align: cente;

    p {
        text-align: center;
        background-color: #e61919;
        color: #fff;
        height: 45px;
        line-height: 45px;
        width: 80%;
        font-size: 15px;
        border-radius: 25px;
    }

}

.invite-cont {
    padding: 15px 0 76px;

    img {
        width: 100%;
    }
}
</style>