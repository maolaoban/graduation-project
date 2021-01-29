<template>
	<view class="signIn-container">
		<view class="sign-top">
			<view class="sign-top_box">
				<view class="sign-avatar">
					<image src="../../static/images/avatar.jpg" mode="aspectFit"></image>
				</view>
				<view class="sign-info">
					<view class="sign-left">
						<view>已签到<text style="color: #fff200;font-size: 32rpx;">{{signDays}}/{{day}}</text>天</view>
						<u-line-progress active-color="#fff200" inactive-color="#f3f4f5" :percent="percent" :show-percent="false"></u-line-progress>
					</view>
					<view class="sign-right">
						<image src="../../static/images/gold-coin.png" mode="aspectFit"></image>
						66
					</view>
				</view>
			</view>
		</view>
		<view class="green-task">
			<view class="task-title">
				新手任务
			</view>
			<view class="task-list">
				<view class="task-item" v-for="item in 4">
					<view class="task-introduce">
						<text>首次登录</text> 
						<text>首次登录新人礼，+100金币</text> 
					</view>
					<view class="task-action">
						去完成
					</view>
				</view>
			</view>
		</view>
		<view class="daily-task">
			<view class="task-title">
				今日任务
			</view>
			<view class="task-list">
				<view class="task-item" v-for="item in 6">
					<view class="task-introduce">
						<text>首次登录</text> 
						<text>首次登录新人礼，+100金币</text> 
					</view>
					<view class="task-action">
						去完成
					</view>
				</view>
			</view>
		</view>
		<view class="declare">
			<view class="declare-title">
				签到规则
			</view>
			<view class="declare-content">
				1.每日签到完成，即可获得当日金币</br>
				2.连续签到10天未一个周期，第一天签到金币+1，第二天签到金币+2，以此类推。</br>
				3.断签需重新签到。
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent:0,
				day:0,
				signDays:10
			};
		},
		onLoad() {
			let now = new Date();
			let days = new Date(now.getFullYear(),now.getMonth()+1,0);
			let day = days.getDate();
			this.day = day;
			this.percent = (this.signDays/this.day)*100;
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f4f5;
}
.sign-top{
	width: 100%;
	height: 300rpx;
	background-image: linear-gradient(62deg, #08AEEA 0%, #a555f5 100%);
	-webkit-clip-path: ellipse(90% 60% at 50% 45%);
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	.sign-top_box{
		display: flex;
		.sign-avatar{
			width: 120rpx;
			height: 120rpx;
			border:4rpx solid #fff;
			border-radius: 50%;
			overflow: hidden;
			margin-top: 20rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.sign-info{
			width: 590rpx;
			height: 100rpx;
			padding: 10rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20rpx;
			.sign-left{
				color: $uni-text-color-inverse;
				font-size: 36rpx;
				/deep/.u-progress{
					height: 6rpx !important;
					width: 400rpx;
				}
			}
			.sign-right{
				height: 60rpx;
				width: 150rpx;
				border-radius: 40rpx;
				border:1px solid #f3f4f5;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 34rpx;
				font-weight: bold;
				color: $uni-text-color-inverse;
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
}
.green-task, .daily-task{
	width: 710rpx;
	margin: 0 20rpx;
	background-color: #fff;
	border-radius: 40rpx;
	position: relative;
	top:-100rpx;
	margin-bottom: 20rpx;
	padding: 20rpx;
	.task-title{
		font-size: 32rpx;
		font-weight: 600;
		color: $uni-text-color;
	}
	.task-list{
		margin-top: 20rpx;
		.task-item{
			height: 100rpx;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.task-introduce{
				display: flex;
				flex-direction: column;
				text{
					color: $uni-text-color;
					font-size: 28rpx;
				}
				text:nth-child(2){
					font-size: 24rpx;
					line-height: 40rpx;
					color: #bbb;
				}
			}
			.task-action{
				height: 50rpx;
				width: 100rpx;
				text-align: center;
				background-color: #f7e410;
				color: $uni-text-color;
				border-radius: 30rpx;
				line-height: 50rpx;
				font-size: 24rpx;
			}
		}
	}
}
.declare{
	width: 710rpx;
	padding: 20rpx;
	background-color: #fff;
	margin: 0 20rpx;
	border-radius: 20rpx;
	transform: translateY(-80rpx);
	.declare-title{
		font-size: 32rpx;
		font-weight: bold;
		color: $uni-text-color;
	}
	.declare-content{
		font-size: 28rpx;
		color: $uni-text-color;
		margin-top: 10rpx;
		line-height: 40rpx;
	}
}
</style>
