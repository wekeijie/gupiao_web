import {
  ref
} from "vue"

export const usernameRules = ref([

  (v) => !!v || '必须输入账号!',

  (v) => (v && v.length <= 12 && v.length >= 6) || '账号的长度为6到12个字符!',

])

export const phoneRoules = ref([

  (v) => !!v || '必须输入手机号!',

  (v) => (v && v.length <= 12 && v.length >= 6) || '请输入正确手机号',

])
export const codeRoules = ref([

  (v) => !!v || '必须输入验证码!',

  (v) => (v && v.length <= 12 && v.length >= 1) || '请输入验证码',

])

export const emailRoules = ref([

  (v) => !!v || '必须输入邮箱账号!',

  (v) => (v && v.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1>= 6) || '请输入正确邮箱'

])



export const passwordRules = ref([

  (v) => !!v || '必须输入密码!',

  (v) => (v && v.length <= 12 && v.length >= 6) || '密码的长度为6到12个字符!',

])
