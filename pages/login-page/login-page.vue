<template>
	<view class="content">
		<view class="content-logo">
			<!-- <image src="../../static/images/gold-coin.png" mode="aspectFill"></image> -->
		</view>
		<view class="content-box" v-if="!isRegister">
			<view class="input-row">
				<input class="m-input" v-model="username" type="number" placeholder="请输入手机号"
					placeholder-style="color:#bbb"
				></input>
			</view>
			<view class="input-row" v-if="isPasswordLogin">
				<input class="m-input" v-model="password" :password="!isShowPassword"
					placeholder="请输入密码" placeholder-style="color:#bbb"
				></input>
				<u-icon :name="!isShowPassword?'eye-off':'eye-fill'" size="40" color="#bbb" @click="showPassword"></u-icon>
			</view>
			<view class="input-row" v-else>
				<input class="m-input" type="text" placeholder="请输入验证码" placeholder-style="color:#bbb"></input>
				<u-line class="u-line" direction="col" length="40rpx" color="#bbb"></u-line>
				<view class="send-code-btn" @click="sendCode('login')">获取验证码</view>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">登录</button>
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
				<input class="m-input" v-model="regPassword" :password="!isShowPassword"
					placeholder="请输入密码" placeholder-style="color:#bbb"
				></input>
				<u-icon :name="!isShowPassword?'eye-off':'eye-fill'" size="40" color="#bbb" @click="showPassword"></u-icon>
			</view>
			<view class="input-row">
				<input class="m-input" v-model="confirmPassword" :password="!isShowPassword"
					placeholder="请再次输入密码" placeholder-style="color:#bbb"
				></input>
				<u-icon :name="!isShowPassword?'eye-off':'eye-fill'" size="40" color="#bbb" @click="showPassword"></u-icon>
			</view>
			<view class="input-row">
				<input class="m-input" type="text" placeholder="请输入验证码" placeholder-style="color:#bbb"></input>
				<u-line class="u-line" direction="col" length="40rpx" color="#bbb"></u-line>
				<view class="send-code-btn" @click="sendCode('register')">获取验证码</view>
			</view>
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
				isShowPassword:false,
				username:'',
				password:'',
				regUsername: '',
				regPassword: '',
				confirmPassword: ''
			}
		},
		methods: {
			showRegister(){
				this.isRegister = !this.isRegister;
			},
			showPasswordLogin(){
				this.isPasswordLogin = !this.isPasswordLogin;
			},
			showPassword(){
				this.isShowPassword = !this.isShowPassword;
			},
			sendCode(type){
				if(!isPhoneNumber(this.username)){
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号'
					});
					return;
				}
				const data = {
					tel:this.username,
					type
				}
				this.$api.user_center({
					action:'sendSmsCode',
					params:data
				}).then(res => {
					console.log(res);
				})
			},
			bindLogin(){
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
							title: '登录成功'
						});
						uni.setStorageSync('uni_id_token', data.token)
						uni.setStorageSync('username', data.username)
					}else{
						uni.showToast({
							title: '登录失败'
						});
					}
				})
			},
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.regUsername.length < 3) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 3 个字符'
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
					password: this.regPassword
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
	display: flex;
	flex-direction: column;
	align-items: center;
	.content-logo{
		margin-top: 60rpx;
		width: 250rpx;
		height: 120rpx;
		border:1px solid red;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.content-box{
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
				margin-left: 10rpx;
				font-size: 32rpx;
				color: #08AEEA;
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

