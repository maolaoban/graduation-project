<template>
	<view class="content">
		<navbar></navbar>
		<!-- 轮播图 -->
		<view class="swiper">
			<u-swiper :list="carouseList" mode="rect" :effect3d="true" :circular="true"
				:height="300"
				:interval="3000"
				:border-radius="20"
				bg-color="#101010"
				@click="goDetail"
			>
			</u-swiper>
		</view>
		<view class="content-middle">
			<view class="content-middle_store content-middle-common" hover-class="content-middle_change" hover-stay-time="50">
				<u-icon name="bag-fill" color="#fff" size="40"></u-icon>
				<text>商城</text>
			</view>
			<view class="content-middle_activity content-middle-common" hover-class="content-middle_change" hover-stay-time="50">
				<u-icon name="gift" color="#fff" size="40"></u-icon>
				<text>活动</text>
			</view>
			<view class="content-middle_sign content-middle-common" hover-class="content-middle_change" hover-stay-time="50">
				<u-icon name="calendar" color="#fff" size="40"></u-icon>
				<text>签到</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouseList:[]
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
		// padding:0 30rpx ;
		border-radius: 40rpx;
	}
	.content-middle{
		width: 100%;
		height: 150rpx;
		margin-top: 20rpx;
		padding: 15rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.content-middle-common{
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 28rpx;
			width: 30%;
			height: 100rpx;
			border-radius: 30rpx;
			text{
				margin-left: 6rpx;
				font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
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
</style>
