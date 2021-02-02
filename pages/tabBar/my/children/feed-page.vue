<template>
	<view>
		<view class="feedback-title">
			意见反馈:
		</view>
		<view class="feedback-content">
			<textarea class="feedback-text" v-model="content" placeholder="请输入您要反馈的问题..." />
		</view>
		<view class="feedback-title">
			反馈图片:
		</view>
		<view class="feedback-image-box">
			<view class="feedback-image-item" v-for="(item, index) in imgList" :key="index">
				<view class="close-icon" @click="delImage(index)">
					<u-icon name="close" size="20" color="#fff"></u-icon>
				</view>
				<view class="image-box">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</view>
			<view v-show="imgList.length < 5" class="feedback-image-item" @click="addImage">
				<view class="image-box">
					<u-icon name="plus" size="80" color="#eee"></u-icon>
				</view>
			</view>
		</view>
		<button class="feedback-button" type="primary" @click="submit">提交反馈意见</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[],
				content:''
			}
		},
		methods: {
			addImage(){
				let _this = this;
				let count = 5 - this.imgList.length
				uni.chooseImage({
					count:count,
					success(res) {
						console.log(res);
						let tempFilePaths = res.tempFilePaths;
						tempFilePaths.forEach((item, index) => {
							if(index < count){
								_this.imgList.push(item)
							}
						})
						console.log(_this.imgList);
					}
				})
			},
			delImage(index){
				this.imgList.splice(index,1);
			},
			async submit(){
				let imagesPath = [];
				uni.showLoading();
				for (let i = 0; i < this.imgList.length; i++) {
					const filePath = this.imgList[i];
					// filePath = await this.uploadFiles(filePath);
					// imagesPath.push(filePath)
				}
				// this.updateFeedBack({
				// 	feedbackImage:imagesPath,
				// 	content:this.content
				// })
			},
			
			async uploadFiles(filePath){
				console.log(filePath);
				const result = await uniCloud.uploadFile({
					filePath: filePath,
					cloudPath: 'feedback.jpg'
				})
				console.log('result',result);
				return result.fileID;
			},
			// updateFeedBack({feedbackImage,content}){
			// 	this.$api.update_feedback({
			// 		feedbackImage,
			// 		content
			// 	}).then(res => {
			// 		console.log(res);
					
			// 		uni.hideLoading();
			// 		// this.content = '';
			// 		// this.imgList = '';
			// 		uni.showToast({
			// 			title:'提交成功',
			// 			icon:'none'
			// 		})
			// 		setTimeout(()=>{
			// 			uni.switchTab({
			// 				url:'../tarbar/my/my'
			// 			})
			// 		},600);
			// 	}).catch(()=>{
			// 		uni.hideLoading();
			// 		uni.showToast({
			// 			title:'反馈失败',
			// 			icon:'none'
			// 		})
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
.feedback-title{
	margin: 15px;
	margin-bottom: 0;
	font-size: 14px;
	color: #666;
}
.feedback-content{
	margin: 15px;
	padding: 10px;
	box-sizing: border-box;
	border: 1px #eee solid;
	.feedback-text{
		font-size: 12px;
		width: 100%;
		height: 100px;
	}
}
.feedback-image-box{
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
	.feedback-image-item{
		position: relative;
		width: 33.33%;
		height: 0;
		padding-top: 33.33%;
		box-sizing: border-box;
		.close-icon{
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: 0;
			top:0;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			background-color: #ff5a5f;
			z-index: 10;
		}
		.image-box{
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top:5px;
			bottom: 5px;
			left: 5px;
			right: 5px;
			border: 1px solid #eee;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}
.feedback-button{
	margin: 15px;
	background-color: #00aaff;
	color: #fff;
}
</style>
