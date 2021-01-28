<template>
	<view class="my-info">
		<view class="top-box" @click="changeImg">
			<view class="top-img">
				<image :src="backImage || userInfo.backImage" mode="aspectFill"></image>
			</view>
		</view>
		<view class="user-info_box" v-if="isShow">
			<view class="user-avatar">
				<image :src="userInfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="use-info_detail">
				<view class="user-info">
					<view class="user-info_name">
						<view class="user-info-level">
							LV{{userInfo.grade}}
						</view>
						{{userInfo.name}}
					</view>
					<view class="user-edit" @click="editProfile">
						编辑资料
					</view>
				</view>
				<view class="user-info_num">
					<view class="num-text"><text>{{userInfo.publish}}</text>动态</view>
					<view class="num-text"><text>{{userInfo.follow}}</text>关注</view>
					<view class="num-text"><text>{{userInfo.fans}}</text>粉丝</view>
				</view>
				<view class="user-info_bio">
					{{userInfo.bios}}
				</view>
			</view>
		</view>
		<view class="user-info_loading" v-else>
			<view class="user-avatar_loading"></view>
			<view class="use-info_detail">
				<view class="user-info">
					<view class="user-info_name">
						<view class="user-info-level"></view>
						<view class="user-name"></view>
					</view>
				</view>
				<view class="user-info_num"></view>
				<view class="user-info_bio"></view>
			</view>
		</view>
		<view class="my-box">
			<view class="my-box_top">
				<view class="my-collect">
					<u-icon name="heart-fill" color="pink" size="60"></u-icon>
					<text>我的喜欢</text>
				</view>
				<view class="my-collect">
					<u-icon name="clock-fill" color="#876db5" size="60"></u-icon>
					<text>历史记录</text>
				</view>
				<view class="my-collect">
					<u-icon name="bag-fill" color="#f8784e" size="60"></u-icon>
					<text>已购</text>
				</view>
				<view class="my-collect">
					<u-icon name="chat-fill" color="#3e92b5" size="60"></u-icon>
					<text>我的评论</text>
				</view>
			</view>
		</view>
		<view class="create-box">
			<view class="create-box_top">
				<view class="top-left">
					创作数据
				</view>
				<view class="top-right">
					我的发表>
				</view>
			</view>
			<view class="create-box_content">
				<view class="create-count">
					<text>120W</text>
					累计阅读数
				</view>
				<view class="create-count">
					<text>50W</text>
					累计评论数
				</view>
				<view class="create-count">
					<text>100W</text>
					累计点赞数
				</view>
				<view class="create-count">
					<text>65</text>
					人气排行
				</view>
			</view>
		</view>
		<view class="out-login">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{},
				isShow:false,
				backImage:''
			}
		},
		onLoad() {
			this.$api.get_userInfo().then(res => {
				console.log(res);
				const {data} = res;
				this.userInfo = data;
				this.isShow = true;
				uni.setStorage({
					key:'userInfo',
					data:JSON.stringify(data)
				})
			})
		},
		methods: {
			changeImg(){
				let _this = this;
				uni.showActionSheet({
				    itemList: ['更换封面'],
				    success: function (res) {
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if(res.tapIndex == 0){
							uni.chooseImage({
							    count: 1, //默认9
							    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
							    sourceType: ['album'], //从相册选择
							    success: function (res) {
							        console.log(res.tempFilePaths[0]);
									_this.backImage = res.tempFilePaths[0];
							    },
								fail:function(){
									alert(1)
								}
							});
						}
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			},
			editProfile(){
				uni.navigateTo({
					url:'../../edit-profile/edit-profile'
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f4f5f6;	
}
.my-info{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.top-box{
	width: 750rpx;
	height: 500rpx;
	position: relative;
	.top-img{
		width: 100%;
		height: 100%;
		-webkit-clip-path: ellipse(90% 60% at 50% 45%);
		image{
			width:100%;
			height: 100%;
		}
	}
}
.user-info_box{
	width: 700rpx;
	height: 200rpx;
	padding: 0 20rpx;
	border-radius: 30rpx;
	transform: translateY(-35%);
	background-color: #fff;
	box-shadow:0px 4rpx 20rpx 0px #CCCCCC;
	display: flex;
	align-items: center;
	position: relative;
	.user-avatar{
		width: 150rpx;
		height: 150rpx;
		flex-shrink: 0;
		border-radius: 50%;
		// border:4rpx dotted #7E7E7E;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.use-info_detail{
		height: 140rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		justify-content: space-between;
		.user-info{
			width: 100%;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			color: $uni-text-color;
			.user-info_name{
				display: flex;
				align-items: center;
				font-size: 32rpx;
				font-weight: bold;
				.user-info-level{
					width: 60rpx;
					height: 30rpx;
					margin-right: 10rpx;
					background-color: #01B9FD;
					font-size: 24rpx;
					text-align: center;
					line-height: 30rpx;
					border-radius: 10rpx;
					color: #fff;
				}
			}
			.user-edit{
				height: 40rpx;
				border:1px solid #bbb;
				color: #bbb;
				border-radius: 20rpx;
				padding: 0 10rpx;
				font-size: 24rpx;
				display: flex;
				align-items: center;
			}
		}
		.user-info_num{
			display: flex;
			justify-content: flex-start;
			.num-text{
				margin-right: 20rpx;
				font-size: 24rpx;
				color:rgba($color: $uni-text-color, $alpha: 0.6);
				text{
					font-size: 30rpx;
					margin-right: 4rpx;
					color: $uni-text-color;
				}
			}
		}
		.user-info_bio{
			font-size: 24rpx;
			white-space: pre-wrap;
			color:rgba($color: $uni-text-color, $alpha: 0.6);
		}
	}
}
.user-info_loading{
	width: 700rpx;
	height: 200rpx;
	padding: 0 20rpx;
	border-radius: 30rpx;
	transform: translateY(-35%);
	background-color: #fff;
	box-shadow:0px 4rpx 20rpx 0px #CCCCCC;
	display: flex;
	align-items: center;
	position: relative;
	.user-avatar_loading{
		width: 150rpx;
		height: 150rpx;
		flex-shrink: 0;
		border-radius: 50%;
		background-color: #f4f5f6;
	}
	.use-info_detail{
		height: 140rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		justify-content: space-between;
		.user-info{
			width: 100%;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			.user-info_name{
				display: flex;
				align-items: center;
				.user-info-level{
					width: 60rpx;
					height: 30rpx;
					margin-right: 10rpx;
					background-color: #01B9FD;
					border-radius: 10rpx;
				}
				.user-name{
					width: 200rpx;
					height: 30rpx;
					border-radius: 10rpx;
					background-color: #f4f5f6;
				}
			}
		}
		.user-info_num{
			width: 320rpx;
			height: 30rpx;
			border-radius: 10rpx;
			background-color: #f4f5f6;
		}
		.user-info_bio{
			width: 400rpx;
			height: 30rpx;
			border-radius: 10rpx;
			background-color: #f4f5f6;
		}
	}
}
.my-box{
	width: 700rpx;
	height: 180rpx;
	border-radius: 20rpx;
	transform: translateY(-20%);
	background-color: #fff;
	.my-box_top{
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 30rpx;
		.my-collect{
			width: 120rpx;
			height: 120rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text{
				margin-top: 10rpx;
				font-size: 26rpx;
			}
		}
	}
}
.create-box{
	width: 700rpx;
	height: 400rpx;
	background-color: #fff;
	border-radius: 20rpx;
	padding: 20rpx;
	.create-box_top{
		height: 40rpx;
		display: flex;
		justify-content: space-between;
		.top-left{
			font-size: 28rpx;
			color: $uni-text-color;
			font-weight: bold;
		}
		.top-right{
			font-size: 28rpx;
			color: #01B9FD;
		}
	}
	.create-box_content{
		width: 100%;
		height: 300rpx;
		margin-top: 10rpx;
		display: flex;
		flex-wrap: wrap;
		.create-count{
			flex-shrink: 0;
			width: 330rpx;
			height: 150rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 26rpx;
			color: #bbb;
			text{
				font-size: 32rpx;
				color: $uni-text-color;
				font-weight: bold;
				margin-bottom: 6rpx;
			}
		}
		.create-count:nth-child(-n+2){
			border-bottom: 2rpx solid #f4f5f6;
		}
		.create-count:nth-child(2n-1){
			border-right: 2rpx solid #f4f5f6;
		}
	}
}
.out-login{
	width: 650rpx;
	height: 100rpx;
	margin: 50rpx 0 20rpx 0;
	border-radius: 20rpx;
	transform: translateY(-5%);
	color:#E74C3C;
	font-size: 32rpx;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
}
</style>
