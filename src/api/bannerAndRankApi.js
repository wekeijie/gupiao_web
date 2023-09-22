import request from '@/utils/request'

export const bannerAndRankApi = () => {
  return request.get('banner-rank')
}
