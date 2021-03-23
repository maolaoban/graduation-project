<template>
	<view class="publish-container">
		<nav-bar :hasBack="true"></nav-bar>
		<view class="class-info">
			<view class="class-avatar">
				<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2F50%2Fv2-62206e3581d4d72b70be3e1110076c2f_hd.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617866512&t=9a6fa29438129a290194ca172316f13f" mode="aspectFit"></image>
			</view>
			<view class="class-name">
				<text class="name-text">我不该在勇者大陆冒险</text>
			</view>
			<view class="publish-btn" :style="{'background-color':content.length>0?'#01b9fd':'#BFBFBF'}">
				发布
			</view>
		</view>
		<view class="publish-content">
			<textarea class="publish-text" v-model="content" placeholder="就讲上几句话吧..."  maxlength="500"/>
		</view>
		<view class="publish-image-box">
			<view class="publish-image-item" v-for="(item, index) in imgList" :key="index">
				<view class="close-icon" @click="delImage(index)">
					<u-icon name="close" size="20" color="#fff"></u-icon>
				</view>
				<view class="image-box">
					<image :src="item" mode="aspectFill"></image>
				</view>
			</view>
			<view v-show="isShowPlus" class="publish-image-item" @click="addImage">
				<view class="image-box">
					<u-icon name="plus" size="60" color="#bbb"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[],
				content:'',
				isShowPlus:true
			}
		},
		watch:{
			imgList:function(newVal){
				if(newVal.length < 4){
					this.isShowPlus = true;
				}else{
					this.isShowPlus = false;
				}
			}
		},
		methods: {
			addImage(){
				let _this = this;
				let count = 4 - this.imgList.length
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
				// this.updatepublish({
				// 	publishImage:imagesPath,
				// 	content:this.content
				// })
			}
		}
	}
</script>

<style lang="scss">
.class-info{
	width: 100%;
	height: 88rpx;
	box-sizing: border-box;
	padding: 0 28rpx;
	margin-top: 32rpx;
	display: flex;
	align-items: center;
	position: relative;
	.class-avatar{
		width: 88rpx;
		height: 88rpx;
		border-radius: 20rpx;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.class-name{
		display: flex;
		align-items: center;
		margin-left: 32rpx;
		.name-text{
			font-size: 28rpx;
			color: #333333;
			font-weight: 400;
			line-height: 24rpx;
		}
	}
	.publish-btn{
		width: 128rpx;
		height: 52rpx;
		border-radius: 26rpx;
		background-color: #BFBFBF;
		color: #FFFFFF;
		font-weight: 400;
		font-size: 28rpx;
		text-align: center;
		line-height: 52rpx;
		letter-spacing: 4rpx;
		position: absolute;
		right: 28rpx;
		top: 0;
		
	}
}
.publish-content{
	margin: 30rpx;
	padding: 20rpx;
	box-sizing: border-box;
	border-bottom: 1px #E9E9E9 solid;
	.publish-text{
		font-size: 28rpx;
		width: 100%;
		height: 270rpx;
		caret-color: #01b9fd;
	}
}
.publish-image-box{
	display: flex;
	flex-wrap: wrap;
	padding: 20rpx;
	margin-bottom: 160rpx;
	width: 60%;
	.publish-image-item{
		position: relative;
		width: 50%;
		height: 0;
		padding-top: 50%;
		box-sizing: border-box;
		.close-icon{
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: 20rpx;
			top:20rpx;
			width: 34rpx;
			height: 34rpx;
			border-radius: 50%;
			background-color: rgba($color: #000000, $alpha: 0.4);
			z-index: 10;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.image-box{
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top:10rpx;
			bottom: 10rpx;
			left: 10rpx;
			right: 10rpx;
			border: 1rpx solid #eee;
			border-radius: 10rpx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
