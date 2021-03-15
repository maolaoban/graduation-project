<template>
	<view>
		<navbar :isSearch="true"></navbar>
		<view class="search-history" v-show="isShowHistory">
			<view class="history-top">
				<text class="history-title">搜索历史</text>
				<u-icon name="trash" color="#7e7e7e" size="30" @click="clearHistory"></u-icon>
			</view>
			<view class="history-list">
				<view class="history-item" v-for="(item,index) in searchHistory">
					<text>{{item}}</text>
					<u-icon name="close" color="#7e7e7e" size="20" @click="delHistory(index)"></u-icon>
				</view>
			</view>
		</view>
		<view class="hot-box">
			<text class="hot-title">热门</text>
			<view class="hot-content" v-if="!isLoading">
				<view class="hot-content_info" v-for="(item,index) in hotList">
					<text :style="{color:index<3 ? '#e74c3c':'#151515'}">{{index+1+'. '}}</text>
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
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				hotList:[],
				isLoading:true,
				isShowHistory:false
			}
		},
		computed:{
			...mapState(["searchHistory"])
		},
		onLoad() {
			this.$api.get_hot_search().then(res => {
				const {data} = res;
				this.hotList = data;
				this.isLoading = false;
			})
		},
		updated() {
			if(this.searchHistory.length>0){
				this.isShowHistory = true;
			}else{
				this.isShowHistory = false;
			}
		},
		methods: {
			delHistory(i){
				this.$store.dispatch("del_history",i);
			},
			clearHistory(){
				this.$store.dispatch("clear_history");
				this.isShowHistory = false;
			}
		}
	}
</script>

<style lang="scss">
.search-history{
	width: 100%;
	padding: 20rpx 40rpx;
	.history-top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.history-title{
			font-size: 32rpx;
			font-weight: bold;
			color:#151515;
		}
	}
	.history-list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.history-item{
			flex-shrink: 0;
			padding: 4px 10rpx;
			border-radius: 20rpx;
			border:1rpx solid #bebebe;
			margin-right: 20rpx;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			text{
				margin-right: 10rpx;
			}
		}
	}
}
.hot-box{
	width: 100%;
	padding: 40rpx;
	.hot-title{
		font-size: 32rpx;
		font-weight: bold;
		color:#151515;
	}
	.hot-content{
		margin-top: 30rpx;
		.hot-content_info{
			height: 80rpx;
			color: #151515;
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
			background-color: #f4f5f6;
		}
		.hot-loading_2{
			height: 30rpx;
			margin-top: 40rpx;
			width: 80%;
			border-radius: 20rpx;
			background-color: #f4f5f6;
		}
		.hot-loading_3{
			height: 30rpx;
			margin-top: 40rpx;
			width: 90%;
			border-radius: 20rpx;
			background-color: #f4f5f6;
		}
		.hot-loading_4{
			height: 30rpx;
			margin-top: 40rpx;
			width: 70%;
			border-radius: 20rpx;
			background-color: #f4f5f6;
		}
		.hot-loading_5{
			height: 30rpx;
			margin-top: 40rpx;
			width: 80%;
			border-radius: 20rpx;
			background-color: #f4f5f6;
		}
	}
}
</style>
