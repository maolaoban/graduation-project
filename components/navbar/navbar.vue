<template>
	<view class="navabr">
		<view :style="{height:statusBarHeight+2+'px'}"></view>
		<view class="navbar-fixed"
			:class="{'navbar-reverse':isReverse && !isSearch}"
			:style="{height:navBarHeight+'px',width:windowWidth? windowWidth + 'px':'100%'}"
		>
			<view class="navbar-back" v-if="isSearch" @click="goBack()">
				<u-icon name="arrow-left" color="#fff" size="40"></u-icon>
			</view>
			<view class="navabr-search" @click="toSearch" v-if="!isSearch">
				<u-icon name="search" color="#fff" size="30"></u-icon>
				<text class="navbar-search_text">小米11 首发晓龙888</text>
			</view>
			<view class="navabr-search_input" v-else>
				<u-icon name="search" color="#aaaaaa" size="30"></u-icon>
				<input class="search-input" type="text" value="" placeholder="新版iPad Pro曝光..." placeholder-class="input-placeholder"/>
			</view>
			<view class="navbar-message" v-if="!isSearch" @click="toMyMessage">
				<u-icon name="email" color="#fff" size="40"></u-icon>
			</view>
		</view>
		<view :style="{height: statusBarHeight + navBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 50,
				windowWidth:0,
				isReverse:false
			};
		},
		props:{
			isSearch:{
				type:Boolean,
				default:false
			}
		},
		created() {
			//获取手机信息，获取状态栏高度
			let sysInfo = uni.getSystemInfoSync();
			console.log(sysInfo);
			this.statusBarHeight = sysInfo.statusBarHeight;
			
			//#ifndef H5 || APP-PLUS
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			console.log(menuButtonInfo)
			this.navBarHeight = (menuButtonInfo.bottom - sysInfo.statusBarHeight) +
				(menuButtonInfo.top - sysInfo.statusBarHeight);
			this.windowWidth = menuButtonInfo.left;
			this.isReverse = true;
			//#endif
		},
		methods:{
			toSearch(){
				uni.navigateTo({
					url:'/pages/search-page/search-page'
				})
			},
			goBack(){
				uni.switchTab({
					url:'../../pages/tabBar/index/index'
				})
			},
			toMyMessage(){
				uni.navigateTo({
					url:'/pages/my-message/my-message'
				})
			}
		}
	}
</script>

<style lang="scss">
	.navabr{
		.navbar-fixed{
			height: 100rpx;
			width: 100%;
			padding: 0 20rpx;
			position: fixed;
			z-index: 999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #dcdcdc;
			.navbar-back{
				width: 60rpx;
				height:60rpx;
				display: flex;
				align-items: center;
			}
			.navabr-search{
				background-color: #303133;
				border-radius: 30rpx;
				width: 90%;
				height: 60rpx;
				padding-left: 20rpx;
				display: flex;
				align-items: center;
				.navbar-search_text{
					font-size: 24rpx;
					margin-left: 10rpx;
				}
			}
			.navabr-search_input{
				background-color: #303133;
				border-radius: 10rpx;
				width: 100%;
				height: 60rpx;
				padding-left: 20rpx;
				display: flex;
				align-items: center;
				.search-input{
					font-size: 26rpx;
					padding: 0 20rpx;
					width: 85%;
				}
			}
		}
		.input-placeholder{
			font-size: 26rpx;
			color:rgba($color: #ffffff, $alpha: 0.5);
		}
		.navbar-reverse{
			flex-direction: row-reverse;
			.navbar-message{
				margin-right: 20rpx;
			}
		}
	}
</style>
