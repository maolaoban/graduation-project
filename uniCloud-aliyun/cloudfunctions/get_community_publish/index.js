'use strict';
//获取数据库的引用
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {
	//接收分类,筛选数据
	const {
		page = 1,
		pageSize = 10,
		name
	} = event;
	let mathcObj = {};
	if(name !== "all"){
		mathcObj = {
			classify:name
		}
	}
	//聚合，更精细化的去处理数据
	const list = await db.collection('community-publish')
	.aggregate()
	.addFields({
		comment_total:$.size('$comment')
	})
	.match(mathcObj)
	.skip((page - 1) * pageSize)//跳过多少条
	.limit(pageSize) //限制条数
	.end()
	list.data.forEach(async (item) => {
		let user = await db.collection('uni-id-users').doc(item.author_id).field({
			'nickName':true,
			'avatar':true
		}).get()
		item.userInfo = user;
	})
	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:list.data
	}
};
