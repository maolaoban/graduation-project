<template>
	<view class="product-container">
		<view class="classify-left">
			<view class="classify-top" :style="{'box-shadow':hasShadow?'0px 8rpx 20rpx 0px #CCCCCC':'none'}">
				分类
			</view>
			<scroll-view class="left-box" scroll-y="true" @scroll="scrollFun">
				<view v-for="item in 100" class="scroll-item">{{item}}</view>
			</scroll-view>
		</view>
		<view class="classify-right">
			<scroll-view class="scroll-right" scroll-y="true">
				<view v-for="item in 100">  1</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasShadow:false
			};
		},
		methods:{
			scrollFun(event){
				console.log(parseInt(event.detail.scrollTop));
				if(parseInt(event.detail.scrollTop) > 5){
					this.hasShadow = true;
				}else{
					this.hasShadow = false;
				}
			}
		}
	}
</script>

<style lang="scss">
.product-container{
	display: flex;
}
.classify-left{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	height: 100%;
	width: 200rpx;
	box-sizing: border-box;
	overflow: hidden;
	border-right: 1px solid #333;
	.classify-top{
		height: 80rpx;
		width: 100%;
		text-align: center;
		line-height: 80rpx;
		font-size: 32rpx;
		font-weight: bold;
		border-bottom: 1rpx solid #f4f5f6;
	}
	.left-box{
		width: 100%;
		height: 100%;
		.scroll-item{
			height: 100rpx;
			width: 100%;
			border-bottom:1rpx solid #f4f5f6;
			text-align: center;
			line-height: 100rpx;
			box-sizing: border-box;
		}
	}
}
.classify-right{
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 550rpx;
	height: 100%;
	box-sizing: border-box;
	overflow: hidden;
	.scroll-right{
		height: 100%;
		width: 100%;
	}
}
</style>
