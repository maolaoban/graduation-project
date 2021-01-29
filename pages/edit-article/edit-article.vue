<template>
	<view class="edit-container">
		<jin-edit @editOk="finshedEdit" :placeholder="placeholder"></jin-edit>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				placeholder:'en...想要写点什么呢...'
			};
		},
		methods:{
			finshedEdit(e){
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f5f6;
}
.edit-container {
    padding:10px;
}
</style>
