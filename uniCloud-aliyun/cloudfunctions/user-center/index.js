'use strict';

const uniID = require('uni-id')
const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event, context) => {
	
	const params = event.params || {};
	
	let res = {}
	switch(event.action){
		case 'login':
			res = await uniID.login(params)
			break;
		case 'register':
			res = await uniID.register(params)
			break;
		case 'logout':
			res = await uniID.logout(event.token)
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
	}
	//返回数据给客户端
	return {
		code:200,
		msg:'请求成功',
		data:res
	}
};
