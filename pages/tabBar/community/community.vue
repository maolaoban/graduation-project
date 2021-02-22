<template>
	<view class="community-container">
		<view class="community-follow">
			<view class="my-follow">
				<view class="my-follow_title">
					<text>大家都在聊</text>
					<text class="more" @click="goMore">更多></text>
				</view>
				<scroll-view scroll-x="true" class="follow-box_list">
					<view class="follow-box">
						<view class="box-li" v-for="(item,index) in 8" @click="goFollowDetail(index)">
							<text>#小白提问#</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 分割线 -->
		<u-gap height="10" bg-color="#f4f5f6"></u-gap>
		
		<view class="community-info_box">
			<common-card :isCommunity="true" v-for="item in 4"></common-card>
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
			},
			goMore(){
				uni.navigateTo({
					url:'./more-community/more-community'
				})
			}
		}
	}
</script>

<style lang="scss">
.community-follow{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 10rpx 0;
	margin-bottom: 20rpx;
}
.my-follow{
	width: 100%;
	flex: 1;
	.my-follow_title{
		font-size: 32rpx;
		padding: 0 20rpx;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		.more{
			font-size: 28rpx;
			font-weight: 400;
		}
	}
	.follow-box_list{
		width: 730rpx;
		height: 150rpx;
		margin-top: 20rpx;
		padding-left: 20rpx;
		.follow-box{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			.box-li{
				width: 300rpx;
				height: 150rpx;
				flex-shrink: 0;
				margin-right: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.sheying520.com%2Fdata%2Fupload%2Fimage%2F201701%2F0187d523991b81311536e17d64ec6a32.jpg&refer=http%3A%2F%2Fwww.sheying520.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614404070&t=dda8815cf7bb641be02004d733d3582a');
				background-size: 100% 100%;
				border-radius: 6rpx;
				text{
					color:#fff;
				}
			}
		}
	}
}
// .community-info_box{
// 	width: 100%;
// 	margin-top: 30rpx;
// 	border-top:1rpx solid #e8e8e8;
// 	.top-post{
// 		height: 100rpx;
// 		margin: 0 20rpx;
// 		display: flex;
// 		align-items: center;
// 		border-bottom: 1rpx solid #e8e8e8;
// 		.post-icon{
// 			width: 50rpx;
// 			height:30rpx;
// 			text-align: center;
// 			color: $uni-text-color-inverse;
// 			border-radius: 10rpx;
// 			background-color: #01b9fd;
// 			font-size: 20rpx;
// 		}
// 		.post-title{
// 			color: $uni-text-color;
// 			font-size: 28rpx;
// 			margin-left: 20rpx;
// 			overflow: hidden;
// 			white-space: nowrap;
// 			text-overflow: ellipsis;
// 		}
// 	}
// }
.community-info_box{
	width: 100%;
}
</style>
