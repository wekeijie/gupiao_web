<template>
    <div>
        <page-header>
            <template v-slot:headerCenter>明星投资者计划</template>
        </page-header>

        <div class="invite-cont">
            <img src="../../assets/img/longPicture/startAuthor.png" alt="">
        </div>

        <div class="bottom-btn flexCenter" @click="overlay = true">
            <p>立即申请
            </p>
        </div>


        <v-overlay v-model="overlay" class="align-center justify-center">
            <v-sheet style="" width="350px" rounded="lg ">

                <div class="prop-title flexEnd">
                    <p>弹窗标题</p>
                    <img src="../../assets/img/close.png" alt="" @click="overlay = false">
                </div>
                <div>
                    <v-text-field v-model="model" density="default" variant="underlined" clearable hide-details
                        label="操盘师名字"></v-text-field>
                    <v-text-field v-model="model" variant="underlined" clearable hide-details label="就职单位"></v-text-field>
                    <v-text-field v-model="model" variant="underlined" clearable hide-details
                        label="投资年数（单位：年）"></v-text-field> <v-text-field v-model="model" variant="underlined" clearable
                        hide-details label="特别说明"></v-text-field>

                    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar"
                        prepend-icon="mdi-camera" variant="underlined" hide-details label="上传图片"></v-file-input>

                </div>
                <div class="btn-box">

                    <v-btn block color="#e61919">提交</v-btn>
                </div>
            </v-sheet>
        </v-overlay>




    </div>
</template>
  
<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"
import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const overlay = ref(true)
const model = ref(123123)

const rules = ref([
    value => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    },
])

</script>
<style lang="scss" scoped>
.btn-box {
    padding: 15px 0 30px;

    ::v-deep .v-btn__content {
        color: #fff !important;
    }
}

.v-overlay {

    .v-sheet {
        padding: 17px;
    }

    .prop-title {
        p {
            width: 50%;
            font-size: 1rem;
            font-weight: 700;
        }

        img {
            width: 22px;
        }
    }

    ::v-deep .v-input__control {
        padding: 8px 0;

        .v-field {
            padding-top: 10px;
        }

        .v-field--active .v-label.v-field-label {
            font-size: 20px;
            color: #000;
            // padding: 10px 0 5px;
        }
    }


}





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