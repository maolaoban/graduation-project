<template>
	<view class="my-info">
		<view class="top-box">
			<view class="top-img">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1262914578,3997025524&fm=26&gp=0.jpg" mode="aspectFill"></image>
			</view>
			<view class="top-box_data">
				<view class="box-good">
					<text class="box-num">0</text>
					<text class="box-info">获赞</text>
				</view>
				<view class="box-funs">
					<text class="box-num">0</text>
					<text class="box-info">粉丝</text>
				</view>
				<view class="box-follow">
					<text class="box-num">0</text>
					<text class="box-info">关注</text>
				</view>
			</view>
		</view>
		<view class="user-info_box">
			<view class="user-avatar">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1262914578,3997025524&fm=26&gp=0.jpg" mode="aspectFill"></image>
			</view>
			<view class="user-info">
				<view class="user-info_name">
					<view class="user-info-level">
						LV6
					</view>
					毛老板
				</view>
				<view class="user-info_bio">
					这家伙很懒，一句话都竟然没留下，真奇怪。
				</view>
			</view>
			<view class="user-edit">
				编辑资料
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #171a23;	
}
.top-box{
	width: 100%;
	height: 500rpx;
	position: relative;
	.top-img{
		width: 100%;
		height: 100%;
		image{
			width:100%;
			height: 100%;
		}
	}
	.top-box_data{
		width: 100%;
		height: 150rpx;
		position: absolute;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.box-good,.box-funs,.box-follow{
			width: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: $uni-text-color-inverse;
			.box-num{
				font-size: 40rpx;
			}
			.box-info{
				font-size: 20rpx;
				color: rgba($color: $uni-text-color-inverse, $alpha: 0.8);
			}
		}
	}
}
.user-info_box{
	width: 100%;
	height: 150rpx;
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	position: relative;
	.user-avatar{
		width: 100rpx;
		height: 100rpx;
		flex-shrink: 0;
		border-radius: 50%;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.user-info{
		height: 100rpx;
		width: 100%;
		overflow: hidden;
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: $uni-text-color-inverse;
		.user-info_name{
			height: 40rpx;
			display: flex;
			align-items: center;
			.user-info-level{
				width: 60rpx;
				height: 30rpx;
				margin-right: 10rpx;
				background-color: #e74c3c;
				font-size: 24rpx;
				text-align: center;
				line-height: 30rpx;
				border-radius: 10rpx;
			}
		}
		.user-info_bio{
			white-space: pre-wrap;
			color:rgba($color: $uni-text-color-inverse, $alpha: 0.8);
		}
	}
	.user-edit{
		border:1px solid white;
		border-radius: 20rpx;
		position: absolute;
		padding: 0 10rpx;
		color:$uni-text-color-inverse;
		font-size: 24rpx;
		top: 30rpx;
		right:30rpx
	}
}
</style>
