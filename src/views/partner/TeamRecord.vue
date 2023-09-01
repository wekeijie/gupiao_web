<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>团队记录</template>
        </page-header>

        <div class="team-cont">

            <div class="flexBetween">




            </div>





            <div class="new-box" v-if="1 == 1">

                <no-data class="no-data-cont"></no-data>
            </div>


        </div>




    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import NoData from '../../components/noData.vue'
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()





</script>
<style lang="scss" scoped>
.team-cont {
    width: 100%;
    min-height: calc(100vh - 50px);
    background-color: #f1f1f1;
}

.no-data-cont {
    padding-top: 40%;
}
</style>
  