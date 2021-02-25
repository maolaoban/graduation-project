<template>
	<view class="video-container">
		<view class="video-box">
			<video src="https://online.pcvideo.com.cn/oss/pconline/vpconline/2021/02/20/1613816141520-vpconline-82315-1_3.mp4"
				page-gesture="true"
				object-fit="cover"
				controls
			></video>
		</view>
		<view class="middle-tab">
			<view class="tab-item">简介</view>
			<u-line class="u-line" direction="col" length="40rpx" color="#bbb"></u-line>
			<view class="tab-item">评论</view>
		</view>
		<view class="content">
			<view class="author-info">
				<view class="info-left">
					<view class="author-avatar">
						<image src="../../static/images/avatar.jpg" mode="aspectFill"></image>
					</view>
					<view class="author-name">
						<text class="name">毛小毛</text>
						<text class="bio">毛小毛</text>
					</view>
				</view>
				<view class="author-follow">
					+关注
				</view>
			</view>
			<view class="video-title">
				<text>一口气看完海贼王历史上下五千年！完整回复海贼王大事件的时间线，了解伟大航路波澜壮阔的前世今生</text>
			</view>
			<view class="video-info">
				
			</view>
			<view class="video-options">
				
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
		onLoad() {
			uni.setNavigationBarTitle({
			    title: '航海王-启航'
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.video-container{
	.video-box{
		width: 100%;
		height: 400rpx;
		video{
			width: 100%;
			height: 100%;
		}
	}
	.middle-tab{
		width: 100%;
		height: 80rpx;
		border-bottom:1px solid #cccccc;
		display: flex;
		align-items: center;
		.tab-item{
			flex: 1;
			height: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #bbb;
			font-size: 32rpx;
		}
	}
}
.content{
	.author-info{
		width: 700rpx;
		margin: 40rpx 20rpx 10rpx;
		border-radius: 10rpx;
		box-shadow:0px 10rpx 20rpx 0px #dcdcdc;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		.info-left{
			display: flex;
			align-items: center;
			.author-avatar{
				width: 80rpx;
				height: 80rpx;
				flex-shrink: 0;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.author-name{
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				.name{
					font-size: 30rpx;
					color:#01b9fd;
				}
				.bio{
					font-size: 24rpx;
					color:rgba($color: $uni-text-color, $alpha: 0.6);
				}
			}
		}
		.author-follow{
			height: 50rpx;
			width: 100rpx;
			border-radius: 10rpx;
			background-color: #01b9fd;
			text-align: center;
			line-height: 50rpx;
			font-size: 26rpx;
			color:$uni-text-color-inverse;
		}
		.followed{
			background-color: #bbb;
		}
	}
}
</style>
