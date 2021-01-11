<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	//页面背景色
	page{
		background: #151515;
	}
	
	//解决小程序scroll-view出现滚动条
	/* #ifdef MP-WEIXIN */
	::-webkit-scrollbar{
		display: none;
	}
	/* #endif */
</style>
