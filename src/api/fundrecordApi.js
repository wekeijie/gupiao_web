import request from "@/utils/request";

export const typeListApi = () => {
  return request.get("fund-record/type-list");
};

export const listApi = (page, type, date) => {
  return request.get(
    "fund-record/list?page=" + page + "&type=" + type + "&date=" + date
  );
};
