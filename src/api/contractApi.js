import request from "@/utils/request";

export const typeApi = () => {
  return request.get("contract-type/list");
};

export const limitApi = (type) => {
  return request.get("contract-limit/list?type=" + type);
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

export const expandApi = (data) => {
  return request.post("contract/expand", data);
};

export const appendApi = (data) => {
  return request.post("contract/append", data);
};
export const withdrawalApi = (data) => {
  return request.post("contract/withdrawal", data);
};

export const stopApi = (data) => {
  return request.post("contract/stop", data);
};

export const detailApi = (order_id) => {
  return request.get("contract/detail?order_id=" + order_id);
};

export const amountListApi = (order_id) => {
  return request.get("contract/amount-list?order_id=" + order_id);
};

export const allListApi = (order_id) => {
  return request.get("contract/all-list?order_id=" + order_id);
};

export const orderListApi = (order_id) => {
  return request.get("contract/order-list?order_id=" + order_id);
};
