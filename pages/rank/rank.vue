<template>
	<view class="rank-list">
		<view class="rank-card" v-for="item in 2">
			<image src="../../static/images/rank-1.png" mode="aspectFill"></image>
			<view class="rank-title">
				<text>2020年12月手机性能榜</text>
			</view>
		</view>
		<view class="rank-card" v-for="item in 3">
			<image src="../../static/images/rank-2.png" mode="aspectFill"></image>
			<view class="rank-title">
				<text>手机性价比双十一特别版</text>
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
.rank-list{
	width: 100%;
	padding: 15rpx 30rpx;
	.rank-card{
		width: 100%;
		height: 300rpx;
		margin-bottom:30rpx;
		border-radius: 20rpx;
		overflow: hidden;
		position: relative;
		image{
			z-index: 10;
			width: 100%;
			height: 100%;
		}
		.rank-title{
			height: 25%;
			width: 100%;
			z-index: 100;
			position: absolute;
			bottom: 0;
			padding: 0 30rpx;
			display: flex;
			align-items: center;
			background-color: rgba($color: $uni-bg-color, $alpha: 0.5);
			text{
				font-size: 34rpx;
				color: $uni-text-color-inverse;
			}
		}
	}
}
</style>
