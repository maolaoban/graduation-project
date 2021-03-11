'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		articleId,
		content,
		time
	} = event;
	const commentObj = {
		comment_id:genID(5),
		content:content,
		like_count:0,
		time:time,
		name:'maolaoban',
		avatar:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1735133713,3822132866&fm=11&gp=0.jpg'
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
