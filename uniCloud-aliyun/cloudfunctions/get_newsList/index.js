'use strict';
//获取数据库的引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	//接收分类,筛选数据
	const {
		page = 1,
		pageSize = 10
	} = event;

	//聚合，更精细化的去处理数据
	const list = await db.collection('article')
	.aggregate()
	.addFields({
		comment_total:$.size('$comment')
	})
	.project({
		title:1,
		read_count:1,
		top_cover:1,
		comment_total:1,
		tag:1
	})
	.skip((page - 1) * pageSize)//跳过多少条
	.limit(pageSize) //限制条数
	.end()

	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:list.data
	}
};
