import request from '@/utils/request'

export const marketApi = () =>{
    return request.get('market/index')
}

export const listApi = (type,page) => {
    return request.get('market/list?type='+ type +'&page=' + page)
}

export const listDetailsApi = (code,page) => {
    return request.get('market/list/detail?code=' + code + '&page=' + page)
}