<template name="components">
	<view>
		<cu-custom bgColor="bg-theme" :isCustom="false" :isBack="false"><block slot="backText"></block><block slot="content">商家服务</block></cu-custom>
		<view class="tui-header-screen" :style="[{top:CustomBar + 'px'}]" >
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
		<view style="margin-top:105upx;">
			<view class="grid col-2 margin-sm flex justify-between ">
				<navigator url="../home/play" style="width:48%" class="radius-top margin-bottom-sm" v-for="(item,index) in getTaskList" :key="index">
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
		</view>
		<load-tip :visible="isLoad"></load-tip>
	</view>
</template>

<script>
	import listItem from "@/colorui/components/listitem"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	var that;
	export default {
		components: {
			tuiTopDropdown,
			listItem
		},
		filters: {
			km: function(val) {
				if (val != null) {
					return (Number(val) / 1000).toFixed(2) + 'km';
				} else {
					return "";
				}
			}
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				seller: false,
				isLoad: true,
				cardCur: 0,
				tabIndex: 1, //顶部筛选索引
				selectedName: ['区域', '排序', '阶段'],
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
				getTaskList: ["","","","","","","","","","","","","",""],
			};
		},
		onPullDownRefresh() {
			
		},
		methods: {
			px(num) {
				return uni.upx2px(num) + "px"
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
			dropdownItem2: function(e) {
				// console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[0] = data.name
				for (let i = 0; i < this.dropdownList1.length; i++) {
					this.dropdownList1[i].selected = false;
				}
				this.dropdownList1[data.index].selected = true;
				this.form.sort_1 = data.value
				this.selectH1 = 0
				this.hideDropdownList();
			},
			dropdownItem4: function(e) {
				// console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[1] = data.name
				for (let i = 0; i < this.dropdownList2.length; i++) {
					this.dropdownList2[i].selected = false;
				}
				this.dropdownList2[data.index].selected = true;
				this.form.sort_2 = data.value
				this.selectH2 = 0
				this.hideDropdownList();
			},
			dropdownItem5: function(e) {
				// console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[2] = data.name
				for (let i = 0; i < this.getTaskCategoryList.length; i++) {
					this.getTaskCategoryList[i].selected = false;
				}
				this.getTaskCategoryList[data.index].selected = true;
				this.form.sort_3 = data.value
				this.selectH3 = 0
				this.hideDropdownList();
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
		},
		onReachBottom() {
			setTimeout(function(){
				for (var i = 0; i < 10; i++) {
					that.getTaskList.push("")
				}
			},2000)
		},
		mounted() {
			that = this;
			// uni.pageScrollTo({
			// 	scrollTop: 0
			// })
			this.dropdownList1[0].selected = true;
			this.dropdownList2[0].selected = true;
		}
	}
</script>

<style>
	.page {
		/* height: 100vh; */
	}

	.container {
		/* padding-bottom: env(safe-area-inset-bottom); */
	}

	/* 隐藏scroll-view滚动条*/

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
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
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		position: fixed;
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
		height: 88upx;
		position: relative;
		background: #fff;
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
