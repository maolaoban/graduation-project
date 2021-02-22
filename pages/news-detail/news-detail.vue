<template>
	<view class="detail-container">
		<view class="top-box">
			<image :src="contentInfo.top_cover" mode="scaleToFill"></image>
		</view>
		<view class="author-info" v-if="!loading">
			<view class="info-left">
				<view class="author-avatar">
					<image :src="contentInfo.author_avatar" mode="aspectFill"></image>
				</view>
				<view class="author-name">
					<text class="name">{{contentInfo.author_name}}</text>
					<text class="bio">{{contentInfo.author_bio}}</text>
				</view>
			</view>
			<view class="author-follow" @click="addFollow" :class="{'followed':isFollow}">
				{{isFollow?'已关注':'关注'}}
			</view>
		</view>
		<!-- 模拟骨架屏 -->
		<view v-else>
			<view class="author-info">
				<view class="info-left">
					<view class="author-avatar" style="background-color: #f4f5f6;"></view>
					<view class="author-name">
						<text class="name" style="background-color: #f4f5f6;width: 100rpx;height:20rpx;"></text>
						<text class="bio" style="margin-top:10rpx;background-color: #f4f5f6;width: 200rpx;height:20rpx;"></text>
					</view>
				</view>
				<view class="author-follow" style="background-color: #f4f5f6;"></view>
			</view>
			<view class="content-loading">
				<view class="content-title"></view>
				<view class="content-info" v-for="item in 7"></view>
			</view>
		</view>
		
		<view class="detail-content">
			<view class="content-title" v-text="contentInfo.title"></view>
			<view class="content-time">
				<text>{{contentInfo.create_time}}</text>
				<text>阅读 {{contentInfo.read_count}}</text>
			</view>
			<view class="u-content">
				<u-parse :html="contentInfo.content" :tag-style="style"></u-parse>
			</view>
		</view>
		<!-- 评论 -->
		<comment-box :comment="commentList"></comment-box>
		<!-- 返回顶部按钮 -->
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<!-- 评论框 -->
		<comment-input></comment-input>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFollow:false,
				contentInfo:{},
				commentList:[],
				scrollTop:0,
				style:{
					p: 'font-size:32rpx;line-height:50rpx',
					img:'margin:10px 0'
				},
				loading:true
			}
		},
		onLoad(option) {
			this.$api.get_content({
				article_id:option.article_id
			}).then(res => {
				const {data} = res;
				console.log(data);
				this.contentInfo = data;
				this.commentList = data.comment;
				this.loading = false;
				//设置导航栏文字
				uni.setNavigationBarTitle({
				    title: data.title
				});
			});
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop;
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			addFollow(){
				this.isFollow = !this.isFollow;
			}
		}
	}
</script>

<style lang="scss">
.top-bar{
	z-index: 20;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.back-btn{
	width: 100%;
	height: 80rpx;
	display: flex;
	background-color: #fff;
	padding: 0 20rpx;
	align-items: center;
	z-index: 10;
	text{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		margin-left:20rpx;
	}
}
.top-box{
	width: 100%;
	height: 400rpx;
	background-color: #f4f5f6;
	image{
		width: 100%;
		height: 100%;
	}
}
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
				color:$uni-text-color;
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
.detail-content{
	padding: 20rpx;
	.content-title{
		font-size: 44rpx;
		color: $uni-text-color;
		font-weight: 700;
	}
	.content-time{
		margin: 20rpx;
		font-size: 26rpx;
		color: #bbb;
		display: flex;
		justify-content: flex-end;
		text{
			margin-left: 20rpx;
		}
	}
}
.content-loading{
	width:100%;
	padding: 20rpx;
	.content-title{
		width: 700rpx;
		height: 40rpx;
		background-color: #f4f5f6;
		margin-top: 40rpx;
	}
	.content-info{
		width: 600rpx;
		height: 20rpx;
		background-color: #f4f5f6;
		margin-top: 40rpx;
	}
	.content-info:nth-last-child(1){
		width: 400rpx;
	}
	.content-info:nth-last-child(5){
		width: 400rpx;
	}
}
</style>
