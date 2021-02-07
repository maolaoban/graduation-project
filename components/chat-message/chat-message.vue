<template>
	<view class="chat-message">
		<view class="other-message" v-if="message.type === 0">
			<view class="chat-avatar">
				<image :src="message.avatar" mode="aspectFill"></image>
			</view>
			<view class="message-box_text" v-if="message.msg">
				<rich-text :nodes="message.msg"></rich-text>
			</view>
			<view class="message-box_audio" v-if="message.audio" @click="playAudio(message.audio)">
				<i class="iconfont icon-voiceprint" :class="{'play-audio':ispalyAudio}" v-for="item in Math.ceil(message.audio.duration/5000)>6?6:Math.ceil(message.audio.duration/5000)"></i>
				<text>{{Math.ceil(message.audio.duration/1000)}}s</text>
			</view>
			<view class="message-box_image" @click="previewImage(message.imgUrl)" v-if="message.imgUrl">
				<image :src="message.imgUrl" mode="widthFix"></image>
			</view>
		</view>
		<view class="my-message" v-else>
			<view class="message-box_text" v-if="message.msg">
				<rich-text :nodes="message.msg"></rich-text>
			</view>
			<view class="message-box_audio" v-if="message.audio" @click="playAudio(message.audio.tempFilePath)">
				<i class="iconfont icon-voiceprint" :class="{'play-audio':ispalyAudio}" v-for="item in Math.ceil(message.audio.duration/5000)>6?6:Math.ceil(message.audio.duration/5000)"></i>
				<text>{{Math.ceil(message.audio.duration/1000)}}s</text>
			</view>
			<view class="message-box_image" @click="previewImage(message.imgUrl)" v-if="message.imgUrl">
				<image :src="message.imgUrl" mode="widthFix"></image>
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
				ispalyAudio:false
			};
		},
		methods:{
			//图片预览
			previewImage(imgUrl){
				uni.previewImage({
				    urls: [imgUrl],
				  //   longPressActions: {
						// itemList: ['发送给朋友', '保存图片', '收藏'],
						// success: function(data) {
				  //               console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				  //            },
						// fail: function(err) {
				  //           console.log(err.errMsg);
						// }
				  //    }
				});
			},
			playAudio(audioUrl){
				// 创建并返回内部 audio 上下文 innerAudioContext 对象。
				const innerAudioContext = uni.createInnerAudioContext();
				
				innerAudioContext.src = audioUrl;
				
				console.log('音频地址',audioUrl);
				//播放
				innerAudioContext.play();
				//播放触发事件
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				  this.ispalyAudio = true;
				});
				// 播放自然结束触发事件
				innerAudioContext.onEnded(()=>{
					console.log('播放结束');
					this.ispalyAudio = false;
				})
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
			word-wrap: break-word;
			white-space: normal;
			word-break: break-all;
			color:#333;
			font-size: 32rpx;
			line-height: 45rpx;
		}
		.message-box_audio{
			height: 80rpx;
			padding: 0 20rpx;
			background-color: #01b9fd;
			color: #fff;
			border-radius: 20rpx 0 20rpx 20rpx;
			margin-right: 20rpx;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.message-box_image{
			width: 300rpx;
			overflow: hidden;
			margin-right: 20rpx;
			image{
				width: 100%;
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
			word-wrap: break-word;
			white-space: normal;
			word-break: break-all;
			color:#fff;
			font-size: 32rpx;
			line-height: 45rpx;
		}
		.message-box_audio{
			height: 80rpx;
			padding: 0 20rpx;
			background-color: #01b9fd;
			color: #fff;
			border-radius: 20rpx 0 20rpx 20rpx;
			margin-right: 20rpx;
			margin-top: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			text{
				margin-left: 10rpx;
			}
		}
		.message-box_image{
			width: 300rpx;
			overflow: hidden;
			margin-right: 20rpx;
			image{
				width: 100%;
			}
		}
	}
}
.play-audio{
	animation: playAudio 1s ease infinite alternate;
}
// 语音播放动画
@keyframes playAudio
{
	from{
		opacity: 1;
	}
	to{
		opacity: 0.4;
	}
	
}
</style>
