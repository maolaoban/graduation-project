'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		article_id
	} = event;
	let res = {}
	// let content = await db.collection('article')
	// .aggregate()
	// .match({
	// 	_id:article_id
	// })
	// .lookup({
	// 	from:'uni-id-users',
	// 	localField:'author_id',
	// 	foreignField:'_id',
	// 	as:'authorInfo'
	// })
	// .end()
	let content = await db.collection('article').doc(article_id).get()
	let authorInfo = await db.collection('uni-id-users').aggregate()
	.match({
		_id:content.data[0].author_id
	})
	.project({
		nickName:1,
		avatar:1,
		bios:1
	})
	.end()
	res = content.data[0]
	res.authorInfo = authorInfo.data[0];
	//返回数据给客户端
	return {
		code:200,
		msg:"请求成功",
		data:res
	}
};
