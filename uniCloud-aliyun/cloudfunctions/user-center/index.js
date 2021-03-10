'use strict';

const uniID = require('uni-id')
const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event, context) => {
	
	const params = event.params || {};
	
	let payload = {}
	let noCheckAction = [
		'register', 'loginByWeixin', 'checkToken',
		'login', 'logout', 'sendSmsCode',
		'loginBySms', 'inviteLogin', 'loginByUniverify',
		'loginByApple', 'createCaptcha', 'verifyCaptcha',
		'refreshCaptcha','addRole','addPermission'
	]
	
	if (noCheckAction.indexOf(event.action) === -1) {
		if (!event.uniIdToken) {
			return {
				code: 403,
				msg: '缺少token'
			}
		}
		payload = await uniID.checkToken(event.uniIdToken)
		if (payload.code && payload.code > 0) {
			return payload
		}
		params.uid = payload.uid
	}
	
	let res = {}
	switch(event.action){
		case 'login':
			res = await uniID.login(params)
			break;
		case 'register':
			res = await uniID.register(params)
			break;
		case 'logout':
			res = await uniID.logout(event.uniIdToken)
			break;
		case 'checkToken':
			res = await uniID.checkToken(event.uniIdToken);
			break;
		case 'sendSmsCode':
			// 短信模板id
			const templateId = '11314';
			// 验证码
			const randomStr = '00000' + Math.floor(Math.random() * 1000000)
			const code = randomStr.substring(randomStr.length - 6)
			res = await uniID.sendSmsCode({
				mobile:params.tel,
				templateId:templateId,
				code:code,
				type:params.type
			})
			break;
		case 'loginBySms':
			if (!/^1\d{10}$/.test(params.mobile)) {
				return {
					code: 500,
					msg: '手机号码填写错误'
				}
			}
			res = await uniID.loginBySms(params)
			break;
		case 'verifyCode':
			res = await uniID.verifyCode(params)
			break;
		case 'updateUser':
			res = await uniID.updateUser(params)
			break;
		case 'getUserInfo':
			res = await uniID.getUserInfo(params)
			break;
		case 'addRole':
			res = await uniID.addRole(params)
			break;
		case 'addPermission':
			res = await uniID.addPermission(params)
			break;
		case 'getPermission':
			res = await uniID.getPermissionByUid(params)
			break;
		case 'bindRole':
			if(params.roleList[0] === 'CREATOR_ARTICLE'){
				let create = await db.collection('uni-id-users').doc(params.uid).update({
					creationData:dbCmd.set({
						read_all:0,
						comment_all:0,
						like_all:0,
						top:'99+'
					})
				})
			}
			res = await uniID.bindRole(params)
			break;
	}
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:res
	}
};
