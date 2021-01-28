<template>
	<swiper class="home-swiper" @change="change" :current="tabIndex">
		<swiper-item class="swiper-item">
			<scroll-view scroll-y="true" class="list-scroll">
				<my-interest></my-interest>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item">
			<scroll-view scroll-y="true" class="list-scroll">
				<recommend></recommend>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item">
			<scroll-view scroll-y="true" class="list-scroll">
				<video-page></video-page>
			</scroll-view>
		</swiper-item>
		<swiper-item class="swiper-item" v-for="(item,index) in 6" :key="index">
			<scroll-view scroll-y="true" class="list-scroll">
				<common-card v-for="item in 8"></common-card>
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
				
			};
		},
		watch:{
			tabIndex(newVal){
				this.tabIndex = newVal;
			}
		},
		methods:{
			change(event){
				const {current} = event.detail;
				this.$emit('changePage',current);
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
	}
}
</style>
