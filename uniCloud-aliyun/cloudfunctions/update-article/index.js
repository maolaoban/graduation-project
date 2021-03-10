'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {params} = event;
	params.read_count = 0;
	params.comment = [];
	params.author_name='maomaomao';
	params.author_bio = '123456';
	params.author_avatar="https://img0.pconline.com.cn/pconline/2011/03/13817489_IMG_6258_thumb.jpg";
	
	await db.collection('article').add(params)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'更新成功'
	}
};