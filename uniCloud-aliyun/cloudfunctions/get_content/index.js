'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		article_id
	} = event;
	let res = {}
	let content = {}
	
	if(user_id){
		let userInfo = await db.collection('uni-id-users').doc(user_id).get()
		userInfo = userInfo.data[0]
		
		content = await db.collection('article')
		.aggregate()
		.addFields({
			//是否关注作者
			is_follow: $.in(['$author_id',userInfo.follow_list]),
			//是否收藏文章
			is_collect: $.in(['$_id',userInfo.collect_list]),
			//是否点赞
			is_like: $.in(['$_id',userInfo.like_list])
		})
		.match({
			_id:article_id
		})
		.end();
	}else{
		content = await db.collection('article').doc(article_id).get()
	}
	
	
	
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
