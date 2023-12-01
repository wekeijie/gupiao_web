import request from "@/utils/request";

export const infoApi = () => {
  return request.get("check-in/info");
};

export const putApi = () => {
  return request.post("check-in/put");
};
