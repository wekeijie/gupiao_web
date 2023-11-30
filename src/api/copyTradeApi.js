import request from "@/utils/request";

export const partnerListApi = () => {
  return request.get("copy-trade/partner");
};

export const infoApi = (id) => {
  return request.get("copy-trade/info?id=" + id);
};

export const rookieApi = (id) => {
  return request.get("copy-trade/rookie?id=" + id);
};

export const applyApi = (data) => {
  return request.post("copy-trade/apply", data);
};

export const oneKeyApi = (id) => {
  return request.get("copy-trade/one-key?id=" + id);
};
