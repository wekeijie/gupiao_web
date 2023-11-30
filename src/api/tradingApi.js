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

export const endListApi = () => {
  return request.get("market-trade/end-list");
};

export const buyApi = (data) => {
  return request.post("market-trade/buy", data);
};

export const sellApi = (data) => {
  return request.post("market-trade/sell", data);
};
