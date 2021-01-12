<template>
	<view class="content">
		<navbar></navbar>
		<tab></tab>
		<view class="home-list">
			<list></list>
		</view>
		<!-- 轮播图 -->
		<!-- <view class="swiper" v-if="!isLoading">
			<u-swiper :list="carouseList" mode="rect" :effect3d="true" :circular="true"
				:height="300"
				:interval="3000"
				:border-radius="20"
				:bg-color="color"
				@click="goDetail"
			>
			</u-swiper>
		</view>
		<view class="swiper_loading" v-else>
			<view class="swiper"></view>
		</view>
		<view class="content-middle">
			<view class="content-middle_store content-middle-common" hover-class="content-middle_change" hover-stay-time="50">
				<u-icon name="bag-fill" color="#fff" size="40"></u-icon>
				<text>商城</text>
			</view>
			<view class="content-middle_activity content-middle-common" hover-class="content-middle_change" hover-stay-time="50">
				<u-icon name="gift-fill" color="#fff" size="40"></u-icon>
				<text>活动</text>
			</view>
			<view class="content-middle_sign content-middle-common" hover-class="content-middle_change" hover-stay-time="50">
				<u-icon name="calendar-fill" color="#fff" size="40"></u-icon>
				<text>签到</text>
			</view>
		</view>
		<view class="toutiao">
			<view class="toutiao-container">
				<view class="toutiao-header">
					<view class="toutiao-icon">
						<image src="../../../static/hot-news.png" mode="aspectFill"></image>
					</view>
					<text>今日热点</text>
				</view>
				<view class="toutiao-body">
					<view class="body-line" v-for="item in 3">
						<view class="body-icon"></view>
						<text>[爆料]iPhone 13 LTPO OLED屏幕，三星独供</text>
					</view>
				</view>
			</view>
		</view>
		<video-card></video-card> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouseList:[],
				color:'$uni-bg-color',
				isLoading:true
			}
		},
		onLoad() {
			this.getCarousel();
		},
		methods: {
			getCarousel(){
				this.$api.get_carousel().then(res => {
					console.log(res.data);
					const {data} = res;
					data.forEach((item)=>{
						this.carouseList.push(item.cover_img)
					})
					this.isLoading = false;
				})
			},
			goDetail(index){
				uni.navigateTo({
					url:'../../news-detail/news-detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.content{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
	}
	.home-list{
		flex: 1;
		box-sizing: border-box;
	}
	.swiper{
		width: 100%;
	}
	.swiper_loading{
		width: 100%;
		height:300rpx;
		display: flex;
		justify-content: center;
		.swiper{
			width: 90%;
			height: 100%;
			border-radius: 20rpx;
			background-color: #f4f5f6;
		}
	}
	.content-middle{
		width: 100%;
		height: 150rpx;
		margin-top: 15rpx;
		padding: 15rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.content-middle-common{
			display: flex;
			align-items: center;
			justify-content: center;
			color: $uni-text-color-inverse;
			font-size: 28rpx;
			width: 30%;
			height: 100rpx;
			border-radius: 30rpx;
			text{
				margin-left: 6rpx;
			}
		}
		.content-middle_store{
			background-color: #4158D0;
			background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
		}
		.content-middle_activity{
			background-color: #08AEEA;
			background-image: linear-gradient(62deg, #08AEEA 0%, #2AF598 100%);
		}
		.content-middle_sign{
			background-color: #FF3CAC;
			background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
		}
		.content-middle_change{
			width: 28%;
			height: 95rpx;
		}
	}
	.toutiao{
		width: 100%;
		padding: 20rpx;
		display: flex;
		.toutiao-container{
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
			padding: 15rpx;
			// background-color: #d4d4d4;
			.toutiao-header{
				width: 100%;
				height: 60rpx;
				display: flex;
				align-items: center;
				.toutiao-icon{
					height:60rpx;
					width: 60rpx;
					overflow: hidden;
					margin-right: 10rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				text{
					font-size: 32rpx;
					font-weight: bold;
					color:$uni-text-color;
				}
			}
			.toutiao-body{
				.body-line{
					height: 70rpx;
					display: flex;
					align-items: center;
					.body-icon{
						width: 15rpx;
						height: 15rpx;
						background-color: #f85049;
						flex-shrink: 0;
					}
					text{
						margin-left: 10rpx;
						color: $uni-text-color;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
