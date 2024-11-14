import axios from "axios";
import { httpErrorFormat } from "./helper";
import { store } from "@/store";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

const excludedUrls = ["market/buy-sell-five"];

service.interceptors.request.use(
  (config) => {
    const shouldLoad = !excludedUrls.some((url) => config.url.startsWith(url));

    if (shouldLoad) {
      store.dispatch("loadding/show");
    }
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`;
    }
    return config;
  },
  (error) => {
    store.dispatch("loadding/hide");
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    store.dispatch("loadding/hide");
    const { code, data, message } = response.data;
    if (code === 0) {
      return data;
    } else {
      store.dispatch("snackbar/warning", {
        active: true,
        body: message,
      });
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    store.dispatch("loadding/hide");
    if (
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      store.dispatch("user/logout");
      store.dispatch("snackbar/warning", {
        active: true,
        body: "请重新登录!",
      });
    } else {
      store.dispatch("snackbar/show", {
        active: true,
        body: httpErrorFormat(error),
        color: "error",
      });
    }

    return Promise.reject(new Error(error));
  }
);

export default service;
