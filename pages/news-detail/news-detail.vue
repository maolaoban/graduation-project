<template>
	<view class="detail-container">
		<view class="top-box">
			<image src="//nwzimg.wezhan.cn/contents/sitefiles2035/10175394/images/20623316.png?" mode="aspectFill"></image>
		</view>
		<view class="author-info">
			<view class="info-left">
				<view class="author-avatar">
					<image src="../../static/images/logo.png" mode="aspectFill"></image>
				</view>
				<view class="author-name">
					<text class="name">{{contentInfo.author}}</text>
					<text class="bio">这家伙很懒，一句话都竟然没留下，真奇怪。</text>
				</view>
			</view>
			<view class="author-follow" @click="addFollow" :class="{'followed':isFollow}">
				{{isFollow?'已关注':'关注'}}
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
		<comment-box></comment-box>
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
				scrollTop:0,
				style:{
					p: 'font-size:32rpx;line-height:50rpx',
					img:'margin:10px 0'
				}
			}
		},
		onLoad() {
			this.$api.get_content().then(res => {
				const {data} = res;
				console.log(data);
				this.contentInfo = data;
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
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #bbb;
		display: flex;
		justify-content: flex-end;
		text{
			margin-left: 20rpx;
		}
	}
}
</style>
