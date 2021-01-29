<template>
	<view class="message-container">
		<view class="message-fun">
			<view class="message-fun_box">
				<view class="message-fun_icon">
					<u-icon name="chat-fill" color="#fff" size="50"></u-icon>
				</view>
				<text class="message-text">回复我的</text>
			</view>
			<view class="message-fun_box">
				<view class="message-fun_icon">
					<u-icon name="eye-fill" color="#fff" size="50"></u-icon>
				</view>
				<text class="message-text">@我</text>
			</view>
			<view class="message-fun_box">
				<view class="message-fun_icon">
					<u-icon name="thumb-up-fill" color="#fff" size="50"></u-icon>
				</view>
				<text class="message-text">收到的赞</text>
			</view>
			<view class="message-fun_box">
				<view class="message-fun_icon">
					<u-icon name="account-fill" color="#fff" size="50"></u-icon>
				</view>
				<text class="message-text">粉丝</text>
			</view>
		</view>
		<view class="parting-line"></view>
		<view class="message-content">
			<view class="message-content_header">
				信息列表
			</view>
			<view class="message-content_body" v-for="item in 5" @click="goChat">
				<view class="message-content_li">
					<view class="content_img">
						<image src="../../static/images/avatar.jpg" mode="aspectFit"></image>
					</view>
					<view class="content-info">
						<view class="content-info_header">
							<text class="content-info_name">马云</text>
							<text class="content-info_date">01-09</text>
						</view>
						<view class="content-info_body">
							[2020年度报告通知]快来领取你的年度报告吧~
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goChat(){
				uni.navigateTo({
					url:'../chat-page/chat-page'
				})
			}
		}
	}
</script>

<style lang="scss">
.message-fun{
	width: 100%;
	height: 180rpx;
	margin-top: 20rpx;
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	.message-fun_box{
		width: 140rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.message-fun_icon{
			width: 100rpx;
			height:100rpx;
			border-radius: 20rpx;
			background-color: #01b9fd;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.message-text{
			margin-top: 15rpx;
			font-size: 24rpx;
			color:$uni-text-color;
		}
	}
}
.parting-line{
	height: 10rpx;
	width: 100%;
	background-color: #ececec;
}
.message-content{
	width: 100%;
	padding: 30rpx;
	.message-content_header{
		font-size: 28rpx;
		color: $uni-text-color;
	}
	.message-content_body{
		height: 150rpx;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #ececec;
		.message-content_li{
			height:120rpx;
			width: 100%;
			display: flex;
			align-items: center;
			.content_img{
				width: 80rpx;
				height:80rpx;
				border-radius: 50%;
				overflow: hidden;
				flex-shrink: 0;
				image{
					width: 100%;
					height:100%;
				}
			}
			.content-info{
				width: 100%;
				margin-left: 15rpx;
				overflow: hidden;
				.content-info_header{
					display: flex;
					justify-content: space-between;
					.content-info_name{
						font-size: 26rpx;
						color:#e17055;
					}
					.content-info_date{
						font-size: 24rpx;
						color:$uni-text-color;
					}
				}
			}
			.content-info_body{
				width: 90%;
				color: rgba($color: $uni-text-color, $alpha: 0.6);
				font-size: 26rpx;
				margin-top: 10rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
