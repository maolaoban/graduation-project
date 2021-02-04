<template>
	<view class="comment-container">
		<view class="comment-title">
			热门评论
		</view>
		<view class="comment-body" v-for="item in 4">
			<view class="comment-body_top">
				<view class="comment-body_avatar">
					<image src="../../static/images/avatar.jpg" mode="aspectFit"></image>
				</view>
				<view class="comment-body_right">
					<view class="comment-body_info">
						<view class="body-info_name">
							下雨天没有带伞怎么办
						</view>
						<view class="body-info_like">
							<u-icon :name="!isThumb?'thumb-up':'thumb-up-fill'" size="30" :color="!isThumb?'#333':'#01b9fd'"></u-icon>
							<text>234</text>
						</view>
					</view>
					<view class="comment-body_time">
						2021-02-04 13:51
					</view>
				</view>
			</view>
			<view class="comment-body_text">
				晓龙888首发，厉害，小米，发烧,晓龙888首发，厉害，小米，发烧,晓龙888首发，
				厉害，小米，发烧,晓龙888首发，厉害，小米，发烧,晓龙888首发，厉害，小米，发烧,
				晓龙888首发，厉害，小米，发烧
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isThumb:false
			};
		}
	}
</script>

<style lang="scss">
.comment-container{
	width: 100%;
	margin-top: 20rpx;
	padding: 20rpx 20rpx 120rpx 20rpx;
	border-top:10rpx solid #f4f5f6;
	.comment-title{
		font-size: 36rpx;
		font-weight: bold;
		
	}
	.comment-body{
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		.comment-body_top{
			display: flex;
			.comment-body_avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				flex-shrink: 0;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.comment-body_right{
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-left: 10rpx;
				.comment-body_info{
					width: 90%;
					height: 50rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.body-info_name{
						font-size: 28rpx;
						color: $uni-text-color;
					}
					.body-info_like{
						font-size: 26rpx;
						color:#bbb;
						text{
							margin-left: 4rpx;
						}
					}
				}
				.comment-body_time{
					font-size: 24rpx;
					color: #bbb;
				}
			}
		}
		.comment-body_text{
			width: 600rpx;
			margin-left: 90rpx;
			margin-top: 20rpx;
			background-color: #f4f5f6;
			border-radius: 0 20rpx 20rpx 20rpx;
			padding: 20rpx;
		}
	}
}
</style>
