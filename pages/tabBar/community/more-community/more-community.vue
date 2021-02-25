<template>
	<view class="community-list">
		<view class="topic-box" v-for="(item, index) in topicList" :key="item.id">
			<view class="topic-box_img">
				<u-lazy-load :image="item.cover_img" imgMode="aspectFill" height="350rpx"></u-lazy-load>
				<view class="topic-tag">
					#{{item.tag}}#
				</view>
			</view>
			<view class="top-box_title">
				{{item.title}}
			</view>
			<view class="top-box_option">
				<view class="follow-btn" @click="followTopic(index)">
					<i class="iconfont icon-plus" v-if="!item.isFollow"></i>
					<i class="iconfont icon-icon" v-else></i>
					{{item.isFollow?'已关注话题':'关注话题'}}
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
				topicList:[],
				isFollow:false,
				topicNum:0
			};
		},
		created() {
			this.$api.get_communityList().then(res => {
				const {data} = res;
				this.topicList = data;
			})
		},
		methods:{
			followTopic(index){
				this.topicNum = index;
				this.isFollow = !this.isFollow;
			}
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
		border-radius: 10rpx;
		overflow: hidden;
		background-color: #fff;
		margin-bottom: 40rpx;
		.topic-box_img{
			width: 100%;
			height: 350rpx;
			position: relative;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
			.topic-tag{
				height: 50rpx;
				width: 160rpx;
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
			width: 100%;
			display: flex;
			align-items: center;
			padding: 10rpx 20rpx;
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
