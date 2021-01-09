<template>
	<view class="content">
		<navbar></navbar>
		<!-- 轮播图 -->
		<view class="swiper" v-if="!isLoading">
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
					<text>今日头条</text>
				</view>
				<view class="toutiao-body">
					<view class="body-line">
						<u-icon name="pushpin-fill" color="#f6ef37" size="20"></u-icon>
						<text>[爆料]iPhone 13 LTPO OLED屏幕，三星独供</text>
					</view>
					<view class="body-line">
						<u-icon name="pushpin-fill" color="#f6ef37" size="20"></u-icon>
						<text>[爆料]OPPO Find X3跑分、参数曝光</text>
					</view>
					<view class="body-line">
						<u-icon name="pushpin-fill" color="#f6ef37" size="20"></u-icon>
						<text>[爆料]AMD锐龙5000系Cezanne APU内核图曝光：三级缓存升级</text>
					</view>
				</view>
			</view>
		</view>
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
				uniCloud.callFunction({
					name:"get_carousel"
				}).then(res => {
					console.log(res.result);
					const {data} = res.result;
					data.forEach((item)=>{
						this.carouseList.push(item.cover_img)
					})
					this.isLoading = false;
					console.log(this.carouseList)
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
			background-color: #303133;
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
			background-color: rgba($color: #303133, $alpha: 0.5);
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
					font-size: 30rpx;
					color:$uni-text-color-inverse;
				}
			}
			.toutiao-body{
				.body-line{
					height: 70rpx;
					display: flex;
					align-items: center;
					text{
						margin-left: 10rpx;
						color: $uni-text-color-inverse;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
