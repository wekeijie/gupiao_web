import request from "@/utils/request";

export const marketApi = () => {
  return request.get("market/index");
};

export const mainIndexApi = () => {
  return request.get("market/main-index");
};

export const boardListApi = (cate, page = 1, limit = 20) => {
  return request.get(
    "market/board-list?cate=" + cate + "&limit=" + limit + "&page=" + page
  );
};

export const boardStockListApi = (cate, page = 1, limit = 20) => {
  return request.get(
    "market/board-stock-list?cate=" + cate + "&limit=" + limit + "&page=" + page
  );
};

export const stockKlineNewApi = (symbol, klt) => {
  return request.get("market/stock-kline?symbol=" + symbol + "&klt=" + klt);
};

export const stockInfoNewApi = (symbol) => {
  return request.get("market/stock-info?symbol=" + symbol);
};

export const stockBuySellFiveApi = (symbol) => {
  return request.get("market/buy-sell-five?symbol=" + symbol);
};

export const stockFenShiList = (symbol) => {
  return request.get("market/stock-fen-shi?symbol=" + symbol);
};

export const listApi = (type, page) => {
  return request.get("market/list?type=" + type + "&page=" + page);
};

export const listDetailsApi = (code, page) => {
  return request.get("market/list/detail?code=" + code + "&page=" + page);
};

export const stockInfoApi = (symbol) => {
  return request.get("market/comprehensive?symbol=" + symbol);
};

export const searchApi = (keyword) => {
  return request.get("market/search?keyword=" + keyword);
};
