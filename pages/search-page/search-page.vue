<template>
	<view>
		<navbar :isSearch="true"></navbar>
		<view class="hot-box">
			<text class="hot-title">热门</text>
			<view class="hot-content" v-if="!isLoading">
				<view class="hot-content_info" v-for="(item,index) in hotList">
					<text :style="{color:index<3 ? '#e74c3c':'#fff'}">{{index+1+'. '}}</text>
					{{item.title}}
				</view>
			</view>
			<view class="hot-loading" v-else>
				<view class="hot-loading_1"></view>
				<view class="hot-loading_2"></view>
				<view class="hot-loading_3"></view>
				<view class="hot-loading_4"></view>
				<view class="hot-loading_5"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotList:[],
				isLoading:true
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name:'get_hot_search'
			}).then(res => {
				console.log(res);
				const {data} = res.result;
				this.hotList = data;
				this.isLoading = false;
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.hot-box{
	width: 100%;
	padding: 40rpx;
	.hot-title{
		font-size: 32rpx;
		color:#fff;
	}
	.hot-content{
		margin-top: 30rpx;
		.hot-content_info{
			height: 80rpx;
			color: #fff;
			font-size: 28rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.hot-loading{
		margin-top: 30rpx;
		.hot-loading_1{
			height: 30rpx;
			margin-top: 40rpx;
			width: 50%;
			border-radius: 20rpx;
			background-color: #303133;
		}
		.hot-loading_2{
			height: 30rpx;
			margin-top: 40rpx;
			width: 80%;
			border-radius: 20rpx;
			background-color: #303133;
		}
		.hot-loading_3{
			height: 30rpx;
			margin-top: 40rpx;
			width: 90%;
			border-radius: 20rpx;
			background-color: #303133;
		}
		.hot-loading_4{
			height: 30rpx;
			margin-top: 40rpx;
			width: 70%;
			border-radius: 20rpx;
			background-color: #303133;
		}
		.hot-loading_5{
			height: 30rpx;
			margin-top: 40rpx;
			width: 80%;
			border-radius: 20rpx;
			background-color: #303133;
		}
	}
}
</style>
