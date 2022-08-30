import request from '@/utils/request'

export function testApi(params) {
    return request({
        method: 'GET',
        url: '/test',
        params
    })
}