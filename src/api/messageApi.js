import request from "@/utils/request";

export const getListApi = () => {
  return request.get("message/list");
};

export const getDetailApi = (id) => {
  return request.get("message/show/" + id);
};
