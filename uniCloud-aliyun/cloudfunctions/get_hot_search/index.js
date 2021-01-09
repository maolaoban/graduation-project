'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let hotList = await db.collection('search').get();
	
	//返回数据给客户端
	return {
		code:200,
		data:hotList.data
	}
};
