import request from '@/utils/request';

/**
 * 返回一个搜索结果的promise
 * @param {String} keywords 
 * @param {Number} offset 
 * @param {Number} limit 
 * @returns {Promise}
 */
export const search = function (keywords, offset, limit = 30) {
    return request({
        url: "/search",
        params: {
            keywords,
            limit,
            offset
        }
    })
}

export const hot = function (params=null) {  
    return request.get("/search/hot", params)
}