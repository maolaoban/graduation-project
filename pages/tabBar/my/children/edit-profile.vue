<template>
	<view class="profile-container">
		<view class="avatar-box" @click="changeAvatar">
			<view class="item-title">
				头像
			</view>
			<view class="avatar">
				<image :src="userInfo.avatar&&!isChange?userInfo.avatar:avatarSrc" mode="aspectFill"></image>
			</view>
			<view class="arrow">
				<u-icon name="arrow-right" color="#e3e3e3" size="40"></u-icon>
			</view>
		</view>
		<view class="item-box">
			<view class="item-title">昵称</view>
			<input class="item-content" type="text" v-model="nickName" maxlength="8"/>
			<view class="arrow">
				<u-icon name="arrow-right" color="#e3e3e3" size="40"></u-icon>
			</view>
		</view>
		<view class="item-box">
			<view class="item-title">签名</view>
			<input class="item-content" type="text" v-model="bios" placeholder="这个人很懒，什么都没留下..." maxlength="20"/>
			<view class="arrow">
				<u-icon name="arrow-right" color="#e3e3e3" size="40"></u-icon>
			</view>
		</view>
		<view class="item-box">
			<view class="item-title">
				修改密码
			</view>
			<view class="item-content">
			</view>
			<view class="arrow">
				<u-icon name="arrow-right" color="#e3e3e3" size="40"></u-icon>
			</view>
		</view>
		<view class="save-btn" @click="saveInfo">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarSrc:'../../../../static/images/default-avatar.png',
				userInfo:'',
				nickName:'',
				bios:'',
				avatar:'',
				isChange:false
			}
		},
		watch:{
			avatarSrc(){
				this.isChange = true;
			}
		},
		onLoad() {
			this.userInfo = uni.getStorageSync('userInfo');
			this.nickName = this.userInfo.nickName;
			this.bios = this.userInfo.bios;
		},
		methods:{
			changeAvatar(){
				let _this = this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(res.tempFilePaths[0]);
						_this.avatarSrc = res.tempFilePaths[0];
				    },
					fail:function(){
						console.log('选择头像失败')
					}
				});
			},
			async saveInfo(){
				uni.showLoading({
					title:'保存中'
				})
				if(this.isChange){
					const result = await uniCloud.uploadFile({
						filePath:this.avatarSrc,
						cloudPath:'user/avatar.jpg'
					})
					console.log('上传结果',result);
					this.avatar = result.fileID;
				}
				let uniIdToken = uni.getStorageSync('uni_id_token');
				let changeInfo = {
					avatar:this.avatar,
					nickName:this.nickName,
					bios:this.bios
				}
				
				this.$api.user_center({
					action:'updateUser',
					uniIdToken,
					params:changeInfo
				}).then(res => {
					uni.hideLoading()
					console.log(res);
					uni.switchTab({
						url:'../my'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.profile-container{
		padding: 20rpx;
		box-sizing: border-box;
		.item-title{
			font-size: 32rpx;
			color: #272832;
			margin-right: 20rpx;
			font-weight: bold;
		}
		.arrow{
			position: absolute;
			right: 0;
		}
		.avatar-box{
			height: 120rpx;
			width: 100%;
			border-bottom: 1rpx solid #EDEDED;
			display: flex;
			align-items: center;
			position: relative;
			.avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 10rpx;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.item-box{
			height: 100rpx;
			width: 100%;
			border-bottom: 1rpx solid #EDEDED;
			display: flex;
			align-items: center;
			position: relative;
			.item-content{
				width: 550rpx;
			}
		}
		.save-btn{
			width: 670rpx;
			height: 80rpx;
			position: fixed;
			bottom: 40rpx;
			left: 40rpx;
			border-radius: 40rpx;
			background-color: #01b9fd;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFFFFF;
			font-size: 32rpx;
			font-weight: 400;
		}
	}
</style>
