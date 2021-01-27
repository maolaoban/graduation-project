<template>
	<view class="chat-container">
		<view class="message-container" @click="closeEmoji">
			<chat-message></chat-message>
			<chat-message></chat-message>
			<chat-message></chat-message>
		</view>
		<view class="input-bottom">
			<view class="input-bottom_top">
				<view class="message-input" @click="keyBoardUp">
					<input type="text" v-model="inputValue"/>
				</view>
				<view class="icon" :style="{width:!isSend?'140rpx':'180rpx'}">
					<view class="icon-list" @click="openEmoji">
						<i class="iconfont icon-biaoqing"></i>
					</view>
					<view class="more-function" v-if="!isSend">
						<i class="iconfont icon-genduo"></i>
					</view>
					<view class="send-btn" v-else>发送</view>
				</view>
			</view>
			<view class="input-emoji" v-show="isShowEmoji">
				<swiper :duration="500" class="emoji-swiper">
					<swiper-item v-for="item in emojiData" class="swiper-item">
						<view class="emoji-item" v-for="emoji in item" @click="selemoji(emoji)">{{emoji}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>
<script>
	import emoji from "../../static/emoji/emoji.js";
	export default {
		data() {
			return {
				isSend:false,
				emojiData:[],
				inputValue:'',
				isShowEmoji:false
			};
		},
		watch:{
			inputValue(newVal){
				if(newVal.length > 0){
					this.isSend = true;
				}else{
					this.isSend = false;
				}
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			    title: '新的标题'
			});
		},
		onReady(){
			var page = Math.ceil(emoji.length/45);
			    for (let i = 0; i < page; i++) {
			    this.emojiData[i] = [];
			    for (let k = 0; k < 45; k++) {
			        emoji[i*45+k]?this.emojiData[i].push(
			        emoji[i*45+k]
			        ):''
			    }
			}
		},
		methods:{
			openEmoji(){
				this.isShowEmoji = !this.isShowEmoji;
			},
			selemoji(emoji){
				this.inputValue += emoji;
			},
			keyBoardUp(){
				// this.isShowEmoji = false;
			},
			closeEmoji(){
				this.isShowEmoji = false;
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f5f6;
}
.chat-container{
	.message-container{
		padding: 20rpx 20rpx 100rpx 20rpx;
	}
	.input-bottom{
		width: 100%;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: #f4f5f6;
	}
	.input-bottom_top{
		width: 100%;
		height: 100rpx;
		padding: 0 20rpx;
		background-color: #f4f5f6;
		border-top: 2rpx solid #dfdfdf;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.message-input{
			background-color: #fff;
			border-radius: 10rpx;
			width: 550rpx;
			height: 60rpx;
			padding-left: 20rpx;
			input{
				height: 100%;
				font-size: 26rpx;
				color:#333;
				line-height: 60rpx;
			}
		}
		.icon{
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-left: 20rpx;
			.send-btn{
				height: 60rpx;
				width: 100rpx;
				border-radius: 10rpx;
				background-color: #01b9fd;
				text-align: center;
				line-height: 60rpx;
				font-size: 26rpx;
				color:$uni-text-color-inverse;
			}
		}
	}
	.input-emoji{
		width: 100%;
		height: 500rpx;
		.emoji-swiper{
			width: 100%;
			height: 100%;
			.swiper-item{
				display: flex;
				flex-wrap: wrap;
				.emoji-item{
					width: 80rpx;
					height: 80rpx;
					font-size: 40rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-shrink: 0;
				}
			}
		}
	}
}
</style>
