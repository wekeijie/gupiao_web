import request from "@/utils/request";

export const getShareCommissionNumber = () => {
  return request.get("info/share-commisson-number");
};
