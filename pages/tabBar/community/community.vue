<template>
	<view class="community-container">
		<view class="my-follow">
			<view class="my-follow_title">
				我的关注
			</view>
			<scroll-view scroll-x="true" class="follow-box_list">
				<view class="follow-box">
					<view class="box-li" v-for="item in 8" @click="goFollowDetail">
						{{item}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="all-community">
			全部
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
			goFollowDetail(){
				uni.navigateTo({
					url:'./community-info'
				})
			}
		}
	}
</script>

<style lang="scss">
.community-container{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 10rpx 30rpx;
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
				width: 90rpx;
				height: 90rpx;
				flex-shrink: 0;
				border:1px solid red;
				margin-right: 20rpx;
			}
		}
	}
}
.all-community{
	width: 90rpx;
	height: 90rpx;
	flex-shrink: 0;
	border:1px solid yellow;
	margin-left: 20rpx;
	margin-bottom: 5rpx;
}
</style>
