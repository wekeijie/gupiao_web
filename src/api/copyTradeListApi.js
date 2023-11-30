import request from "@/utils/request";

export const listApi = (status) => {
  return request.get("copy-trade-list/list?status=" + status);
};

export const cancelApi = (id) => {
  return request.post("copy-trade-list/cancel", id);
};

export const showApi = (order_id) => {
  return request.get("copy-trade-list/show?order_id=" + order_id);
};

export const tradeListApi = (id) => {
  return request.get("copy-trade-list/trade-record?id=" + id);
};
