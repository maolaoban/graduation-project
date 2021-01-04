<template>
	<view class="navabr">
		<view :style="{height:statusBarHeight+2+'px'}"></view>
		<view class="navbar-fixed"
			:class="{'navbar-reverse':isReverse}"
			:style="{height:navBarHeight+'px',width:windowWidth? windowWidth + 'px':'100%'}"
		>
			<view class="navabr-search">
				<u-icon name="search" color="#fff" size="30"></u-icon>
				<text class="navbar-search_text">小米11 首发晓龙888</text>
			</view>
			<view class="navbar-message">
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
		}
	}
</script>

<style lang="scss">
	.navabr{
		.navbar-fixed{
			height: 100rpx;
			width: 100%;
			padding: 0 30rpx;
			position: fixed;
			z-index: 999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #dcdcdc;
			.navabr-search{
				background-color: #515151;
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
		}
		.navbar-reverse{
			flex-direction: row-reverse;
			.navbar-message{
				margin-right: 20rpx;
			}
		}
	}
</style>
