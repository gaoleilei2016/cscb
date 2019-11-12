<template>
		<view>
			<swiper style="min-height: 750upx;" :style="[{'height':750 + 'upx'}]"
			 :class="dotStyle?'square-dot':'round-dot'" indicator-color="#8799a3" indicator-active-color="#16C08F"
			 :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="widthFix" style="width: 100%;height:100% ;" v-if="item.type=='image'"></image>
					<video :src="item.url" poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" page-gesture="true" objectFit="cover" loop="true" style="width: 100%;height:100%" muted  :controls="false" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view style="width: 100%;" class="flex flex-direction ">
				<view class="bg-white padding" style="width: 100%;">
					<view class="margin-bottom-sm">
						<text>海南琼中培养基地全然无病虫灾害荔枝全场无理由包邮一年两丰收火红荔枝</text>
					</view>
					<view class="text-xl text-bold text-red margin-bottom-sm ">
						<text class="text-price text-red">32</text>
					</view>
					<view class="flex justify-between">
						<text>运费:￥0</text>
						<text>销量:32</text>
						<text>库存:22252</text>
					</view>
				</view>
				<view class="cu-list menu sm-border margin-top">
					<view class="cu-item arrow">
						<view class="content text-cut">
							<text class="text-grey margin-right">选择</text>
							<text class="text-grey ">请选择规格</text>
						</view>
					</view>
					<view class="cu-item arrow">
						<view class="content text-cut">
							<text class="text-grey margin-right">送至</text>
							<text class="text-grey ">包邮</text>
						</view>
					</view>
				</view>
				<view class="cu-list menu  margin-top">
					<view class="cu-item arrow">
						<view class="content text-cut flex align-center">
							<view style="height: 160upx;">
								<image src="" mode="aspectFit" style="width: 110upx;height: 110upx;background: #808080;"></image>
							</view>
							<view class="text-grey flex flex-direction margin-left">
								<text>海南琼中科学技术基地</text>
								<text class="text-sm">
									<text class="cuIcon-roundcheckfill text-red margin-right-xs"></text>店铺认证
									<text class="cuIcon-roundcheckfill text-red margin-right-xs margin-left"></text>担保交易
								</text>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-list bg-white menu sm-border margin-top">
					<view class="flex text-center align-center justify-center padding">
						<view class="middleline">
						</view>
						<text class="margin-lr-sm">商品详情</text>
						<view class="middleline">
						</view>
					</view>
					<view class="padding-left">
						<text>品牌：</text><text>糯米糍</text>
					</view>
					<view class="padding">
						<text>包装：</text><text>箱装</text>
					</view>
					<view class="margin-top" style="height: 100%;">
						<image style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562220696625&di=88f34c47bebb8d80b83a591104ede006&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2017-11-25%2F5a190c2cf1b5b.jpg" mode="widthFix"></image>
						<image style="width: 100%;margin-top: -9upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562220696625&di=88f34c47bebb8d80b83a591104ede006&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2017-11-25%2F5a190c2cf1b5b.jpg" mode="widthFix"></image>
						<image style="width: 100%;margin-top: -9upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562220696625&di=88f34c47bebb8d80b83a591104ede006&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2017-11-25%2F5a190c2cf1b5b.jpg"
						 mode="widthFix"></image>
						<image style="width: 100%;margin-top: -9upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562220696625&di=88f34c47bebb8d80b83a591104ede006&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2017-11-25%2F5a190c2cf1b5b.jpg"
						 mode="widthFix"></image>
					</view>
				</view>
			</view>
			<tui-divider :size="30" width="60%" divideColor="red">已经到底了</tui-divider>
			<view class="cu-tabbar-height "></view>
			<view class="cu-bar bg-white tabbar border shop foot">
				<view class="action">
					<view class="cuIcon-shop">
						<view class="cu-tag badge">99</view>
					</view>
					基地
				</view>
				<button class="action" open-type="contact">
					<view class="cuIcon-comment text-green">
						<view class="cu-tag badge"></view>
					</view>
					客服
				</button>
				<view class="action text-orange">
					<view class="cuIcon-favorfill"></view> 已收藏
				</view>
				<view class="submit bg-theme" @tap="goPay">立即订购</view>
			</view>
		</view>
</template>

<script>
	import tuiDivider from "@/components/divider/divider"
	export default {
		components:{
			tuiDivider
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				StatusBar: this.StatusBar,
				showColor: false,
				dotStyle: true,
				swiperList: [{
					id: 0,
					type: 'video',
					url: 'http://txcos.kelinteng.com/uploads/20191101/ylkjdemo.mp4'
				}, {
					id: 1,
					type: 'image',
					url: 'https://www.thorui.cn/img/product/11.jpg',
				}, {
					id: 2,
					type: 'image',
					url: '../../static/mall/product.png'
				}],
				ylqcList: [{
						"": "",
						"name": "血糖仪"
					},
					{
						"": "",
						"name": "血压计"
					},
					{
						"": "",
						"name": "医用器材"
					},
					{
						"": "",
						"name": "口罩护理"
					},
					{
						"": "",
						"name": "雾化制氧"
					},
					{
						"": "",
						"name": "测试试纸"
					},
					{
						"": "",
						"name": "检测器具"
					},
					{
						"": "",
						"name": "辅助器具"
					},
				]
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "商品详情"
			});
		},
		methods: {
			scrollTop(e) {
				// console.log(e.detail.scrollTop)
				if (e.detail.scrollTop >= 50) {
					this.showColor = true;
				} else {
					this.showColor = false;
				}
			},
			goPay(){
				
			},
			gotoProduct(index) {
				uni.navigateTo({
					url: 'product_info',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}

	}
</script>

<style>
	.page {
		height: 100vh;
	}

	.middleline {
		width: 265upx;
		height: 3upx;
		background: rgba(246, 246, 246, 1);
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 28%;
		text-align: center;
		font-size: 36upx;
	}

	.fillshape {
		width: 250upx;
		height: 100upx;
		padding-top: 5upx;
		padding-bottom: 5upx;
		background: rgba(255, 255, 255, 1);
		border: 2upx solid rgba(22, 192, 143, 1);
		border-radius: 24upx;
		color: rgba(22, 192, 143, 1);
	}

	.noborder {
		border-left: 0px solid rgba(0, 0, 0, 0);
	}

	.shape1 {
		color: #FFFFFF;
		height: 40upx;
		background: rgba(22, 192, 143, 1);
		border-radius: 21upx;
	}

	.shape2 {
		color: #FFFFFF;
		height: 41upx;
		background: rgba(22, 192, 143, 1);
		border-radius: 21upx;
	}

	.bg-shape {
		width: 115upx;
		height: 42upx;
		color: rgba(255, 0, 0, 1);
		background: rgba(255, 255, 255, 1);
		border: 2upx solid rgba(255, 0, 0, 1);
		border-radius: 21upx;
	}

	.item {
		width: 80upx;
		height: 80upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 0upx 9upx 1upx rgba(0, 0, 0, 0.1);
		border-radius: 50%;
	}

	.list {
		width: 698upx;
		height: 259upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}

	.topborder {
		width: 698upx;
		border-radius: 15upx 15upx 0upx 0upx;
	}

	.bottomborder {
		margin-top: 0upx;
		width: 698upx;
		border-radius: 0upx 0upx 15upx 15upx;
	}

	.list1 {
		width: 698upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}

	.list2 {
		width: 698upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}

	.list3 {
		width: 698upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15upx;
	}
</style>
