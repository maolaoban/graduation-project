'use strict';
//获取数据库的引用
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {
	//接收分类,筛选数据
	const {
		page,
		pageSize = 10,
		name
	} = event;
	let mathcObj = {};
	if(name !== "推荐"){
		mathcObj = {
			classify:name
		}
	}else{
		mathcObj={
			classify:dbCmd.neq("视频")
		}
	}
	let projectObj = {};
	if(name !== "视频"){
		projectObj = {
			title:1,
			read_count:1,
			top_cover:1,
			comment_total:1,
			tag:1
		}
	}else{
		projectObj = {
			title:1,
			author_name:1,
			view_count:1,
			top_cover:1,
			duration:1
		}
	}
	//聚合，更精细化的去处理数据
	const list = await db.collection('article')
	.aggregate()
	.addFields({
		comment_total:$.size('$comment')
	})
	.match(mathcObj)
	.project(projectObj)
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
