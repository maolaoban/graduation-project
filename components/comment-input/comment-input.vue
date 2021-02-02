<template>
	<view>
		<view class="comment-input">
			<view class="input-box" @click="showInput">谈谈你的看法...</view>
			<view class="add-right" @click="addThumb">
				<u-icon :name="!isThumb?'thumb-up':'thumb-up-fill'" size="50" :color="!isThumb?'#333':'#01b9fd'"></u-icon>
			</view>
			<view class="add-right" @click="addCollect">
				<u-icon :name="!isCollect?'star':'star-fill'" size="50" :color="!isCollect?'#333':'#01b9fd'"></u-icon>
			</view>
			<view class="add-right">
				<u-icon name="zhuanfa" size="50" color="#333"></u-icon>
			</view>
		</view>
		<view class="input-box_true" v-show="show">
			<textarea class="input-text" type="text" value="" placeholder="谈谈你的看法..." 
				confirm-type="send" 
				maxlength="120" 
				fixed="true"
				cursor-spacing="20"
			/>
			<view class="send-btn">
				发送
			</view>
		</view>
		<u-mask :show="show" @click="show = !show" z-index="10"></u-mask>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isThumb:false,
				isCollect:false,
				show:false
			};
		},
		methods:{
			showInput(){
				this.show = !this.show;
			},
			addThumb(){
				this.isThumb = !this.isThumb;
			},
			addCollect(){
				this.isCollect = !this.isCollect;
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
	border-radius: 40rpx 40rpx 0 0;
	z-index: 20;
	.input-text{
		height: 150rpx;
		width: 100%;
		background-color: #f4f5f6;
		border-radius: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.send-btn{
		height: 50rpx;
		width: 100rpx;
		position: absolute;
		bottom: 20rpx;
		right:40rpx;
		border-radius: 25rpx;
		background-color:#01b9fd;
		text-align: center;
		line-height: 50rpx;
		color: $uni-text-color-inverse;
	}
}
</style>
