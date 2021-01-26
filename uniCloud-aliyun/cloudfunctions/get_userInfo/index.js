'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	let userInfo = await db.collection('user').get();
	
	//返回数据给客户端
	return {
		code:200,
		msg:"请求成功",
		data:userInfo.data[0]
	}
};
