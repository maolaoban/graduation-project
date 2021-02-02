<template>
	<view class="chat-message">
		<view class="other-message" v-if="message.type === 0">
			<view class="chat-avatar">
				<image :src="message.avatar" mode="aspectFill"></image>
			</view>
			<view class="message-box_text" v-if="message.msg">
				<text v-text="message.msg"></text>
			</view>
			<view class="message-box_image" @click="previewImage" v-if="message.img">
				<image src="../../static/images/cool-background.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="my-message" v-else>
			<view class="message-box_text" v-if="message.msg">
				<text v-text="message.msg"></text>
			</view>
			<view class="message-box_image" @click="previewImage" v-if="message.img">
				<image src="../../static/images/cool-background.png" mode="aspectFill"></image>
			</view>
			<view class="chat-avatar">
				<image :src="message.avatar" mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			message:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			previewImage(){
				uni.previewImage({
				    urls: ['../../static/cool-background.png'],
				    longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
				                console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				             },
						fail: function(err) {
				            console.log(err.errMsg);
						}
				     }
				});
			}
		}
	}
</script>

<style lang="scss">
.chat-message{
	.other-message{
		width: 100%;
		display: flex;
		margin-bottom: 30rpx;
		.chat-avatar{
			width: 80rpx;
			height: 80rpx;
			border-radius: 10rpx;
			overflow: hidden;
			flex-shrink: 0;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.message-box_text{
			max-width: 500rpx;
			background-color: #fff;
			border-radius: 0 20rpx 20rpx 20rpx;
			margin-left: 20rpx;
			overflow: hidden;
			padding: 20rpx;
			margin-top: 20rpx;
			text{
				white-space: pre-wrap;
				color:#333;
				font-size: 32rpx;
				line-height: 45rpx;
			}
			image{
				width: 100%;
			}
		}
		.message-box_image{
			width: 400rpx;
			height: 200rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-right: 20rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.my-message{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 30rpx;
		.chat-avatar{
			width: 80rpx;
			height: 80rpx;
			border-radius: 10rpx;
			overflow: hidden;
			flex-shrink: 0;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.message-box_text{
			max-width: 500rpx;
			background-color: #01b9fd;
			border-radius: 20rpx 0 20rpx 20rpx;
			margin-right: 20rpx;
			padding: 20rpx;
			margin-top: 20rpx;
			text{
				white-space: pre-wrap;
				color:#fff;
				font-size: 32rpx;
				line-height: 45rpx;
			}
		}
		.message-box_image{
			width: 400rpx;
			height: 200rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-right: 20rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
