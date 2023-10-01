import request from '@/utils/request'

export const addApi = data => {
    return request.post('bank/add',data);
}

export const listApi = () => {
    return request.get('bank/list');
}

export const deleteApi = data => {
    return request.post('bank/delete',data);
}

export const changeDefaultApi = data => {
    return request.post('bank/change-default',data);
}