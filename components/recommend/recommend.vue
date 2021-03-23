<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="swiper" v-if="!isLoading">
			<u-swiper :list="carouseList" mode="rect" :effect3d="true" :circular="true"
				:height="300"
				:interval="3000"
				:border-radius="20"
				:bg-color="color"
				@click="goDetail(carouseList._id)"
			>
			</u-swiper>
		</view>
		<view class="swiper_loading" v-else>
			<view class="swiper"></view>
		</view>
		<view class="content-middle">
			<view class="content-middle_classify content-middle-common" @click="goProduct">
				<u-icon name="grid-fill" color="#fff" size="40"></u-icon>
				<text>榜单</text>
			</view>
			<view class="content-middle_store content-middle-common" @click="goStore">
				<u-icon name="bag-fill" color="#fff" size="40"></u-icon>
				<text>商城</text>
			</view>
			<view class="content-middle_activity content-middle-common" @click="goActivity">
				<u-icon name="gift-fill" color="#fff" size="40"></u-icon>
				<text>活动</text>
			</view>
			<view class="content-middle_sign content-middle-common" @click="showSign">
				<u-icon name="calendar-fill" color="#fff" size="40"></u-icon>
				<text>签到</text>
			</view>
			
		</view>
		<!-- 签到 -->
		<popup-box :isShow="isShow" ref="signChild"></popup-box>
		<!-- 发表 -->
		<!-- <fab></fab> -->
		
		<view class="toutiao">
			<view class="toutiao-container" @click="goHotList">
				<view class="toutiao-header">
					<!-- <view class="toutiao-icon">
						<image src="../../static/images/hot-news.png" mode="aspectFill"></image>
					</view> -->
					<text>今日热点</text>
				</view>
				<view class="toutiao-body">
					<view class="body-line">
						<view class="body-icon"></view>
						<text>ROG游戏手机5正式发布</text>
					</view>
					<view class="body-line">
						<view class="body-icon"></view>
						<text>小米10s发布3299起</text>
					</view>
					<view class="body-line">
						<view class="body-icon"></view>
						<text>iPhone 13 LTPO OLED屏幕，三星独供</text>
					</view>
				</view>
			</view>
		</view>
		<view class="hot-recommend">
			<view class="hot-recommend_text">
				<image src="../../static/images/title.png" mode="aspectFit"></image>
				热门推荐
			</view>
			<common-card  :newsList="newsList"></common-card>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			newsList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data() {
			return {
				carouseList:[],
				color:'$uni-bg-color',
				isLoading:true,
				isShow:false,
				// newsList:[]
			}
		},
		created() {
			this.getCarousel();
			// this.getNewsList();
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
			goDetail(id){
				uni.navigateTo({
					url:'../../news-detail/news-detail?article_id=' + id
				})
			},
			goProduct(){
				uni.navigateTo({
					url:'/pages/rank/rank'
				})
			},
			goActivity(){
				uni.navigateTo({
					url:'/pages/activities-page/activities-page'
				})
			},
			showSign(){
				this.$refs.signChild.changeShow(true);
			},
			editArticle(){
				uni.navigateTo({
					url:'/pages/edit-article/edit-article'
				})
			},
			goStore(){
				uni.navigateTo({
					url:'/pages/store-page/store-page'
				})
			},
			goHotList(){
				uni.navigateTo({
					url:'/pages/hot-page/hot-page'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		margin-top: 10rpx;
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
			width: 22%;
			height: 80rpx;
			border-radius: 50rpx;
			text{
				margin-left: 6rpx;
			}
		}
		.content-middle_classify{
			background-color: #f88c56;
			box-shadow:0px 8rpx 20rpx 0px #CCCCCC;
			// background-image: linear-gradient(43deg, #7461d0 0%, #5f45c8 46%, #FFCC70 100%);
		}
		.content-middle_store{
			background-color: #4158D0;
			box-shadow:0px 8rpx 20rpx 0px #CCCCCC;
			// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
		}
		.content-middle_activity{
			background-color: #08AEEA;
			box-shadow:0px 8rpx 20rpx 0px #CCCCCC;
			// background-image: linear-gradient(62deg, #08AEEA 0%, #a555f5 100%);
		}
		.content-middle_sign{
			background-color: #FF3CAC;
			box-shadow:0px 8rpx 20rpx 0px #CCCCCC;
			// background-image: linear-gradient(225deg, #ff5ef2 0%, #784BA0 50%, #2B86C5 100%);
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
			border: 2rpx solid #f3f4f5;
			// box-shadow:0px 8rpx 20rpx 0px #CCCCCC;
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
					font-size: 36rpx;
					font-weight: bold;
					color:#13227a;
				}
			}
			.toutiao-body{
				.body-line{
					height: 70rpx;
					display: flex;
					align-items: center;
					margin-left: 10rpx;
					.body-icon{
						width: 10rpx;
						height: 10rpx;
						background-color: #13227a;
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
	.hot-recommend_text{
		display: flex;
		align-items: center;
		font-size: 36rpx;
		font-weight: bold;
		color:#13227a;
		image{
			width: 80rpx;
			height: 80rpx;
		}
	}
</style>