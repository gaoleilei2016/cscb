<template>
	<view>
		<swiper class="screen-swiper" style="height: 400upx;"  :indicator-dots="false" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<!-- <view style="height: 400upx;z-index: -1; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg);"></view> -->
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
			</swiper-item>
		</swiper>
		<view style="position: absolute;top:320upx;left: 0;right: 0;">
			<view class="flex align-center bg-white margin-sm radius-lg text-xl">
				<text class="cuIcon-search margin-lr"></text>
				<view class="cu-bar search">
					<input class="text-df" :adjust-position="false" type="text" placeholder="海南昱隆科技养殖基地" confirm-type="search">
				</view>
			</view>
			<view >
				<view class="flex align-center bg-white margin-lr-sm radius-lg padding">
					<view class="text-green text-lg text-bold">
						<text>昱隆资讯</text>
					</view>
					<swiper vertical autoplay circular interval="3000" class="tui-swiper ">
						<swiper-item v-for="(item,index) in newsList" :key="index" class="tui-swiper-item">
							<view class="tui-news-item text-sm margin-left" @tap='detail'>{{item}}</view>
						</swiper-item>
					</swiper>
					<view class="flex align-center text-sm">
						<text class="cuIcon-right"></text>
					</view>
				</view>
				<view class="flex justify-between margin-lr-sm" style="margin-top: -20upx;margin-bottom: -25upx;z-index: 999;">
					<view class="">
						<image style="width: 50upx;height: 70upx;z-index: 2;" src="../../static/lianjie.png" mode="aspectFit"></image>
					</view>
					<view class="">
						<image style="width: 50upx;height: 70upx;z-index: 2;" src="../../static/lianjie.png" mode="aspectFit"></image>
					</view>
				</view>
				<tui-sticky :scrollTop="scrollTop" stickyHeight="104rpx">
					<template v-slot:header>
						<view class="sticky-item">
							<view style="width: 100%;z-index: 1;" class="align-center bg-white  radius-lg " :class="fillwidth?'margin-sm no-margin-lr':'margin-sm'">
								<view class="tui-header-screen">
									<view class="tui-screen-top solid-bottom">
										<view class="tui-top-item tui-icon-ml " :class="[tabIndex==1?'tui-active tui-bold':'']" data-index="1" @tap="screen">
											<view class="text-lg"><text class="text-df">{{selectedName[0]}}</text><text :class="selectH1>0?'cuIcon-triangleupfill':'cuIcon-triangledownfill'"></text></view>
										</view>
										<view class="tui-top-item tui-icon-ml" :class="[tabIndex==2?'tui-active tui-bold':'']" data-index="2" @tap="screen">
											<view class="text-lg"><text class="text-df">{{selectedName[1]}}</text><text :class="selectH2>0?'cuIcon-triangleupfill':'cuIcon-triangledownfill'"></text></view>
										</view>
										<view class="tui-top-item tui-icon-ml" :class="[tabIndex==3?'tui-active tui-bold':'']" data-index="3" @tap="screen">
											<view class="text-lg"><text class="text-df">{{selectedName[2]}}</text><text :class="selectH3>0?'cuIcon-triangleupfill':'cuIcon-triangledownfill'"></text></view>
										</view>
										<!--下拉选择列表 综合-->
										<view class="tui-dropdownlist" :class="[selectH1>0?'tui-dropdownlist-show':'']">
											<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList1"
											 :key="index" @tap="dropdownItem2" :data-index="index" :data-name="item.name" :data-value="item.value">
												<view class="margin-tb-sm">
													<text class="text-theme">{{item.name}}</text>
												</view>
												<text class="cuIcon-check" v-if="item.selected"></text>
											</view>
										</view>
										<view class="tui-dropdownlist" :class="[selectH2>0?'tui-dropdownlist-show':'']">
											<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList2"
											 :key="index" @tap="dropdownItem4" :data-index="index" :data-name="item.name" :data-value="item.value">
												<view class="margin-tb-sm">
													<text class="text-theme">{{item.name}}</text>
												</view>
												<text class="cuIcon-check" v-if="item.selected"></text>
											</view>
										</view>
										<view class="tui-dropdownlist" :class="[selectH3>0?'tui-dropdownlist-show':'']">
											<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in getTaskCategoryList"
											 :key="index" @tap="dropdownItem5" :data-index="index" :data-name="item.name" :data-value="item.id">
												<view class="margin-tb-sm">
													<text class="text-theme">{{item.name}}</text>
												</view>
												<text class="cuIcon-check" v-if="item.selected"></text>
											</view>
										</view>
										<view class="tui-dropdownlist-mask" :class="[selectH1>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
										<view class="tui-dropdownlist-mask" :class="[selectH2>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
										<view class="tui-dropdownlist-mask" :class="[selectH3>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
									</view>
								</view>
							</view>
						</view>
					</template>
					<template v-slot:content>
						<!--内容 start-->
						<view class="grid col-2 margin-sm flex justify-between ">
							<navigator url="play" style="width:48%" class="radius-top margin-bottom-sm" v-for="(item,index) in myList" :key="index">
								<view style="background:url(/static/play.png) no-repeat;background-size:60upx 60upx;background-position: 50% 50%;background-color:rgba(0, 0, 0, 0.5);z-index: 1;height: 270upx;" class="radius-top">
									<image class="radius-top" style="width: 100%;height: 270upx;z-index: -1;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
								</view>
								<view class="bg-white padding-bottom-sm padding-left-xs padding-right-xs radius-bottom">
									<view class="text-cut">
										<text>海南农牧种植基地(7000亩)</text>
									</view>
									<view class="flex justify-between text-sm">
										<view class="">
											<text>温度:</text><text>22</text>
										</view>
										<view class="">
											<text>湿度:</text><text>70%</text>
										</view>
										<view class="">
											<text>噪声:</text><text>50B</text>
										</view>
									</view>
								</view>
							</navigator>
						</view>
						<!--内容 end-->
					</template>
				</tui-sticky>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	import tuiSticky from "@/components/sticky/sticky"
	export default {
		components:{
			tuiSticky
		},
		data() {
			return {
				fillwidth:false,
				scrollTop: 0,
				CustomBar: this.CustomBar,
				tabIndex: 1, //顶部筛选索引
				selectedName: ['地域', '排序', '阶段'],
				selectH1: 0,
				selectH2: 0,
				selectH3: 0,
				dropdownList1: [{
					value: 1,
					name: "地域1",
					selected: false
				}, {
					value: 2,
					name: "地域2",
					selected: false
				}, {
					value: 3,
					name: "地域3",
					selected: false
				}],
				dropdownList2: [{
					value: 0,
					name: "排序1",
					selected: false
				}, {
					value: 1,
					name: "排序2",
					selected: false
				}, {
					value: 2,
					name: "排序3",
					selected: false
				}],
				getTaskCategoryList: [],
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg'
				}],
				newsList: [
					"致力发展负责任的人工智能 中国发布八大治理原则",
					"格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
					"阿里计划将每股普通股拆为8股，增加筹资灵活性"
				],
				myList:["","","","","","","","","","","","","","",""]
			};
		},
		onPageScroll(e) {
			this.scrollTop= e.scrollTop
			if(e.scrollTop>300){
				this.fillwidth=true
			}else{
				this.fillwidth=false
			}
		},
		methods: {
			px(num) {
				return uni.upx2px(num) + "px"
			},
			screen: function(e) {
				let index = e.currentTarget.dataset.index;
				// console.log(index)
				this.tabIndex = index;
				if (index == 1) {
					if (this.selectH1 == 0) {
						this.showDropdownList();
					} else {
						this.hideDropdownList();
					}
				}
				if (index == 2) {
					if (this.selectH2 == 0) {
						this.showDropdownList();
					} else {
						this.hideDropdownList();
					}
				}
				if (index == 3) {
					if (this.selectH3 == 0) {
						this.showDropdownList();
					} else {
						this.hideDropdownList();
					}
				}
			},
			showDropdownList: function() {
				if (this.tabIndex == 1) {
					this.selectH1 = 400;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 2) {
					this.selectH1 = 0;
					this.selectH2 = 400;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 3) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 300;
				}
			},
			hideDropdownList: function() {
				if (this.tabIndex == 1) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 2) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 3) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
			},
		}
	}
