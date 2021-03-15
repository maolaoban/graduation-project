<template>
	<view class="chat-container">
		<scroll-view class="message-container" id="scrollView" scroll-y="true" :scroll-top="scrollTop" @click="closeEmoji" :style="{height:scrollHeight}">
			<view id="msgView">
				<chat-message v-for="(item,index) in messageList" :message="item" :key="index"></chat-message>
			</view>
		</scroll-view>
		<view class="input-bottom" :style="{bottom:inputBottom}">
			<view class="input-bottom_top">
				<!-- #ifndef H5 -->
				<view class="yuyin" @click="showAudio">
					<i class="iconfont icon-yuyin"></i>
				</view>
				<!-- #endif -->
				<view class="message-input" v-if="!isShowAudio">
					<input type="text" 
						v-model="inputValue" 
						cursor-spacing="10"
						confirm-type="send"
						confirm-hold="true"
						@confirm="sendMessage('text')"
						@focus="focusHandler"
						@blur="blurHandler"
						:adjust-position="false"
					/>
				</view>
				<view class="audio-box" hover-class="audio-box_hover" @touchstart="startRecord"  @touchend="endRecord" v-else>
					按住 说话
				</view>
				<view class="icon" :style="{width:!isSend?'140rpx':'180rpx'}">
					<view class="icon-list" @click="openEmoji">
						<i class="iconfont icon-biaoqing"></i>
					</view>
					<view class="more-function" v-if="!isSend" @click="moreOptions">
						<i class="iconfont icon-genduo"></i>
					</view>
					<view class="send-btn" v-else @click="sendMessage('text')">发送</view>
				</view>
			</view>
			<view class="input-emoji" v-show="isShowEmoji">
				<swiper :duration="1000" class="emoji-swiper" indicator-dots="true">
					<swiper-item v-for="item in emojiData" class="swiper-item">
						<!-- <view class="emoji-item" v-for="emoji in item" @click="selectmoji(emoji)">{{emoji}}</view> -->
						<view class="emoji-item" v-for="emoji in item" @click="selectmoji(emoji)">
							<image :src="emoji.img" mode="aspectFit"></image>
						</view>
					</swiper-item>
				</swiper>
				<view class="del" @click="delText">
					<u-icon name="backspace" size="50"></u-icon>
				</view>
			</view>
			<view class="input-more" v-if="isShowOptions">
				<view class="option-item" @click="selectPhoto">
					<u-icon name="photo" size="50" color="#333"></u-icon>
				</view>
				<view class="option-item">
					<u-icon name="camera-fill" size="50" color="#333"></u-icon>
				</view>
			</view>
		</view>
		<view class="audio-state" v-show="isShowState">
			<view class="audio-animate">
				<i class="iconfont icon-yuyin"></i>
			</view>
			<text>录音中</text>
		</view>
	</view>
