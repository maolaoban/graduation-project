<template>
	<view>
		<view class="comment-input">
			<view class="input-box" @click="showInput">谈谈你的看法...</view>
			<view class="add-right" @click="addThumb">
				<u-icon :name="!is_thumb?'thumb-up':'thumb-up-fill'" size="50" :color="!is_thumb?'#bbb':'#01b9fd'"></u-icon>
			</view>
			<view class="add-right" @click="addCollect">
				<u-icon :name="!is_collect?'star':'star-fill'" size="50" :color="!is_collect?'#bbb':'#01b9fd'"></u-icon>
			</view>
			<view class="add-right">
				<u-icon name="zhuanfa" size="50" color="#bbb"></u-icon>
			</view>
		</view>
		<view class="input-box_true" v-show="show">
			<textarea class="input-text" type="text" v-model="inputValue" placeholder="谈谈你的看法..." 
				confirm-type="send" 
				maxlength="120" 
				fixed="true"
				cursor-spacing="150"
				:focus="isFocus"
				:show-confirm-bar="false"
			/>
			<view class="input-box_bottom">
				<view class="text-num">
					{{inputValue.length}}/120
				</view>
				<view class="send-btn" @click="sendComment">
					发送
				</view>
			</view>
		</view>
		<u-mask :show="show" @click="show = !show" z-index="10"></u-mask>
	</view>
</template>

<script>
	export default {
		props:{
			articleId:{
				type:String,
				default:'',
			},
			isLike:{
				type:Boolean,
				default:false
			},
			isCollect:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				is_thumb:false,
				is_collect:false,
				show:false,
				isFocus:false,
				inputValue:''
			};
		},
		watch:{
			isLike(newVal){
				this.is_thumb = newVal;
			},
			isCollect(newVal){
				this.is_collect = newVal;
			}
		},
		methods:{
			showInput(){
				if(uni.getStorageSync('login_type') !== 'online'){
					uni.navigateTo({
						url:'/pages/login-page/login-page'
					})
					return
				}
				this.show = !this.show;
				this.isFocus = true;
			},
			addThumb(){
				if(uni.getStorageSync('login_type') !== 'online'){
					uni.navigateTo({
						url:'/pages/login-page/login-page'
					})
					return
				}
				this.$api.update_like({
					user_id:uni.getStorageSync('userId'),
					article_id:this.articleId
				}).then(res => {
					this.is_thumb = !this.is_thumb;
				})
			},
			addCollect(){
				// this.isCollect = !this.isCollect;
			},
			sendComment(){
				uni.showLoading({
					title:'评论中'
				})
				this.$api.update_comment({
					user_id:uni.getStorageSync('userId'),
					articleId:this.articleId,
					content:this.inputValue,
					time:new Date().getTime()
				}).then(res => {
					console.log(res);
					this.show = !this.show;
					this.inputValue = '';
					this.$emit("sendCommentOk")
				})
			}
		}
	}
</script>

<style lang="scss">
.comment-input{
	height: 100rpx;
	width: 100%;
	padding: 0 20rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: $uni-bg-color;
	border-top: 1rpx solid #f4f5f6;
	display: flex;
	align-items: center;
	.input-box{
		height: 60rpx;
		width: 500rpx;
		border-radius: 30rpx;
		background-color: #f4f5f6;
		line-height: 60rpx;
		padding-left: 20rpx;
		color: #bbb;
	}
	.add-right{
		width: 80rpx;
		text-align: center;
	}
}
.input-box_true{
	height: 250rpx;
	width: 100%;
	padding: 20rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: $uni-bg-color;
	border-radius: 20rpx 20rpx 0 0;
	z-index: 20;
	.input-text{
		height: 150rpx;
		width: 100%;
		background-color: #f4f5f6;
		border-radius: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.input-box_bottom{
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.text-num{
			font-size: 26rpx;
			color:#bbb;
		}
		.send-btn{
			height: 50rpx;
			width: 100rpx;
			border-radius: 25rpx;
			background-color:#01b9fd;
			text-align: center;
			line-height: 50rpx;
			color: $uni-text-color-inverse;
		}
	}
}
</style>
