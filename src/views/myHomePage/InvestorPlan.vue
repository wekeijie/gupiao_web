<template>
  <page-header>
    <template v-slot:headerCenter>明星投资者计划</template>
  </page-header>
  <img src="@/assets/static/trade_bg_01_03.png" class="w-100" />
  <img src="@/assets/static/trade_bg_01_04.png" class="w-100" />
  <img src="@/assets/static/trade_bg_01_05.png" class="w-100" />
  <v-btn
    block=""
    color="white"
    class="fixed rounded-0 py-6 text-indigo-accent-2 text-subtitle-1"
    style="bottom: 0px"
    @click="dialog = true"
    >立即申请</v-btn
  >
  <v-dialog v-model="dialog" persistent width="1024">
    <v-card>
      <v-card-title>
        <span class="text-h6">明星投资者申请</span>
      </v-card-title>
      <v-card-text>
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
          type="number"
        ></v-text-field>
        <v-textarea
          label="简介"
          variant="underlined"
          auto-grow
          v-model="inputData.summary"
        ></v-textarea>
        <v-file-input
          :rules="rules"
          v-model="fileModel"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="请上传个人照片"
          variant="underlined"
          hide-details
          @update:modelValue="uploadFile"
          label="上传图片"
        ></v-file-input>
      </v-card-text>
      <v-card-actions>
        <v-row class="ma-0 pa-0">
          <v-col cols="6" class="px-0">
            <v-btn
              color="blue-darken-1"
              block=""
              variant="text"
              @click="dialog = false"
            >
              取消
            </v-btn>
          </v-col>
          <v-col cols="6" class="px-0">
            <v-btn
              color="blue-darken-1"
              block=""
              variant="text"
              @click="submitHandle"
            >
              提交
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import PageHeader from "../../components/topWrap.vue";
import { ref, reactive } from "vue";
import { store } from "@/store";
const dialog = ref(false);
const fileModel = ref();
const inputData = reactive({
  name: "",
  company: "",
  year: "",
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
    dialog.value = false;
    store.dispatch("snackbar/success", {
      active: true,
      body: "申请成功，请等待审核！",
    });
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
