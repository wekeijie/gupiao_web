import request from "@/utils/request";

export const newsListApi = (page, limit = 15) => {
  return request.get("news/list?page=" + page + "&limit=" + limit);
};

export const newShowApi = (id) => {
  return request.get("news/show/" + id);
};

export const newFlashApi = () => {
  return request.get("news/flash");
};
