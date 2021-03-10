<template>
	<view class="content">
		<view class="content-box" v-if="!isRegister">
			<view class="input-row">
				<input class="m-input" v-model="username" type="number" placeholder="请输入手机号"
					placeholder-style="color:#bbb"
				></input>
			</view>
			<view class="input-row" v-if="isPasswordLogin">
				<input class="m-input" v-model="password" :password="!isShowPassword[0]"
					placeholder="请输入密码" placeholder-style="color:#bbb"
				></input>
				<u-icon :name="!isShowPassword[0]?'eye-off':'eye-fill'" size="40" color="#bbb" @click="showPassword(0)"></u-icon>
			</view>
			<view class="input-row" v-else>
				<input class="m-input" type="text" v-model="smsCode" placeholder="请输入验证码" placeholder-style="color:#bbb"></input>
				<!-- <u-line class="u-line" direction="col" length="40rpx" color="#bbb"></u-line> -->
				<view class="send-code-btn" @click="sendCode('login')">{{canSend?'获取验证码':sendCodeText+'s后重新发送'}}</view>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="loginBySms" v-if="!isPasswordLogin">登录</button>
				<button type="primary" class="primary" @tap="loginByPwd" v-else>登录</button>
			</view>
			<view class="btn-options">
				<text @click="showRegister">注册</text>
				<text @click="showPasswordLogin">{{isPasswordLogin?'验证码登录':'密码登录'}}</text>
			</view>
		</view>
		<view class="content-box" v-else>
			<view class="input-row">
				<input type="text"  v-model="regUsername" placeholder="请输入手机号" placeholder-style="color:#bbb"></m-input>
			</view>
			<view class="input-row">
				<input class="m-input" v-model="regPassword" :password="!isShowPassword[1]"
					placeholder="请输入密码" placeholder-style="color:#bbb"
				></input>
				<u-icon :name="!isShowPassword[1]?'eye-off':'eye-fill'" size="40" color="#bbb" @click="showPassword(1)"></u-icon>
			</view>
			<view class="input-row">
				<input class="m-input" v-model="confirmPassword" :password="!isShowPassword[2]"
					placeholder="请再次输入密码" placeholder-style="color:#bbb"
				></input>
				<u-icon :name="!isShowPassword[2]?'eye-off':'eye-fill'" size="40" color="#bbb" @click="showPassword(2)"></u-icon>
			</view>
			<!-- <view class="input-row">
				<input class="m-input" type="text" placeholder="请输入验证码" placeholder-style="color:#bbb"></input>
				<u-line class="u-line" direction="col" length="40rpx" color="#bbb"></u-line>
				<view class="send-code-btn" v-model="RegSmsCode" @click="sendCode('register')">{{canSend?'获取验证码':sendCodeText+'s后重新发送'}}</view>
			</view> -->
			<view class="btn-row">
				<button type="primary" class="primary" @tap="register">注册</button>
			</view>
			<view class="btn-options">
				<text @click="showRegister">登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {isPhoneNumber} from '../../utils/checkout.js';
	export default {
		data() {
			return {
				isRegister:false,
				isPasswordLogin:false,
				isShowPassword:[false,false,false],
				username:'',
				password:'',
				regUsername: '',
				regPassword: '',
				confirmPassword: '',
				smsCode:'',
				RegSmsCode:'',
				canSend:true,
				sendCodeText:60
			}
		},
		methods: {
			showRegister(){
				this.isRegister = !this.isRegister;
			},
			showPasswordLogin(){
				this.isPasswordLogin = !this.isPasswordLogin;
			},
			showPassword(i){
				this.isShowPassword[i] = !this.isShowPassword[i];
				this.$set(this.isShowPassword,i,this.isShowPassword[i]);
				// this.$forceUpdate();
				// this.isShowPassword = !this.isShowPassword;
			},
			// 发送验证码
			sendCode(type){
				if(type == 'login'){
					if(!isPhoneNumber(this.username)){
						uni.showToast({
							icon: 'none',
							title: '请输入正确的手机号'
						});
						return;
					}
				}else{
					if(!isPhoneNumber(this.regUsername)){
						uni.showToast({
							icon: 'none',
							title: '请输入正确的手机号'
						});
						return;
					}
					// 注册校验验证码
					// const data = {
					// 	mobile:this.regUsername,
					// 	email:this.regUsername,
					// 	code:this.RegSmsCode,
					// 	type:'register'
					// }
					// this.$api.user_center({
					// 	action:'verifyCode',
					// 	params:data
					// }).then(res => {
					// 	console.log(res);
					// })
				}
				const data = {
					tel:type === 'login'?this.username:this.regUsername,
					type
				}
				this.$api.user_center({
					action:'sendSmsCode',
					params:data
				}).then(res => {
					const {data} = res;
					if(data.code === 0){
						if(this.canSend){
							this.canSend = false;
							this.smsCode = '';
							let timer = setInterval(()=>{
								this.sendCodeText--;
								if(this.sendCodeText == 0){
									this.canSend = true;
									this.sendCodeText = 60;
									clearInterval(timer);
								}
							},1000)
						}
						uni.showToast({
							icon:'none',
							title: '验证码发送成功'
						});
					}
				})
			},
			// 密码登录
			loginByPwd(){
				if(!isPhoneNumber(this.username)){
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				const data = {
					username: this.username,
					password: this.password
				}
				this.$api.user_center({
					action: 'login',
					params: data
				}).then(res => {
					console.log("登录", res);
					const {data} = res;
					if(data.code === 0){
						uni.showToast({
							icon:'none',
							title: '登录成功'
						});
						uni.setStorageSync('uni_id_token', data.token)
						uni.setStorageSync('username', data.username)
						uni.setStorageSync('login_type', 'online')
						uni.reLaunch({
							url:'../tabBar/index/index'
						})
					}else{
						uni.showToast({
							icon:'none',
							title: '登录失败'
						});
					}
				})
			},
			// 验证码登录
			loginBySms(){
				if(!isPhoneNumber(this.username)){
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return;
				}
				if(!this.smsCode){
					uni.showToast({
						icon:'none',
						title: '请填写验证码'
					});
					return;
				}
				if (!/^\d{6}$/.test(this.smsCode)) {
					uni.showToast({
						icon:'none',
						title: '验证码错误'
					});
					return;
				}
				const data = {
					mobile:this.username,
					code:this.smsCode
				}
				this.$api.user_center({
					action:'loginBySms',
					params:data
				}).then(res => {
					console.log(res);
					const {data} = res;
					if(data.code == 50202){
						uni.showToast({
							icon:'none',
							title:data.message
						})
					}
				})
				
			},
			// 注册
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if(!isPhoneNumber(this.regUsername)){
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return;
				}
				if (this.regPassword.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.regPassword !== this.confirmPassword) {
					uni.showToast({
						icon: 'none',
						title: '两次密码输入不一致'
					});
					return;
				}

				const data = {
					username: this.regUsername,
					password: this.regPassword,
					role:['common-user']
				}
				this.$api.user_center({
					action: 'register',
					params: data
				}).then(res => {
					console.log("注册", res);
					const {data} = res;
					if(data.code === 0){
						uni.showToast({
							title: '注册成功'
						});
						uni.setStorageSync('uni_id_token', data.token)
						uni.setStorageSync('username', data.username)
						
						const userData = {
							nickName:'用户'+this.regUsername,
							avatar:'',
							bios:'',
							fans:0,
							follow:0,
							publish:0,
							grade:0,
							creationData:''
						}
						this.$api.user_center({
							action:'updateUser',
							params:userData,
							uniIdToken:uni.getStorageSync('uni_id_token')
						}).then(res => {
							console.log(res);
						})
						
					}else{
						uni.showToast({
							title: '注册失败'
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	.content-box{
		margin-top: 200rpx;
		.input-row{
			width: 600rpx;
			height: 100rpx;
			box-shadow:0px 4rpx 20rpx 0px #dadada;
			border-radius: 50rpx;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			padding: 20rpx 40rpx;
			.m-input{
				height: 100%;
				flex: 1;
			}
			.send-code-btn{
				padding-left: 10rpx;
				font-size: 32rpx;
				color: #08AEEA;
				border-left: 1rpx solid #d4d4d4;
			}
		}
		.btn-row{
			width: 600rpx;
			height: 100rpx;
			border-radius: 50rpx;
			overflow: hidden;
			margin-top: 40rpx;
			.primary{
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.btn-options{
			display: flex;
			justify-content: space-between;
			padding: 0 20rpx;
			margin-top: 20rpx;
			margin-left: 10rpx;
			font-size: 32rpx;
			color: #08AEEA;
		}
	}
}
</style>

