import $http from '../http.js';
//获取轮播图
export const get_carousel = (data) => {
	return $http({
		url:'get_carousel',
		data
	})
}
//获取搜索页-热点
export const get_hot_search = (data) => {
	return $http({
		url:'get_hot_search',
		data
	})
}