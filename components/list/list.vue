<template>
	<swiper class="home-swiper" @change="change" :current="0">
		<swiper-item>
			<recommend></recommend>
		</swiper-item>
		<swiper-item class="swiper-item" v-for="(item,index) in 7" :key="index">
			<scroll-view scroll-y="true" class="list-scroll">
				<view class="item-li" v-for="(item,index) in 100">
					{{index}}hello
				</view>
				<slot></slot>
			</scroll-view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
