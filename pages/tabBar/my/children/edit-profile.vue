<template>
	<view class="profile-container">
		<view class="avatar-box" @click="changeAvatar">
			<view class="item-title">
				头像
			</view>
			<view class="avatar">
				<image :src="avatarSrc?avatarSrc:'../../../../static/images/avatar.jpg'" mode="aspectFill"></image>
			</view>
			<view class="arrow">
				<u-icon name="arrow-right" color="#e3e3e3" size="40"></u-icon>
			</view>
		</view>
		<view class="item-box" v-for="item in itemList">
			<view class="item-title">
				{{item.title}}
			</view>
			<view class="item-content">
				{{item.value}}
			</view>
			<view class="arrow">
				<u-icon name="arrow-right" color="#e3e3e3" size="40"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarSrc:'',
				itemList:[
					{
						title:'昵称',
						value:'我不该在勇者大陆冒险'
					},
					{
						title:'签名',
						value:'这个人很懒，什么都没留下...'
					},
					{
						title:'修改密码',
						value:''
					},
				]
			}
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
						alert(1)
					}
				});
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
		}
	}
</style>
