<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-list">
			<view class="tab-list_box">
				<view class="tab-name" v-for="(item,index) in tabList" @click="selectTab(index)"
					:class="{'active':activeIndex === index}"
				>
				{{item}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			indexNum:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				tabList:['推荐','视频','手机','电脑','数码','汽车','智能家居','专题'],
				activeIndex:0
			};
		},
		watch:{
			indexNum(newVal){
				this.activeIndex = newVal;
			}
		},
		methods:{
			selectTab(index){
				this.activeIndex = index;
			}
		}
	}
</script>

<style lang="scss">
.tab{
	width: 100%;
	height:80rpx;
	display: flex;
	overflow: hidden;
	background-color: #fff;
	z-index: 999;
	.tab-list{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		.tab-list_box{
			height: 100%;
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			.tab-name{
				flex-shrink: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size:28rpx;
				padding: 0 30rpx;
				white-space: nowrap;
				color:#7e7e7e;
				&.active{
					transition: 0.2s;
					font-size: 32rpx;
					font-weight: bold;
					color:#13227a;
					position: relative;
					&:after{
						content: '';
						width: 40rpx;
						height: 8rpx;
						background-color:#13227a;
						position: absolute;
						bottom: -10rpx;
						left:50%;
						transform: translateX(-50%);
					}
				}
			}
		}
	}
}
</style>
