import request from "@/utils/request";

export const getListApi = (page = 1) => {
  return request.get("activity/list?page=" + page);
};

export const getShowApi = (id) => {
  return request.get("activity/show/" + id);
};
