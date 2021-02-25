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
//详情
export const get_content = (data) => {
	return $http({
		url:'get_content',
		data
	})
}
//用户详情
export const get_userInfo = (data) => {
	return $http({
		url:'get_userInfo',
		data
	})
}
//新闻列表
export const get_newsList = (data) => {
	return $http({
		url:'get_newsList',
		data
	})
}
//分类列表
export const get_classifyList = (data) => {
	return $http({
		url:'get_classify',
		data
	})
}
//分类详情
export const get_classifyContent = (data) => {
	return $http({
		url:'get_classify_content',
		data
	})
}
// 圈子列表
export const get_communityList = (data) => {
	return $http({
		url:"get_community_list",
		data
	})
}