<template>
	<view class="publish">
		<uni-fab 
			horizontal="right"
			vertical="bottom"
			direction="vertical"
			:pattern="pattern"
			:content="content"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>

<script>
	import UniFab from './uni-fab/uni-fab';
	export default {
		data() {
			return {
				pattern:{
					"buttonColor":"#007AFF"
				},
				content:[
					{
						"iconPath":'/static/images/article-icon.png',
						"text":'文章'
					},
					{
						"iconPath":'/static/images/video-icon.png',
						"text":'视频'
					}
				]
			};
		},
		components:{
			UniFab
		},
		methods:{
			trigger(item){
				if(item.index === 0){
					uni.navigateTo({
						url:'/pages/edit-article/edit-article'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

.publish{
	z-index: 99;
}
/deep/.uni-fab__circle{
	box-shadow: none;
}
</style>
