<template>
	<view class="interest-container">
		<view class="no-interest" v-if="myInterest.length == 0">
			<view class="no-interest_title">
				你可能感兴趣的创作者
			</view>
			<view class="creator-list">
				<view class="creator-item">
					科技美学
				</view>
				<view class="creator-item">
					zealer
				</view>
				<view class="creator-item">
					小白测评
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myInterest:[]
			};
		}
	}
</script>

<style lang="scss">

</style>
