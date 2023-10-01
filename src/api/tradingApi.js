import request from '@/utils/request'

export const getInfoApi = (code) => {
    return request.get('market/detail?symbol='+code)
}

export const getDetailApi = (code) => {
    return request.get('market/getStockFenShi?symbol='+code)
}