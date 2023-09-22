import request from '@/utils/request'

export const newsListApi = (page) =>{
    return request.get('news/list?page='+page)
}

export const newShowApi = (id) =>{
    return request.get('news/show/' + id)
}

export const newFlashApi = () =>{
    return request.get('news/flash')
}