<template>
	<view class="product-container">
		<view class="classify-left">
			<view class="classify-top" :style="{'box-shadow':hasShadow?'0px 8rpx 20rpx 0px #CCCCCC':'none'}">
				分类
			</view>
			<scroll-view class="left-box" scroll-y="true" @scroll="scrollFun">
				<view class="scroll-item" v-for="(item,index) in classifyList" @click="selectClassify(index)"
					:class="{'active': selectIndex === index}"
				>{{item}}</view>
			</scroll-view>
		</view>
		<view class="classify-right">
			<scroll-view class="scroll-right" scroll-y="true">
				<view class="right-item">
					<view class="item-title">
						手机品牌
					</view>
					<view class="item-list">
						<view class="item-list_box" v-for="item in 6" @click="openList">
							<view class="cover">
								<image src="https://img.pconline.com.cn/images/product/1350/1350247/fb_sn7.jpg" mode="aspectFit"></image>
							</view>
							<text>华为</text>
						</view>
					</view>
				</view>
				<view class="right-item">
					<view class="item-title">
						手机类别
					</view>
					<view class="item-list">
						<view class="item-list_box" v-for="item in 6" @click="openList">
							
						</view>
					</view>
				</view>
				<view class="right-item">
					<view class="item-title">
						手机配件
					</view>
					<view class="item-list">
						<view class="item-list_box" v-for="item in 6" @click="openList">
							
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasShadow:false,
				classifyList:['手机','电脑','相机','平板电脑','外设','智能穿戴','智能家居','DIY','网络设备'],
				selectIndex:0
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
			},
			selectClassify(i){
				this.selectIndex = i;
			},
			openList(){
				uni.navigateTo({
					url:'./product-list/product-list'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f4f5f6;
	}
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
	.classify-top{
		height: 80rpx;
		width: 100%;
		text-align: center;
		line-height: 80rpx;
		font-size: 32rpx;
		font-weight: bold;
		border-bottom: 1rpx solid #f4f5f6;
		background-color: $uni-bg-color;
	}
	.left-box{
		width: 100%;
		height: 100%;
		.scroll-item{
			height: 100rpx;
			width: 100%;
			text-align: center;
			line-height: 100rpx;
			box-sizing: border-box;
			color: #7e7e7e;
		}
		.active{
			background-color: $uni-bg-color;
			color:#13227A;
			font-weight: bold;
			position: relative;
			&:before{
				content:'';
				width: 8rpx;
				height: 50rpx;
				background-color: #13227A;
				position: absolute;
				left: 0;
				top:25rpx;
			}
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
	background-color: $uni-bg-color;
	.scroll-right{
		height: 100%;
		width: 100%;
		.right-item{
			width: 100%;
			padding: 20rpx;
			.item-title{
				color: $uni-text-color;
				font-weight: bold;
				font-size: 32rpx;
			}
			.item-list{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				.item-list_box{
					width: 150rpx;
					height: 150rpx;
					border:1px solid red;
					border-radius: 10rpx;
					margin-top: 20rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					.cover{
						width: 120rpx;
						height: 120rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
}
</style>
