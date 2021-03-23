'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		user_id,
		articleId,
		content,
		time
	} = event;
	let userInfo = await db.collection('uni-id-users').doc(user_id).field({
		'nickName':true,
		'avatar':true
	}).get()
	userInfo = userInfo.data[0];
	const commentObj = {
		comment_id:genID(5),
		content:content,
		like_count:0,
		time:time,
		user_id:user_id,
		name:userInfo.nickName,
		avatar:userInfo.avatar
	}
	const article = await db.collection('article').doc(articleId).update({
		comment:dbCmd.push(commentObj)
	})
	
	//返回数据给客户端
	return {
		code:200,
		mag:'评论成功',
		data:article
	}
};
function genID(length){
	return Number(Math.random().toString().substring(3,length) + Date.now()).toString(36);
}
