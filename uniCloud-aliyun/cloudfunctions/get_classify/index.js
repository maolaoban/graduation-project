'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const classifyList = await db.collection('classify').field({'classify':true}).get();
	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:classifyList
	}
};
