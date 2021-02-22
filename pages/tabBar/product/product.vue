<template>
	<view class="product-container">
		<navbar @getNavBarHeight="getNavBarHeight"></navbar>
		<view class="product-body" :style="{top:bodyTop+'px'}">
			<view class="classify-left">
				<view class="classify-top" :style="{'box-shadow':hasShadow?'0px 8rpx 20rpx 0px #CCCCCC':'none'}">
					分类
				</view>
				<scroll-view class="left-box" scroll-y="true" @scroll="scrollFun">
					<view class="scroll-item" v-for="(item,index) in classifyList" :key="item._id" @click="selectClassify(index,item._id)"
						:class="{'active': selectIndex === index}"
					>{{item.classify}}</view>
				</scroll-view>
			</view>
			<view class="classify-right">
				<scroll-view class="scroll-right" scroll-y="true">
					<view class="right-item">
						<view class="item-title">
							热门品牌
						</view>
						<view class="item-list">
							<view class="item-list_box" v-for="item in brandList" @click="openList">
								<view class="cover">
									<image :src="item.img_cover" mode="aspectFit"></image>
								</view>
								<text>{{item.name}}</text>
							</view>
						</view>
					</view>
					<!-- <view class="right-item">
						<view class="item-title">
							热门手机
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
					</view> -->
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasShadow:false,
				classifyList:[],
				selectIndex:0,
				bodyTop:50,
				brandList:[]
			};
		},
		onLoad() {
			this.$api.get_classifyList().then(res => {
				const {data} = res;
				console.log(data);
				this.classifyList = data.data;
				this.getClassifyContent(this.classifyList[0]._id);
			})
		},
		methods:{
			getClassifyContent(id){
				this.$api.get_classifyContent({
					classify_id: id
				}).then(res => {
					const {data} = res;
					console.log('brand',data);
					this.brandList = data.brand;
				})
			},
			scrollFun(event){
				console.log(parseInt(event.detail.scrollTop));
				if(parseInt(event.detail.scrollTop) > 5){
					this.hasShadow = true;
				}else{
					this.hasShadow = false;
				}
			},
			selectClassify(i,id){
				this.selectIndex = i;
				this.getClassifyContent(id);
			},
			openList(){
				uni.navigateTo({
					url:'./product-list/product-list'
				})
			},
			getNavBarHeight(h,n){
				this.bodyTop = h + n;
				console.log(h);
			}
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f5f6;
	overflow: hidden;
}
.product-body{
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
}
.classify-left{
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
