<template>
	<view class="edit-container">
		<view class="article-info">
			<view class="article-title">
				<text class="title-text">文章标题</text>
				<input class="title-input" type="text" value="" placeholder="我是标题..." maxlength="50" v-model="articleTitle"/>
			</view>
			<view class="article-cover">
				<text class="title-text">封面图</text>
				<view class="select-cover" @click="selectCover">
					<u-icon name="plus" size="60" color="#fff" v-if="!imgCover"></u-icon>
					<image :src="imgCover" mode="scaleToFill" v-else></image>
					<view class="tip" v-if="!!imgCover">
						修改封面
					</view>
				</view>
			</view>
			<view class="article-classify">
				<text class="title-text">选择分类</text>
				<view class="select-classify" @click="showClassify">
					<input class="select-input" type="text" :value="classify" placeholder="--分类--" disabled="true"/>
				</view>
			</view>
			<view class="article-tag">
				<text class="title-text">关键词</text>
				<input class="tag-input" type="text" v-model="keyWords" value="" placeholder="输入关键词,让更多人发现你的文章..." maxlength="15"/>
			</view>
		</view>
		<jin-edit @editOk="finshedEdit" :placeholder="placeholder"></jin-edit>
		<u-select v-model="isShow" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				placeholder:'en...想要写点什么呢...',
				imgCover:'',
				articleTitle:'',
				classify:'',
				keyWords:'',
				isShow:false,
				list:[
					{
						value: '1',
						label: '视频'
					},
					{
						value: '2',
						label: '手机'
					},
					{
						value: '3',
						label: '电脑'
					},
					{
						value: '4',
						label: '数码'
					},
					{
						value: '5',
						label: '智能家居'
					},
					{
						value: '6',
						label: '智能穿戴'
					},
				]
			};
		},
		methods:{
			showClassify(){
				this.isShow = !this.isShow;
			},
			confirm(e){
				console.log(e[0].label)
				this.classify = e[0].label;
			},
			selectCover(){
				let _this = this;
				uni.chooseImage({
					count:1,
					success(res) {
						console.log(res);
						let tempFilePaths = res.tempFilePaths;
						_this.imgCover = tempFilePaths[0];
					}
				})
			},
			async finshedEdit(e){
				if(!this.articleTitle){
					uni.showToast({
						icon:'none',
						title:'请输入标题'
					})
					return;
				}
				if(!this.imgCover){
					uni.showToast({
						icon:'none',
						title:'请选择封面图'
					})
					return;
				}
				if(!this.classify){
					uni.showToast({
						icon:'none',
						title:'请选择分类'
					})
					return;
				}
				if(!this.keyWords){
					uni.showToast({
						icon:'none',
						title:'请输入关键词'
					})
					return;
				}
				uni.showLoading({
					title:'发布中'
				})
				// 封面图上传云存储
				const result = await uniCloud.uploadFile({
					filePath:this.imgCover,
					cloudPath:'article/cover_image.jpg'
				})
				
				this.$api.user_center({
					action:'checkToken',
					uniIdToken:uni.getStorageSync('uni_id_token')
				}).then(res => {
					const {data} = res;
					const articleInfo = {
						title:this.articleTitle,
						create_time:new Date().getTime(),
						top_cover:result.fileID,
						tag:this.keyWords,
						classify:this.classify,
						content:e.html,
						author_id:data.uid
					}
					
					console.log(articleInfo);
					this.$api.update_article({
						params:articleInfo
					}).then(res => {
						console.log(res);
						uni.hideLoading();
						uni.navigateBack({
							delta:1
						})
					})
				})
				
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
	.article-info{
		width: 100%;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
		.title-text{
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
		}
		.article-title, .article-tag{
			margin-top: 20rpx;
			.title-input,.tag-input{
				width: 600rpx;
				height: 60rpx;
				border-radius: 20rpx;
				background-color: #f4f5f6;
				margin-top: 20rpx;
				padding: 0 20rpx;
			}
		}
		.article-cover{
			margin-top: 20rpx;
			.select-cover{
				width: 320rpx;
				height: 160rpx;
				border-radius: 20rpx;
				background-color: #f4f5f6;
				margin-top: 20rpx;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				image{
					width: 100%;
					height: 100%;
				}
				
				.tip{
					width: 100%;
					height: 60rpx;
					position: absolute;
					bottom: 0;
					text-align: center;
					background-color: rgba($color: #000000, $alpha: 0.6);
					color: #FFFFFF;
					font-size: 28rpx;
					line-height: 60rpx;
				}
			}
		}
		.article-classify{
			margin-top: 20rpx;
			.select-classify{
				width: 200rpx;
				height: 60rpx;
				border-radius: 20rpx;
				background-color: #f4f5f6;
				margin-top: 20rpx;
				text-align: center;
				line-height: 60rpx;
				color: #333;
				.select-input{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
