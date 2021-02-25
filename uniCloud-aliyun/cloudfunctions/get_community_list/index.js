'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const communityList = await db.collection('community').get();
	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:communityList.data
	}
};
