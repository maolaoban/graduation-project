<template>
	<view class="video-container">
		<view class="video-box">
			<video src="https://static.mobage.cn/html/promotion/game/12000128/autumn/index/op2_yy.mp4"
				page-gesture="true"
				object-fit="cover"
				controls
				:danmu-list="danmuList"
				:enable-danmu="true"
				:danmu-btn="true"
			></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				danmuList: [{
				                    text: '第 1s 出现的弹幕',
				                    color: '#ff0000',
				                    time: 1
				                },
				                {
				                    text: '第 3s 出现的弹幕',
				                    color: '#ff00ff',
				                    time: 3
				                }
				            ],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.video-container{
	.video-box{
		width: 100%;
		height: 400rpx;
		video{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
