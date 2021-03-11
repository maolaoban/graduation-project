<template>
	<view class="comment-container">
		<view class="comment-title">
			热门评论
		</view>
		<view v-if="comment.length > 0">
			<view class="comment-body" v-for="item in comment">
				<view class="comment-body_top">
					<view class="comment-body_avatar">
						<image :src="item.avatar" mode="aspectFit"></image>
					</view>
					<view class="comment-body_right">
						<view class="comment-body_info">
							<view class="body-info_name">
								{{item.name}}
							</view>
							<view class="body-info_like">
								<u-icon :name="!isThumb?'thumb-up':'thumb-up-fill'" size="30" :color="!isThumb?'#333':'#01b9fd'"></u-icon>
								<text>{{item.like_count}}</text>
							</view>
						</view>
						<view class="comment-body_time">
							{{item.time | timeFormate}}
						</view>
					</view>
				</view>
				<view class="comment-body_text">
					{{item.content}}
				</view>
			</view>
		</view>
		<view class="no-comment" v-else>
			当前暂无评论
		</view>
	</view>
</template>

<script>
	import {parseTime} from '../../utils/timeFormat.js'
	export default {
		props:{
			comment:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
		data() {
			return {
				isThumb:false
			};
		},
		filters:{
			timeFormate(date){
				return parseTime("yyyy-mm-dd hh:ii", new Date(date))
			}
		},
	}
</script>

<style lang="scss">
.comment-container{
	width: 100%;
	margin-top: 20rpx;
	padding: 20rpx 20rpx 120rpx 20rpx;
	border-top:10rpx solid #f4f5f6;
	.comment-title{
		font-size: 36rpx;
		font-weight: bold;
		
	}
	.comment-body{
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		.comment-body_top{
			display: flex;
			.comment-body_avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				flex-shrink: 0;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.comment-body_right{
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-left: 10rpx;
				.comment-body_info{
					width: 90%;
					height: 50rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.body-info_name{
						font-size: 28rpx;
						color: $uni-text-color;
					}
					.body-info_like{
						font-size: 26rpx;
						color:#bbb;
						text{
							margin-left: 4rpx;
						}
					}
				}
				.comment-body_time{
					font-size: 24rpx;
					color: #bbb;
				}
			}
		}
		.comment-body_text{
			width: 600rpx;
			margin-left: 90rpx;
			margin-top: 20rpx;
			background-color: #f4f5f6;
			border-radius: 0 20rpx 20rpx 20rpx;
			padding: 20rpx;
		}
	}
	.no-comment{
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		font-size: 28rpx;
	}
}
</style>
