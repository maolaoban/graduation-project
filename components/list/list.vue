<template>
	<swiper class="home-swiper" @change="change" :current="tabIndex">
		<swiper-item class="swiper-item">
			<scroll-view scroll-y="true" class="list-scroll">
				<my-interest></my-interest>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item">
			<scroll-view scroll-y="true" class="list-scroll">
				<recommend :newsList="commonData[1]"></recommend>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item">
			<scroll-view scroll-y="true" class="list-scroll">
				<video-page :videoList="commonData[2]"></video-page>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" v-for="(item,index) in 6" :key="index">
			<scroll-view scroll-y="true" class="list-scroll">
				<view class="loading">
					<u-loading mode="circle" size="60" :show="isShowLoading"></u-loading>
				</view>
				<common-card :newsList="commonData[index+3]"></common-card>
				<slot></slot>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:{
			tabIndex:{
				type:Number,
				default:1
			}
		},
		data() {
			return {
				tabList:['关注','推荐','视频','手机','电脑','数码','汽车','智能家居','智能穿戴'],
				commonData:{}, //数据集合
				isShowLoading:false
			};
		},
		watch:{
			tabIndex(newVal){
				this.tabIndex = newVal;
			}
		},
		created() {
			this.getList(1);
		},
		methods:{
			change(event){
				const {current} = event.detail;
				this.$emit('changePage',current);
				// 防止重复加载
				if(!this.commonData[current] || this.commonData[current].length === 0){
					this.getList(current);
				}
			},
			getList(i){
				if(!this.commonData[i]){
					console.log("加载",this.tabList[i])
					this.isShowLoading = true;
				}
				this.$api.get_newsList({
					name:this.tabList[i]
				}).then(res => {
					console.log(res);
					const {data} = res;
					let oldList = this.commonData[i] || [];
					oldList.push(...data);
					this.$set(this.commonData,i,oldList);
					this.isShowLoading = false;
				})
			}
		}
	}
</script>

<style lang="scss">
.home-swiper{
	height: 100%;
	.list-scroll{
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.loading{
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
}
</style>
