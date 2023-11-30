import request from "@/utils/request";

export const listApi = () => {
  return request.get("helps/list");
};

export const showApi = (id) => {
  return request.get("helps/show?id=" + id);
};

export const tradeApi = () => {
  return request.get("helps/trade");
};

export const compayApi = () => {
  return request.get("helps/compay");
};
