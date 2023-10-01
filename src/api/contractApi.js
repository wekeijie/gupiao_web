import request from "@/utils/request";

export const typeApi = () => {
  return request.get("contract-type/list");
};

export const limitApi = () => {
  return request.get("contract-limit/list");
};

export const createApi = (info) => {
  return request.post("contract/create", info);
};

export const listApi = (type) => {
  return request.get("contract/list?type=" + type);
};

export const minListApi = () => {
  return request.get("contract/min-list");
};
