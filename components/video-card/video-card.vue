<template>
	<view class="video-card">
		<view class="video-card_top">
			<view class="video-cover">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1262914578,3997025524&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="video-info">
					<view class="video-info_left">
						<u-icon name="play-right" color="#fff" size="20"></u-icon>
						<text>200</text>
					</view>
					<view class="video-info_right">
						2:36
					</view>
				</view>
			</view>
			<view class="video-footer">
				<view class="video-title">
					相遇太空--太空暗杀计划
				</view>
				<view class="video-author">
					科技美学
				</view>
			</view>
		</view>
		<view class="video-card_body">
			<view class="video-card_box" v-for="item in 8">
				<view class="video-cover">
					<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1262914578,3997025524&fm=26&gp=0.jpg" mode="aspectFill"></image>
					<view class="video-info">
						<view class="video-info_left">
							<u-icon name="play-right" color="#fff" size="20"></u-icon>
							<text>200</text>
						</view>
						<view class="video-info_right">
							2:36
						</view>
					</view>
				</view>
				<view class="video-footer">
					<view class="video-title">
						相遇太空--太空暗杀计划
					</view>
					<view class="video-author">
						科技美学
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
				
			};
		}
	}
</script>

<style lang="scss">
.video-card{
	padding: 30rpx;
	.video-card_top{
		width: 100%;
		height:450rpx;
		border-radius: 10rpx;
		box-shadow:0px 4px 10px 0px #CCCCCC;
		overflow: hidden;
		.video-cover{
			width: 100%;
			height: 360rpx;
			position: relative;
			image{
				width: 100%;
				height: 100%;
			}
			.video-info{
				width: 100%;
				height:50rpx;
				position: absolute;
				bottom: 0;
				padding: 0 10rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #fff;
				text{
					margin-left: 5rpx;
				}
			}
		}
		.video-footer{
			padding: 10rpx 20rpx;
			font-size: 28rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.video-author{
				color:#7e7e7e;
				font-size: 26rpx;
			}
		}
	}
	.video-card_body{
		margin-top: 15rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.video-card_box{
			width: 48%;
			height: 300rpx;
			margin-bottom: 15rpx;
			border-radius: 10rpx;
			overflow: hidden;
			box-shadow:0px 4px 10px 0px #CCCCCC;
			.video-cover{
				width: 100%;
				height: 200rpx;
				position: relative;
				image{
					width: 100%;
					height: 100%;
				}
				.video-info{
					width: 100%;
					height:50rpx;
					position: absolute;
					bottom: 0;
					padding: 0 10rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: #fff;
					text{
						margin-left: 5rpx;
					}
				}
			}
			.video-footer{
				padding: 10rpx 20rpx;
				font-size: 26rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.video-author{
					color:#7e7e7e;
					font-size: 26rpx;
				}
			}
		}
	}
}
.video-cover{
	background-color:#f4f5f6 ;
}
</style>
