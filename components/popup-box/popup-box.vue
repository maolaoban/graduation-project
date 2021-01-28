<template>
	<view>
		<u-popup v-model="show" mode="center" border-radius="20">
			<view>出淤泥而不染，濯清涟而不妖</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				show:false
			};
		},
		watch:{
			isShow(){
				this.show = this.isShow;
			}
		}
	}
</script>

<style>

</style>
