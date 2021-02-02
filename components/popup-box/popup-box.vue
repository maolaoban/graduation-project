<template>
	<view v-show="show" class="popup" @touchmove.prevent>
		<view class="popup-box">
			<u-icon class="close" name="close-circle" size="40" color="#bbb" @click="closePopup"></u-icon>
			<view class="sign-emoji" v-if="!selected">
				<view v-for="(item,index) in signEmoji" v-text="item" @click="choiceEmoji(item,index)"></view>
			</view>
			<view class="sign-success" v-else>
				<view class="emoji">
					{{selected}}
				</view>
				<view class="text">
					签到成功，金币+1
				</view>
			</view>
			<view class="popup-button" @click="goSignPage">领更多金币</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				signEmoji:['😃','😍','😞','😥','😮','🤬','😎','😭','🤡','🤧'],
				selected:''
			};
		},
		methods:{
			changeShow(bool){
				this.show = bool;
			},
			goSignPage(){
				uni.navigateTo({
					url:'/pages/signIn-page/signIn-page'
				})
				this.show = !this.show;
			},
			closePopup(){
				this.show = !this.show;
			},
			choiceEmoji(item,index){
				console.log(item);
				this.selected = this.signEmoji[index];
			}
		}
	}
</script>

<style lang="scss">
.popup{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba($color: #000, $alpha: 0.1);
	.popup-box{
		width: 600rpx;
		height: 400rpx;
		position: fixed;
		margin: 0 75rpx;
		top:50%;
		transform: translateY(-50%);
		background-color: #fff;
		border-radius: 20rpx;
		box-shadow:0px 8rpx 20rpx 0px #CCCCCC;
		display: flex;
		flex-direction: column;
		align-items: center;
		.close{
			position: absolute;
			top:20rpx;
			right: 20rpx;
		}
		.sign-emoji{
			width: 500rpx;
			display: flex;
			flex-wrap: wrap;
			margin-top: 60rpx;
			view{
				width: 80rpx;
				height: 80rpx;
				font-size: 60rpx;
				margin: 10rpx;
			}
		}
		.sign-success{
			margin-top: 60rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.emoji{
				font-size: 100rpx;
			}
			.text{
				margin-top: 20rpx;
				font-size: 32rpx;
			}
		}
		.popup-button{
			width: 240rpx;
			height: 60rpx;
			position: absolute;
			bottom: 40rpx;
			background-color: #f7e410;
			border-radius: 40rpx;
			color: $uni-text-color;
			font-size: 30rpx;
			text-align: center;
			line-height: 60rpx;
		}
	}
}
</style>
