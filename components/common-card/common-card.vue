<template>
	<view class="common-card">
		<view class="news-card" @click="goDetail">
			<view class="card-title">
				[创作者计划] 人人都能做测评
			</view>
			<view class="card-cover_one" v-if="coverList.length === 1">
				<image :src="coverList[0]" mode="aspectFill"></image>
			</view>
			<view class="card-cover_more" v-else>
				<view class="more-img" v-for="item in coverList">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</view>
			<view class="card-info">
				<view class="card-info_author">
					<view class="author_avatar">
						<image src="../../static/images/logo.png" mode="as"></image>
					</view>
					<view class="card-info_name">
						毛老板/2021-1-23
					</view>
				</view>
				<view class="card-info_record">
					<view class="record-view">
						<u-icon name="eye" color="#bbbbbb" size="35"></u-icon>
						1726
					</view>
					<view class="record-like">
						<u-icon name="chat" color="#bbbbbb" size="35"></u-icon>
						27
					</view>
				</view>
			</view>
		</view>
		<u-gap height="10" bg-color="#eeeeee"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coverList:[
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F04%2F20180604011017_nclts.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613978449&t=35c4821bbbbb98aa0cb9407cd3a5ec34',
					// 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/279759ee3d6d55fbee698d9266224f4a21a4ddd3.jpg',
					// 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1704471196,2520026755&fm=26&gp=0.jpg',
				]
			};
		},
		methods:{
			goDetail(index){
				uni.navigateTo({
					url:'../../news-detail/news-detail'
				})
			}
		}
	}
</script>

<style lang="scss">
.common-card{
	width: 100%;
	.news-card{
		width: 690rpx;
		margin: 0 30rpx;
		padding: 20rpx 0;
		.card-title{
			font-size: 32rpx;
			color: #333;
		}
		.card-cover_one{
			width: 100%;
			height: 300rpx;
			margin-top: 10rpx;
			border-radius: 10rpx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.card-cover_more{
			width: 100%;
			height: 200rpx;
			margin-top: 10rpx;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			overflow: hidden;
			.more-img{
				width: 32%;
				height: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.card-info{
			height: 60rpx;
			width: 100%;
			margin-top: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.card-info_author{
				display: flex;
				align-items: center;
				.author_avatar{
					height: 50rpx;
					width: 50rpx;
					border-radius: 50%;
					margin-right: 10rpx;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.card-info_name{
					font-size: 24rpx;
					color:#bbb;
				}
			}
			.card-info_record{
				display: flex;
				view{
					display: flex;
					align-items: center;
					margin-right: 10rpx;
					font-size: 24rpx;
					color:#bbb;
				}
			}
		}
	}
}
</style>
