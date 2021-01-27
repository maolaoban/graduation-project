<template>
	<view class="community-container">
		<view class="community-follow">
			<view class="my-follow">
				<view class="my-follow_title">
					订阅板块
				</view>
				<scroll-view scroll-x="true" class="follow-box_list">
					<view class="follow-box">
						<view class="box-li" v-for="(item,index) in 8" @click="goFollowDetail(index)">
							<image src="../../../static/images/logo.png" mode="aspectFill"></image>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="all-community">
				<u-icon name="plus" size="60" color="#d1d1d1"></u-icon>
			</view>
		</view>
		<view class="community-info_box">
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
			goFollowDetail(i){
				console.log(i);
			}
		}
	}
</script>

<style lang="scss">
.community-follow{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 10rpx 20rpx;
}
.my-follow{
	width: 80%;
	flex: 1;
	.my-follow_title{
		font-size: 32rpx;
		font-weight: bold;
	}
	.follow-box_list{
		width: 100%;
		height: 100rpx;
		margin-top: 20rpx;
		.follow-box{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			.box-li{
				width: 100rpx;
				height: 100rpx;
				flex-shrink: 0;
				margin-right: 20rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
.all-community{
	width: 90rpx;
	height: 90rpx;
	flex-shrink: 0;
	border:4rpx dotted #d1d1d1;
	margin-left: 10rpx;
	margin-bottom: 5rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.community-info_box{
	width: 100%;
	margin-top: 30rpx;
	border-top:1rpx solid #e8e8e8;
	.top-post{
		height: 100rpx;
		margin: 0 20rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #e8e8e8;
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
