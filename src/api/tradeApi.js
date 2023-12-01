import request from "@/utils/request";

export const addApi = (info) => {
  return request.post("trade/add", info);
};

export const uploadApi = (file) => {
  return request.post("upload", file, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const searchApi = (name) => {
  return request.post("trade/search", name);
};
