import request from '@/utils/request'

export const pushApi = (info) => {
    return request.post('watchlist/change',info)
}

export const getApi = symbol => {
    return request.get('watchlist/get?symbol=' + symbol)
}

export const listApi = symbol => {
    return request.get('watchlist/list')
}