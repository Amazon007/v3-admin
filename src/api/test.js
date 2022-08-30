import request from '@/utils/request'

export function testApi(params) {
    return request({
        method: 'GET',
        url: '/newsqa/v1/query/inner/publish/modules/list',
        params
    })
}