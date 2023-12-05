import { registerApi, loginApi } from "@/api/registerApi";
import { smsSendApi, sendEmailApi } from "@/api/smsApi";
import {
  userInfoApi,
  infoApi,
  changeNameApi,
  changeMobileApi,
  bindEmailApi,
  changePasswordApi,
  changePayPasswordApi,
  taskApi,
  logoutApi,
  childApi,
} from "@/api/userApi";
import { setItem, getItem, removeAllItem, removeItem } from "@/utils/storage";
import router from "@/router";

export default {
  namespaced: true,
  state: () => ({
    token: getItem("token") || "",
    code: getItem("code") || "",
    info: {},
    userInfo: {},
    task: {},
    child: {
      child_total: 0,
      commission: 0,
    },
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem("token", token);
    },
    setInfo(state, info) {
      state.info = info;
      state.code = info.code;
      setItem("code", info.code);
    },
    setUserInfo(state, rsp) {
      state.userInfo = rsp;
    },
    setTask(state, rsp) {
      state.task = rsp;
    },
    setClid(state, rsp) {
      state.child = rsp;
    },
  },
  actions: {
    register(context, info) {
      return registerApi(info);
    },
    sendSms(context, mobile) {
      return smsSendApi(mobile);
    },
    login(context, data) {
      return new Promise((resolv, reject) => {
        loginApi(data).then((d) => {
          context.commit("setToken", d.token);
          resolv(d);
        });
      }).catch((e) => {
        reject(e);
      });
    },
    async userInfo(context) {
      const rsp = await userInfoApi();
      context.commit("setInfo", rsp);
    },
    logout(context) {
      if (context.state.token) {
        logoutApi();
        this.commit("user/setToken", "");
        this.commit("user/setInfo", {});
        removeAllItem();
      }
      router.push("Login");
    },
    async getInfo(content) {
      const rsp = await infoApi();
      content.commit("setUserInfo", rsp);
    },
    changeName(content, info) {
      return changeNameApi(info);
    },
    changeMobile(content, info) {
      return changeMobileApi(info);
    },
    sendEmailCode(content, email) {
      return sendEmailApi({ email: email });
    },
    changEmail(content, info) {
      return bindEmailApi(info);
    },
    changePassword(content, info) {
      return changePasswordApi(info);
    },
    changePayPassword(content, info) {
      return changePayPasswordApi(info);
    },
    async getTask(content, type) {
      const rsp = await taskApi(type);
      content.commit("setTask", rsp);
    },
    clearTask(content) {
      content.commit("setTask", { amount: 0, list: [] });
    },
    async getChild(content) {
      const rsp = await childApi();
      content.commit("setClid", rsp);
    },
  },
};
