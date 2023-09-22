import request from '@/utils/request'

export const userInfoApi = () => {
    return request.get('home/index')
}