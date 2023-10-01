<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>明星投资者计划</template>
    </page-header>

    <div class="invite-cont">
      <img src="../../assets/img/longPicture/startAuthor.png" alt="" />
    </div>

    <div class="bottom-btn flexCenter" @click="overlay = true">
      <p>立即申请</p>
    </div>

    <v-overlay v-model="overlay" class="align-center justify-center">
      <v-sheet style="" width="350px" rounded="lg ">
        <div class="prop-title flexEnd">
          <p>明星投资者申请</p>
          <img
            src="../../assets/img/close.png"
            alt=""
            @click="overlay = false"
          />
        </div>
        <div>
          <v-text-field
            v-model="inputData.name"
            density="default"
            variant="underlined"
            clearable
            hide-details
            label="操盘师名字"
          ></v-text-field>
          <v-text-field
            v-model="inputData.company"
            variant="underlined"
            clearable
            hide-details
            label="就职单位"
          ></v-text-field>
          <v-text-field
            v-model="inputData.year"
            variant="underlined"
            clearable
            hide-details
            label="投资年数（单位：年）"
          ></v-text-field>
          <v-text-field
            v-model="inputData.summary"
            variant="underlined"
            clearable
            hide-details
            label="特别说明"
          ></v-text-field>

          <v-file-input
            :rules="rules"
            v-model="fileModel"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="请上传个人照片"
            prepend-icon="mdi-camera"
            variant="underlined"
            hide-details
            @update:modelValue="uploadFile"
            label="上传图片"
          ></v-file-input>
        </div>
        <div class="btn-box">
          <v-btn block color="#e61919" @click="submitHandle">提交</v-btn>
        </div>
      </v-sheet>
    </v-overlay>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  nextTick,
} from "vue";
import PageHeader from "../../components/topWrap.vue";
import { useRouter, useRoute } from "vue-router";
import { store } from "@/store";
const $router = useRouter();
const $route = useRoute();
const overlay = ref(false);
const model = ref(123123);
const fileModel = ref();

const inputData = reactive({
  name: "",
  company: "",
  year: 0,
  summary: "",
  avatar: "",
});

const submitHandle = () => {
  if (!areObjectPropertiesEmpty(inputData)) {
    store.dispatch("snackbar/warning", {
      active: true,
      body: "所有内容不能为空",
    });
    return;
  }
  store.dispatch("trade/apply", inputData).then(() => {
    store.dispatch("snackbar/success", {
      active: true,
      body: "申请成功，请等待审核！",
    });
    overlay.value = false;
  });
};
const areObjectPropertiesEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        return false; // 如果任何属性为空，返回false
      }
    }
  }
  return true; // 所有属性都不为空，返回true
};
const uploadFile = (file) => {
  let formData = new FormData();
  formData.append("file", file[0]);
  store.dispatch("trade/uploadFile", formData).then((d) => {
    inputData.avatar = d.filename;
    store.dispatch("snackbar/success", {
      active: true,
      body: "上传成功",
    });
  });
};

const rules = ref([
  (value) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      "Avatar size should be less than 2 MB!"
    );
  },
]);
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
      width: 63%;
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
