import request from "@/utils/request";

export const listApi = () => {
  return request.get("recharge-type/list");
};

export const putApi = (data) => {
  return request.post("recharge/put", data);
};

export const getRechargeApi = (page, status) => {
  return request.get("recharge/list?page=" + page + "&status=" + status);
};

export const getMunterApi = (orderid) => {
  return request.get("recharge/manually/info?orderid=" + orderid);
};
