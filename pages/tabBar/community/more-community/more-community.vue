<template>
	<view class="community-list">
		<view class="topic-box" v-for="item in 8">
			<view class="topic-box_img">
				<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.sheying520.com%2Fdata%2Fupload%2Fimage%2F201701%2F0187d523991b81311536e17d64ec6a32.jpg&refer=http%3A%2F%2Fwww.sheying520.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614404070&t=dda8815cf7bb641be02004d733d3582a" mode="aspectFill"></image>
				<view class="topic-tag">
					<image src="../../../../static/images/tag.png" mode="aspectFit"></image>
					#小白提问#
				</view>
			</view>
			<view class="top-box_title">
				手机，电脑，DIY,有问题你就提出来
			</view>
			<view class="top-box_option">
				<view class="follow-btn">
					<i class="iconfont icon-plus" v-if="true"></i>
					<i class="iconfont icon-icon" v-else></i>
					关注话题
				</view>
				<view class="line"></view>
				<view class="ask-btn">
					<i class="iconfont icon-message"></i>
					我有话说
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f5f6;
}
.community-list{
	padding: 20rpx;
	.topic-box{
		width: 100%;
		height: 500rpx;
		border-radius: 10rpx;
		overflow: hidden;
		background-color: #fff;
		margin-bottom: 40rpx;
		.topic-box_img{
			width: 100%;
			height: 350rpx;
			position: relative;
			image{
				width: 100%;
				height: 100%;
			}
			.topic-tag{
				height: 50rpx;
				width: 210rpx;
				border-radius: 0 25rpx 25rpx 0;
				position: absolute;
				top:15rpx;
				color: #fff;
				padding: 0 10rpx;
				font-size: 26rpx;
				background-color: rgba($color: #333, $alpha: 0.6);
				display: flex;
				align-items: center;
				justify-content: space-around;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
		}
		.top-box_title{
			height: 70rpx;
			width: 100%;
			display: flex;
			align-items: center;
			padding-left: 20rpx;
			font-size: 32rpx;
		}
		.top-box_option{
			height: 80rpx;
			border-top: 1rpx solid #f3f4f5;
			display: flex;
			align-items: center;
			i{
				margin-right: 10rpx;
			}
			.follow-btn{
				width: 50%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.ask-btn{
				width: 50%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.line{
				width: 1rpx;
				height: 50rpx;
				border-left: 1rpx solid #f3f4f5;
			}
		}
	}	
}
</style>
