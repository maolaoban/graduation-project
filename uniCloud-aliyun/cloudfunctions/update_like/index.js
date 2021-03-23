'use strict';
//获取数据库的引用
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		user_id,
		article_id
	} = event;
	
	const userInfo = await db.collection('uni-id-users').doc(user_id).get()
	const like_list = userInfo.data[0].like_list
	let dbCmdFun = null;
	if(like_list.includes(article_id)){
		dbCmdFun = dbCmd.pull(article_id);
	}else{
		dbCmdFun = dbCmd.addToSet(article_id)
	}
	
	await db.collection('uni-id-users').doc(user_id).update({	
		like_list: dbCmdFun
	})
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功'
	}
};
