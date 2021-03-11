<template>
	<view class="common-card">
		<view v-for="(obj,index) in newsList" :key="obj._id">
			<view class="community-card" v-if="isCommunity">
				<view class="author-info">
					<view class="author-avatar">
						<image src="../../static/images/avatar.jpg" mode="aspectFill" lazy-load="true"></image>
					</view>
					<view class="author-info_text">
						<view class="author-info_name">
							科技小白
						</view>
						<view class="author-info_time">
							{{obj.create_time | timeFormate}}
						</view>
					</view>
				</view>
				<view class="card-text">
					<text style="color:#01b9fd;">{{obj.topic}}</text>
					{{obj.content}}
				</view>
				<view class="card-cover">
					<view class="card-cover_item" v-for="item in 2">
						<image src="../../static/images/rank-1.png" mode=""></image>
					</view>
				</view>
				<view class="card-bottom">
					<view class="bottom-count">
						<u-icon name="thumb-up" color="#333" size="40"></u-icon>
						<text>{{obj.like}}</text>
					</view>
					<view class="bottom-count">
						<u-icon name="chat" color="#333" size="40"></u-icon>
						<text>{{obj.comment_total}}</text>
					</view>
					<view class="bottom-count">
						<u-icon name="zhuanfa" color="#333" size="40"></u-icon>
						<text>分享</text>
					</view>
				</view>
			</view>
			<view class="news-card" @click="goDetail(obj._id)" v-else>
				<view class="card-left">
					<view class="card-title">
						{{obj.title}}
					</view>
					<view class="card-left_body">
						<view class="card-tag" v-if="isTheme">
							{{obj.tag}}
						</view>
						<view class="card-theme" v-else>
							专题
						</view>
						<view class="card-info_record">
							<view class="record-view">
								<u-icon name="eye" color="#bbbbbb" size="35"></u-icon>
								<text>{{obj.read_count}}</text>
							</view>
							<view class="record-like">
								<u-icon name="chat" color="#bbbbbb" size="35"></u-icon>
								<text>{{obj.comment_total}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="card-right">
					<view class="card-cover">
						<image :src="obj.top_cover" mode="aspectFill" lazy-load="true"></image>
					</view>
				</view>
			</view>
			<!-- 分割线 -->
			<u-gap height="10" bg-color="#f4f5f6"></u-gap>
		</view>
	</view>
</template>

<script>
	import {parseTime} from '../../utils/timeFormat.js'
	export default {
		props:{
			isCommunity:{
				type:Boolean,
				default:false
			},
			newsList:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		filters:{
			timeFormate(date){
				return parseTime("yyyy-mm-dd hh:ii", new Date(date))
			}
		},
		data() {
			return {
				coverList:[
					'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F04%2F20180604011017_nclts.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613978449&t=35c4821bbbbb98aa0cb9407cd3a5ec34',
					'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/279759ee3d6d55fbee698d9266224f4a21a4ddd3.jpg',
					'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1704471196,2520026755&fm=26&gp=0.jpg',
				],
				isTheme:true
			};
		},
		methods:{
			goDetail(id){
				uni.navigateTo({
					url:'../../news-detail/news-detail?article_id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
.common-card{
	width: 100%;
	.community-card{
		width: 100%;
		padding: 20rpx 20rpx 0 20rpx;
		.author-info{
			width: 100%;
			height: 100rpx;
			display: flex;
			align-items: center;
			.author-avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.author-info_text{
				margin-left: 20rpx;
				.author-info_name{
					font-size: 28rpx;
					color: $uni-text-color;
				}
				.author-info_time{
					font-size: 24rpx;
					color: #bbb;
				}
			}
		}
		.card-text{
			font-size: 28rpx;
			color: $uni-text-color;
		}
		.card-cover{
			width: 100%;
			margin-top: 20rpx;
			display: flex;
			flex-wrap: wrap;
			.card-cover_item:nth-child(3n){
				margin-right: 0;
			}
			.card-cover_item{
				width: 230rpx;
				height: 230rpx;
				margin-top: 10rpx;
				margin-right: 10rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.card-bottom{
			width: 100%;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.bottom-count{
				display: flex;
				align-items: center;
				text{
					margin-left: 6rpx;
					font-size: 24rpx;
					color: $uni-text-color;
				}
			}
		}
	}
	.news-card{
		width: 100%;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		.card-left{
			width: 500rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.card-title{
				font-size: 32rpx;
				color: #333;
				display: -webkit-box; 
				-webkit-box-orient: vertical; 
				-webkit-line-clamp: 2; 
				overflow: hidden;
				text-overflow:ellipsis;
			}
			.card-left_body{
				width: 100%;
				display: flex;
				.card-tag{
					color:#08AEEA ;
				}
				.card-theme{
					border: 1rpx solid #08AEEA;
					border-radius: 6rpx;
					padding: 0 4rpx;
					font-size: 24rpx;
					color: #08AEEA;
				}
				.card-info_record{
					display: flex;
					.record-view, .record-like{
						margin-left: 20rpx;
						display: flex;
						align-items: center;
						text{
							color: #bbb;
							font-size: 24rpx;
						}
					}
				}
			}
		}
		.card-right{
			width: 200rpx;
			height: 150rpx;
			border-radius: 8rpx;
			overflow: hidden;
			.card-cover{
				width: 100%;
				height: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
