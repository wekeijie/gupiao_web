import request from "@/utils/request";

export const getInfoApi = (code) => {
  return request.get("market/detail?symbol=" + code);
};

export const getDetailApi = (code) => {
  return request.get("market/getStockFenShi?symbol=" + code);
};

export const activeListApi = () => {
  return request.get("market-trade/list");
};

export const endListApi = (status = 0) => {
  return request.get("market-trade/end-list?status=" + status);
};

export const trustListApi = (status = 0) => {
  return request.get("market-trade/trust-list?status=" + status);
};

export const cancelOrderApi = (id) => {
  return request.post("market-trade/cancel", { order_id: id });
};

export const orderInfoApi = (id) => {
  return request.get("market-trade/order-info?order_id=" + id);
};

export const successListApi = () => {
  return request.get("market-trade/success-list");
};

export const buyApi = (data) => {
  return request.post("market-trade/buy", data);
};

export const sellApi = (data) => {
  return request.post("market-trade/sell", data);
};