</template>
<script>
	import emotions from "../../static/emoji/index.js";
	const recorderManager = uni.getRecorderManager();
	export default {
		data() {
			return {
				isSend:false,
				emojiData:[],
				inputValue:'',
				isShowEmoji:false,
				isShowOptions:false,
				isShowAudio:false,
				isShowState:false,
				messageList:[
					// type: 0对方消息 1自己消息
					{
						type:0,
						msg:'君不见，黄河之水天上来，奔流到海不复回😍',
						avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3439061948,1440851450&fm=26&gp=0.jpg',
						img:''
					},
					{
						type:1,
						msg:'君不见，高堂明镜悲白发，朝如青丝暮成雪😍',
						avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3439061948,1440851450&fm=26&gp=0.jpg',
						img:''
					}
				],
				scrollTop:0,
				scrollHeight:'100vh',
				inputBottom:'0px',
				emotionsList:[],
				userInfo:uni.getStorageSync('userInfo'),
				sendEmojiList:[]
			};
		},
		watch:{
			inputValue(newVal,oldVal){
				if(newVal.length > 0){
					this.isSend = true;
				}else{
					this.isSend = false;
				}
			}
		},
		onLoad() {
			// 录音
			let self = this;
			recorderManager.onStop(function (res) {
			    console.log('recorder stop' + JSON.stringify(res));
				self.sendMessage('audio',res);
			});
			//标题
			uni.setNavigationBarTitle({
			    title: '毛小毛'
			});
			// 表情
			this.emotionsList = emotions.emotions;
			var page = Math.ceil(this.emotionsList.length/30);
			    for (let i = 0; i < page; i++) {
			    this.emojiData[i] = [];
			    for (let k = 0; k < 30; k++) {
			        this.emotionsList[i*30+k] ?
					this.emojiData[i].push(this.emotionsList[i*30+k]):''
			    }
			}
		},
		updated() {
			this.scrollToBottom();
		},
		methods:{
			// 打开表情
			openEmoji(){
				this.isShowEmoji = !this.isShowEmoji;
				this.isShowOptions = false;
				this.scrollToBottom();
				if(!this.isShowEmoji){
					this.scrollHeight = '100vh';
				}else{
					this.scrollHeight = '60vh'
				}
			},
			// 选择表情
			selectmoji(emoji){
				this.inputValue += emoji.text;
				//每选择一个表情就把该表情push到sendEmojiList
				this.sendEmojiList.push(emoji);
			},
			// 关闭表情
			closeEmoji(){
				this.isShowEmoji = false;
				this.isShowOptions = false;
				this.scrollHeight = '100vh';
			},
			// 发送信息方法
			sendMessage(type,info){
				let message = {
					type:1,
					msg:'',
					avatar:this.userInfo.avatar,
					imgUrl:'',
					audio:''
				};
				if(type == 'text' && this.inputValue.length != 0){
					//将inputValue里的表情文字替换为表情图片
					// message.msg = this.inputValue.replace(/\[.*?\]/g,`<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/99.gif" mode="aspectFit"></img>`);
					//遍历sendEmojiList，使用indexOf判断inputVlue里是否还有该表情
					for(let item of this.sendEmojiList){
						if(this.inputValue.indexOf(item.text) != -1){
							// 把表情文字替换为img
							this.inputValue = this.inputValue.replace(item.text,`<img src="${item.img}" mode="aspectFit"></img>`);
						}
					}
					message.msg = this.inputValue;
				}else if(type == 'img'){
					message.imgUrl = info;
				}else{
					message.audio = info;
				}
				console.log('发送的信息',message);
				this.messageList.push(message);
				this.inputValue = '';
			},
			// 滚动到底部
			scrollToBottom(){
				let _this = this;
				let query = uni.createSelectorQuery();
				query.select('#scrollView').boundingClientRect();
				query.select('#msgView').boundingClientRect();
				query.exec(function(res){
					if(res[1].height >= res[0].height - 100){
						_this.scrollTop = res[1].height;
					}
				})
			},
			// 点击表情输入栏里的删除键
			delText(){
				this.inputValue = this.inputValue.substr(0,this.inputValue.length - 1);
			},
			//输入框获取焦点时触发
			focusHandler(event){
				this.scrollHeight = '52vh';
				this.isShowEmoji = false;
				this.isShowOptions = false;
				console.log(event.detail)
				this.inputBottom = event.detail.height  + 'px';
			},
			// 输入框失去焦点时触发
			blurHandler(){
				this.scrollHeight = '100vh';
				this.inputBottom = 0;
			},
			//点击+更多选项
			moreOptions(){
				this.isShowOptions = !this.isShowOptions;
				if(!this.isShowOptions){
					this.scrollHeight = '100vh';
				}else{
					this.scrollHeight = '60vh'
				}
				this.isShowEmoji = false;
			},
			//选择图片
			selectPhoto(){
				let _this = this;
				uni.chooseImage({
				    count: 9, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						for(let i in res.tempFilePaths){
							_this.sendMessage('img',res.tempFilePaths[i]);
						}
				    },
					fail:function(){
						alert(1)
					}
				});
			},
			showAudio(){
				this.isShowAudio = !this.isShowAudio;
			},
			//长按开始录音
			startRecord() {
				this.isShowState = true;
			    console.log('开始录音');
				recorderManager.start();
			},
			//松开结束录音
			endRecord() {
				this.isShowState = false;
			    console.log('录音结束');
			    recorderManager.stop();
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
		box-sizing: border-box;
	}
	.input-bottom{
		width: 100%;
		position: absolute;
		right: 0;
		left: 0;
		background-color: #f4f5f6;
	}
	.input-bottom_top{
		width: 100%;
		height: 8vh;
		padding: 0 20rpx;
		background-color: #f4f5f6;
		border-top: 2rpx solid #dfdfdf;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.yuyin{
			width: 60rpx;
		}
		.message-input{
			background-color: #fff;
			border-radius: 10rpx;
			width: 550rpx;
			height: 5vh;
			padding-left: 20rpx;
			input{
				height: 100%;
				font-size: 26rpx;
				color:#333;
				line-height: 60rpx;
			}
		}
		.audio-box{
			background-color: #fff;
			width: 550rpx;
			height: 5vh;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 20rpx;
		}
		.audio-box_hover{
			box-shadow:  inset 0px 0px 10px 0px #bbb;
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
		height: 40vh;
		background-color: #f4f5f6;
		position: relative;
		.emoji-swiper{
			width: 100%;
			height: 100%;
			.swiper-item{
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				padding: 15rpx;
				box-sizing: border-box;
				.emoji-item{
					width: 90rpx;
					height: 90rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-shrink: 0;
					margin-top: 20rpx;
					image{
						width: 60%;
						height: 60%;
					}
				}
			}
		}
		.del{
			width: 100rpx;
			height: 60rpx;
			background-color: #fff;
			border-radius:10rpx;
			position: absolute;
			bottom:60rpx;
			right:60rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.input-more{
		width: 100%;
		height: 40vh;
		background-color: #f4f5f6;
		position: relative;
		display: flex;
		.option-item{
			width: 120rpx;
			height: 120rpx;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 20rpx;
			background-color: #fff;
		}
	}
}
.audio-state{
	width: 300rpx;
	height: 300rpx;
	position: fixed;
	top:400rpx;
	left:225rpx;
	background-color: rgba($color: #000000, $alpha: 0.4);
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 36rpx;
	color: #fff;
}
</style>
