import request from '../utils/request'

export const smsSendApi = (mobile) => {
  return request.post('sms/send', { mobile: mobile })
}
