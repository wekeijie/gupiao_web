import request from '@/utils/request'
/**
 * 注册
 * @param {*} data
 * @returns
 */
export const registerApi = (data) => {
  return request.post('auth/register', data)
}


export const loginApi = (data) => {
  return request.post('auth/login', data)
}
