import request from "@/utils/request";

export const listApi = () => {
  return request.get("agen/list");
};

export const infoApi = () => {
  return request.get("agen/info");
};

export const subUsersApi = (page = 1) => {
  return request.get("agen/sub-users?page=" + page);
};

export const subContractApi = (page = 1) => {
  return request.get("agen/sub-contract?page=" + page);
};

export const subCommissionApi = (page = 1, date = "") => {
  return request.get("agen/sub-commissions?page=" + page + "&date=" + date);
};

export const subDeliverApi = (page = 1, date = "") => {
  return request.get("agen/sub-deliver?page=" + page + "&date=" + date);
};