</script>

<style>
	.no-margin-lr{
		margin-left: 0;
		margin-right: 0;
	}
	.sticky-item {
		width: 100%;
		height: 104rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.tui-swiper {
		font-size: 28upx;
		height: 50upx;
		flex: 1;
	}
	.tui-swiper-item {
		display: flex;
		align-items: center
	}
	.tui-news-item {
		line-height: 28upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.tui-header-box {
		width: 100%;
		background: #fff;
		position: fixed;
		z-index: 99998;
		left: 0;
		top: 0;
	}
	
	.tui-header {
		display: flex;
		align-items: flex-start;
	}
	
	/*screen*/
	
	.tui-header-screen {
		box-sizing: border-box;
		position: relative;
		z-index: 1000;
	}
	
	.tui-screen-top,
	.tui-screen-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #333;
	}
	
	.tui-screen-top {
		height: 110upx;
		position: relative;
		/* background: #fff; */
	}
	
	.tui-top-item {
		height: 88upx;
		line-height: 88upx;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tui-bottom-text {
		line-height: 24upx;
		max-width: 82%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.tui-bold {
		font-weight: bold;
	}
	
	.tui-active {
		color: #1EA558;
	}
	
	.tui-icon-ml .tui-icon-class {
		margin-left: 6upx;
	}
	
	.tui-icon-middle .tui-icon-class {
		vertical-align: middle;
	}
	
	.tui-middle {
		vertical-align: middle;
	}
	
	/*顶部下拉选择 综合*/
	
	.tui-dropdownlist {
		width: 100%;
		position: absolute;
		background: #fff;
		overflow: hidden;
		box-sizing: border-box;
		padding-top: 10upx;
		padding-bottom: 26upx;
		left: 0;
		top: 88upx;
		visibility: hidden;
		z-index: 999;
	}
	
	.tui-dropdownlist-show {
		visibility: visible;
	
	}
	
	.tui-dropdownlist-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: -1;
		/* transition: all 0.2s ease-in-out; */
		opacity: 0;
		visibility: hidden;
	}
	
	.tui-mask-show {
		opacity: 1;
		visibility: visible;
	}
	
	.tui-dropdownlist-item {
		color: #333;
		font-size: 28upx;
		padding: 0 40upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
