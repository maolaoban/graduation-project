<template>
	<view class="content">
		<navbar></navbar>
		<tab :indexNum="activeIndex" @tab="changeTab"></tab>
		<view class="home-list">
			<list :tabIndex="tabIndex" @changePage="changePage">
			</list>
		</view>
		<!-- 轮播图 -->
		<!--<video-card></video-card> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex:0,
				tabIndex:0
			}
		},
		onLoad() {
			
		},
		methods: {
			changeTab(index){
				this.tabIndex = index;
			},
			changePage(current){
				this.activeIndex = current;
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.content{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
	}
	.home-list{
		flex: 1;
		box-sizing: border-box;
	}
</style>
