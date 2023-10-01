import { ref } from "vue";

export const usernameRules = ref([
  (v) => !!v || "必须输入账号!",

  (v) => (v && v.length <= 12 && v.length >= 6) || "账号的长度为6到12个字符!",
]);

export const phoneRoules = ref([
  (v) => !!v || "必须输入手机号!",

  (v) => (v && v.length <= 12 && v.length >= 6) || "请输入正确手机号",
]);
export const codeRoules = ref([
  (v) => !!v || "必须输入验证码!",

  (v) => (v && v.length <= 12 && v.length >= 1) || "请输入验证码",
]);

export const emailRoules = ref([(v) => !!v || "必须输入邮箱账号!"]);

export const passwordRules = ref([
  (v) => !!v || "必须输入密码!",

  (v) => (v && v.length <= 6 && v.length >= 4) || "密码的长度为4个字符!",
]);
