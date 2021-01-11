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
		data() {
			return {
				tabList:['推荐','视频','手机','电脑','图赏','汽车','智能家居','专题'],
				activeIndex:0
			};
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
				font-size:32rpx;
				padding: 0 30rpx;
				white-space: nowrap;
				color:#515151;
				&.active{
					color:$uni-text-color-inverse
				}
			}
		}
	}
}
</style>
