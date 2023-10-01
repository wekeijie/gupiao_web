import request from "@/utils/request";

export const applyApi = (info) => {
  return request.post("withdrawal/apply", info);
};

export const listApi = (page, status) => {
  return request.get("withdrawal/list?status=" + status + "&page=" + page);
};
