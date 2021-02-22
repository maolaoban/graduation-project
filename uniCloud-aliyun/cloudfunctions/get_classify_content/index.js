'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		classify_id
	} = event;
	const classifyContent = await db.collection('classify').doc(classify_id).get()
	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:classifyContent.data[0]
	}
};
