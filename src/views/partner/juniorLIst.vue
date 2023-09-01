<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>下级列表</template>
        </page-header>
        <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>


        <div class="new-box" v-if="1 == 1">

            <no-data class="no-data-cont"></no-data>
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
.no-data-cont {
    padding-top: 40%;
}
</style>
  