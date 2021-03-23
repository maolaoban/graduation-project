'use strict';
//获取数据库的引用
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		value
	} = event;
	
	const list = await db.collection('article').field({
		title:1,
		read_count:1,
		top_cover:1,
		comment_total:1,
		tag:1
	}).where(dbCmd.or(
		{
			title: new RegExp(value)
		},
		{
			tag:new RegExp(value)
		}
	)).get()
	
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:list.data
	}
};
