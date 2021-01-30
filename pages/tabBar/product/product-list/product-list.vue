<template>
	<view class="list-container">
		<view class="options-bar">
			<u-dropdown border-radius="20rpx" height="100rpx">
				<u-dropdown-item v-model="value1" title="品牌" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="价格" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value3" title="排序" :options="options3"></u-dropdown-item>
			</u-dropdown>
		</view>
		<view class="list-box">
			<view class="list-item" @click="showMore(index)" v-for="(item,index) in 3" :style="{'height':clickIndex === index ? itemHeight+'rpx':'160rpx'}">
				<view class="item-top">
					<view class="cover">
						<image src="https://img.pconline.com.cn/images/product/1156/1156808/fb_sn7.jpg" mode="aspectFit"></image>
					</view>
					<view class="item-info">
						<view class="name">
							华为V40
						</view>
						<view class="price">
							参考价 ￥3599
						</view>
					</view>
					<view class="item-hot">
						<text class="hot-num">98</text>
						<text class="hot-text">本周热度</text>
					</view>
				</view>
				<view class="content-wrapper" v-show="clickIndex === index">
					<view class="rate">
						<view class="rate-num">4.8<text>分</text></view>
						<u-rate 
							:count="count" 
							:current="rate" 
							:disabled="true" 
							active-color="#ffa916" 
							inactive-color="#dddddd"
							size="60"
						></u-rate>
					</view>
					<view class="suggest">
						<text>荣耀V40搭载天玑1000+处理器，配备10.7亿色OLED屏幕，支持120Hz高刷新率显示，搭载5000万像素超感光主摄像头，支持66W有线快充和50W无线快充。</text>
					</view>
					<view class="view-more" @click.stop="viewMore">
						查看更多>>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemHeight:160,
				isShow:false,
				clickIndex:-1,
				count:5,
				rate:4.5,
				value1:1,
				value2:2,
				value3:0,
				options1:[
					{
						label:'三星',
						value:1
					},
					{
						label:'华为',
						value:2
					},
					{
						label:'一加',
						value:3
					},
					{
						label:'其它',
						value:4
					}
				],
				options2:[
					{
						label:'500-1000',
						value:1
					},
					{
						label:'1000-2000',
						value:2
					},
					{
						label:'2000-4000',
						value:3
					},
					{
						label:'4000以上',
						value:4
					}
				],
				options3:[
					{
						label:'按热度排序',
						value:1
					},
					{
						label:'按发布日期排序',
						value:2
					}
				]
			}
		},
		methods: {
			showMore(index){
				if(!this.isShow){
					this.itemHeight = 540;
					this.clickIndex = index;
					this.isShow = true;
				}else{
					this.itemHeight = 160;
					this.clickIndex = -1;
					this.isShow = false;
				}
			},
			viewMore(){
				uni.showToast({
					title:'开发中',
					icon:'none'
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f5f6;
}	
.list-box{
	.list-item{
		width: 710rpx;
		background-color: $uni-bg-color;
		border-radius: 20rpx;
		margin: 20rpx;
		overflow: hidden;
		box-shadow:0px 4rpx 10rpx 0px #CCCCCC;
		transition: 0.5s ease;
		.item-top{
			height: 160rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			position: relative;
			.cover{
				width: 160rpx;
				height: 160rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.item-info{
				.name{
					font-size: 36rpx;
					font-weight: bold;
				}
				.price{
					margin-top: 10rpx;
					color: #FA3534;
				}
			}
			.item-hot{
				display: flex;
				flex-direction: column;
				align-items: center;
				position: absolute;
				right: 40rpx;
				.hot-num{
					font-size: 56rpx;
					font-weight: bold;
					font-style: italic;
					color:#f88c56;
				}
				.hot-text{
					color: #bbb;
				}
			}
		}
		.content-wrapper{
			.rate{
				width: 610rpx;
				background-color: #f4f5f6;
				height: 100rpx;
				border-radius: 20rpx;
				margin: 0 50rpx;
				display: flex;
				align-items: center;
				padding: 20rpx;
				justify-content: space-between;
				.rate-num{
					font-size: 50rpx;
					font-weight: bold;
					text{
						font-size: 36rpx;
						font-weight: normal;
						color: #bbb;
					}
				}
			}
			.suggest{
				width: 570rpx;
				background-color: #f4f5f6;
				height: 120rpx;
				border-radius: 20rpx;
				margin: 0 50rpx;
				padding: 20rpx;
				margin-top: 20rpx;
				margin-bottom: 20rpx;
				box-sizing: content-box;
				text{
					line-height: 40rpx;
					display: -webkit-box; 
					-webkit-box-orient: vertical; 
					-webkit-line-clamp: 3; 
					overflow: hidden;
					text-overflow:ellipsis;
				}
				
				
			}
			.view-more{
				width: 200rpx;
				height: 60rpx;
				background-color: #51a2f8;
				border-radius: 20rpx;
				font-size: 28rpx;
				color: $uni-text-color-inverse;
				text-align: center;
				line-height: 60rpx;
				margin-left: 450rpx;
				margin-bottom: 20rpx;
			}
		}
	}
}
</style>
