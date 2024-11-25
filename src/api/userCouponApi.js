import request from "@/utils/request";

export const listApi = (status, page) => {
  return request.get("user-coupon/list?status=" + status + "&page=" + page);
};

export const showApi = (order_id) => {
  return request.get("user-coupon/show?order_id=" + order_id);
};

export const logList = (page = 1) => {
  return request.get("user-coupon/log?page=" + page);
};

export const logShow = (order_id, page = 1) => {
  return request.get(
    "user-coupon/log-show?order_id=" + order_id + "&page=" + page
  );
};
