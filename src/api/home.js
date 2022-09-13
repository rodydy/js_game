import request from '@/utils/request';

/**
 * 拿到首页的推荐歌单歌曲
 * @param {*} param 
 * @returns {Promise}
 */
export const recommendMusic = function (param) {
    return request({
        url: '/personalized',
        params:param
    })
}

/**
 * 拿到首页面的最新音乐
 * @param {*} param 
 * @returns {Promise}
 */
export const newMusic = function (param) {  
    return request({
        url:"/personalized/newsong",
        params:param
    })
}