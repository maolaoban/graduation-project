<template>
	<view class="community-info-container">
		<view class="community-top">
			<view class="top-post">
				<view class="post-icon">置顶</view>
				<text class="post-title">#官方# 社区须知！发帖必看！！！</text>
			</view>
			<view class="top-post">
				<view class="post-icon">置顶</view>
				<text class="post-title">#官方# 社区须知！！！</text>
			</view>
			<view class="top-post">
				<view class="post-icon">置顶</view>
				<text class="post-title">科技美学招聘，后期剪辑，等你来哦</text>
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
			
		}
	}
</script>

<style lang="scss">
.community-top{
	width: 100%;
	padding: 20rpx;
	.top-post{
		height: 80rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		display: flex;
		align-items: center;
		border-bottom: 0.1rpx solid rgba($color: $uni-text-color, $alpha: 0.2);
		.post-icon{
			width: 50rpx;
			height:30rpx;
			text-align: center;
			color: $uni-text-color-inverse;
			border-radius: 10rpx;
			background-color: #01b9fd;
			font-size: 20rpx;
		}
		.post-title{
			color: $uni-text-color;
			font-size: 28rpx;
			margin-left: 20rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}
</style>
