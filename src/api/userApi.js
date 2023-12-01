import request from "@/utils/request";

export const userInfoApi = () => {
  return request.get("home/index");
};

export const infoApi = () => {
  return request.get("user/info");
};

export const changeNameApi = (info) => {
  return request.post("user/change-name", info);
};

export const changeMobileApi = (info) => {
  return request.post("user/change-mobile", info);
};

export const bindEmailApi = (info) => {
  return request.post("user/bind-email", info);
};

export const changePasswordApi = (info) => {
  return request.post("user/change-password", info);
};

export const changePayPasswordApi = (info) => {
  return request.post("user/change-pay-password", info);
};

export const taskApi = (type) => {
  return request.get("user/task?type=" + type);
};

export const logoutApi = () => {
  return request.get("user/logout");
};

export const childApi = () => {
  return request.get("user/child-info");
};
