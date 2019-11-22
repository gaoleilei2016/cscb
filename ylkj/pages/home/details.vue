<template>
	<view>
		<view class="bg-white padding">
			<view class="solid-bottom padding-bottom-sm text-black text-bold">基地概况</view>
			<view class="padding-tb-sm text-bold text-black">琼中黎族苗族自治县科学技术基地</view>
			<image src="../../static/状态弹窗.png" style="width: 100%;height: 320upx;"></image>
			<view class="padding-tb-sm"><text class="text-bold text-black">基地:</text><text>琼中黎族苗族自治县科学技术第一培训基地</text></view>
			<view class=""><text class="text-bold text-black">面积:</text><text>7000/亩</text></view>
			<view class="padding-tb-sm"><text class="text-bold text-black">品种:</text><text>荔枝、绿橙、百香果</text></view>
			<view class=""><text class="text-bold text-black">阶段:</text><text>幼苗期 2019-10-30</text></view>
			<view class="padding-tb-sm"><text class="text-bold text-black">政府支持:</text><text>是</text></view>
			<view class=""><text class="text-bold text-black">负责人:</text><text>小王</text></view>
			<view class="padding-tb-sm"><text class="text-bold text-black">联系方式:</text><text>4008208820</text></view>
			<view class=""><text class="text-bold text-black">地址:</text><text>海南省琼中县西门镇上口村</text></view>
		</view>
		<view class="margin-top-sm bg-white padding" style="z-index:0;">
			<view class="flex justify-between solid-bottom padding-bottom-sm text-black text-bold">
				<text>实时环境检测</text>
			</view>
			<view class="grid margin text-center col-2 justify-between padding-xs">
				<button style="width: 245upx;" v-for="(item,index) in edList" :key="index" 
				 class="cu-btn no-radius margin-lr-sm margin-bottom line-black block ">{{item.name}}:{{item.value}}</button>
			</view>
		</view>
		<view class="margin-top-sm bg-white padding" style="z-index:0;">
			<view class="flex justify-between solid-bottom padding-bottom-sm text-black text-bold">
				<text>基地概况</text>
				<text>更多<text class="cuIcon-right"></text></text>
			</view>
			<scroll-view class="padding-tb-sm" scroll-x="true" style="white-space: nowrap;">
				<view class="padding-tb-xs flex" >
					<view @tap="navigator()" v-for="(item,index) in 10" :key="index" class="relative radius margin-right-sm" style="height:170upx;min-width:230upx;">
						<image class="radius" style="width:100%;height:140upx;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572526441738&di=72654ddd0b3a2628784e86cc540e4512&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1707%2F28%2Fc6%2F54025678_1501245963871.jpg" mode="aspectFill"></image>
						<view class="absolute radius" style="height:140upx;right: 0;bottom: 0; left: 0; top: 0;background-color:rgba(0, 0, 0, 0.3);">
							<image class="absolute" style="width: 40upx;height: 40upx;left: 50%;top:50%;margin-left: -20upx;margin-top: -20upx; " src="../../static/play.png" mode=""></image>
						</view>
						<view>基地大门</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="qiun-charts margin-top-sm">
			<view class="solid-bottom padding text-black text-bold">
				<text>种植品种及产收周期掌握</text>
			</view>
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
		</view>
		<view class="bg-white margin-top-sm">
			<view class="solid-bottom padding text-black text-bold">
				<text>产量预测(6季度)</text>
			</view>
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
		</view>
		<view class="bg-white margin-top-sm">
			<view class="solid-bottom padding text-black text-bold">
				<text>基地预定情况</text>
			</view>
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
			<view class="padding">
				<view class="flex text-center">
					<view class="bg-theme percent30 solid-all "></view>
					<view v-for="(item,index) in series.series" :key="index" class="bg-theme percent20 solid-all ">{{item.name}}</view>
				</view>
				<view class="flex text-center" v-for="(items,indexs) in series.categories" :key="indexs">
					<view class="bg-theme percent30 solid-all ">{{items}}</view>
					<view class="bg-theme percent20 solid-all " >{{series.series[0].data[indexs]}}</view>
					<view class="bg-theme percent20 solid-all ">{{series.series[1].data[indexs]}}</view>
					<view class="bg-theme percent20 solid-all ">{{series.series[2].data[indexs]}}</view>
					<view class="bg-theme percent20 solid-all ">{{series.series[3].data[indexs]}}</view>
					<view class="bg-theme percent20 solid-all ">{{series.series[4].data[indexs]}}</view>
				</view>
			</view>
		</view>
		
		<view class="bg-white margin-top-sm">
			<view class="padding solid-bottom text-black text-bold">
				设备状态
			</view>
			<view class="grid margin-lr margin-top text-center col-2 justify-between padding">
				<button @tap="showDialog=true" v-for="(item,index) in List" :key="index" :style="item.state=='primary'?style1:item.state=='warn'?style2:style3"
				 class="cu-btn no-radius percent40 margin-bottom bg-theme line-gray block btn-selectclass">设备{{index+1}}</button>
			</view>
		</view>
		<view class="margin-top-sm bg-white padding">
			<view class="solid-bottom padding-bottom-sm text-black text-bold">
				<text>最新政策咨询</text>
			</view>
			<view class="flex flex-direction padding-tb-sm">
				<text v-for="(item,index) in 9" :key="index" class="text-cut percent100-60">关于印发《关于加快农业保险高质量的指导建议》的通知</text>
			</view>
		</view>
		<view class="cu-tabbar-height margin-bottom"></view>
		<view class="cu-bar foot padding margin-top-sm">
			<button style="width: 100%;" class="cu-btn margin bg-theme block round lg">立即预定</button></input>
		</view>
		
		<!-- <image src="../../static/基地概况.png" style="width: 100%;" mode="widthFix"></image>
		<view class="" v-if="role == 'ncz'">
			<image class="margin-top-sm" src="../../static/实时环境监测.png" style="width: 100%;" mode="widthFix"></image>
			<image @tap="navigator" class="margin-top-sm" src="../../static/基地视频.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/品类及产收掌握.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/产量预测.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/预定情况.png" style="width: 100%;" mode="widthFix"></image>
			<view class="bg-white margin-top-sm">
				<image class="margin-top-sm " src="../../static/政策资讯.png" style="width: 100%;" mode="widthFix"></image>
				<view class="cu-tabbar-height"></view>
			</view>
		</view>
		<view class="" v-else-if="role == 'zfgljfw'">
			<image class="margin-top-sm" src="../../static/实时环境监测.png" style="width: 100%;" mode="widthFix"></image>
			<image @tap="navigator" class="margin-top-sm" src="../../static/基地视频.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/品类及产收掌握.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/产量预测.png" style="width: 100%;" mode="widthFix"></image>
		</view>
		<view class="" v-else-if="role == 'sjfw'">
			<image class="margin-top-sm" src="../../static/实时环境监测.png" style="width: 100%;" mode="widthFix"></image>
			<image @tap="navigator" class="margin-top-sm" src="../../static/基地视频.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/品类及产收掌握.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/产量预测.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/预定情况.png" style="width: 100%;" mode="widthFix"></image>
			<view class="cu-tabbar-height bg-white"></view>
			<navigator :url="'yuding?role='+role" style="box-shadow: 0 0 0 rgba(0, 0, 0, 0);margin-bottom: 30upx;" class="cu-bar foot flex justify-center">
				<button class="cu-btn round lg block bg-green" style="width: 90%;">立即预定</button>
			</navigator>
		</view>
		<view class="" v-else-if="role == 'hzdw'">
			<image class="margin-top-sm" src="../../static/实时环境监测.png" style="width: 100%;" mode="widthFix"></image>
			<image @tap="navigator" class="margin-top-sm" src="../../static/基地视频.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/品类及产收掌握.png" style="width: 100%;" mode="widthFix"></image>
			<image class="margin-top-sm" src="../../static/产量预测.png" style="width: 100%;" mode="widthFix"></image>
		</view>
		<view class="" v-else-if="role == 'ylkj'">
			<image class="margin-top-sm" src="../../static/实时环境监测.png" style="width: 100%;" mode="widthFix"></image>
			<image @tap="navigator" class="margin-top-sm" src="../../static/基地视频.png" style="width: 100%;" mode="widthFix"></image>
			<image @tap="showDialog=true" class="margin-top-sm" src="../../static/设备状态.png" style="width: 100%;" mode="widthFix"></image>
		</view> -->
		
		<view class="cu-modal" :class="showDialog?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">设备信息</view>
					<view class="action" @tap="showDialog=false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view >
					<view class="bg-green percent100 solid-all padding-left">一号设备信息</view>
					<view class="flex text-center">
						<view class="bg-blue percent30 solid-all ">名称</view>
						<view class="bg-cyan percent40 solid-all">状态</view>
						<view class="no-radius bg-green percent40 solid-all">操作</view>
					</view>
					<view class="flex text-center" v-for="(item,index) in sbList" :key="index">
						<view class="bg-blue percent30 solid-all ">{{item.name}}</view>
						<view class="bg-cyan percent40 solid-all">{{item.state}}</view>
						<view @tap="refresh(item)" class="no-radius bg-green percent20 solid-all">刷新</view>
						<view @tap="restart(item)" class="no-radius bg-orange percent20 solid-all">重启</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	import uCharts from '@/utils/u-charts/u-charts.js';
	import {isJSON} from '@/utils/u-charts//checker.js';
	var _self;
	var canvaPie = null;
	var canvaArea = null;
	var canvaColumn=null;
	export default {
		data() {
			return {
				role:'ncz',//用户角色:ncz 农场主，zfgljfw 政府管理及服务，sjfw 商家服务 ，hzdw 合作单位，ylkj 昱隆科技
				showDialog:false,
				edList:[{"name":'温度',"value":"27`C"},{"name":'湿度',"value":"27%"},
				{"name":'雨量',"value":"108.9mm"},{"name":'紫外线',"value":"1级"},
				{"name":'风速',"value":"1.5m/s"},{"name":'空气质量',"value":"优"}
				],
				sbList: [
					{id: 1,name: "主摄像头",state: "运行中"},
					{id: 2,name: "温度传感器",state: "已离线"},
					{id: 3,name: "湿度传感器",state: "数据异常"},
					{id: 4,name: "GPS模块",state: "数据丢失"},
					{id: 5,name: "网关模块",state: "运行中"}
				],
				style1: 'background-color:#1EA558;',
				style2: 'background-color:#f37b1d;',
				style3: 'background-color:#e54d42;',
				List: [
					{id: 1,name: "设备1",state: 'primary'},
					{id: 2,name: "设备2",state: 'warn'},
					{id: 3,name: "设备3",state: 'primary'},
					{id: 4,name: "设备4",state: 'error'},
					{id: 5,name: "设备5",state: 'primary'},
					{id: 6,name: "设备6",state: 'primary'}
				],
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				series: {
					categories: ["第一季度", "第二季度", "第三季度"],
					series:[{"name": "绿橙","data": [120, 80, 95],"color": "#2fc25b"}, 
					{"name": "百香果","data": [100, 70, 75],"color": "#1890ff"}, 
					{"name": "香蕉","data": [140, 120, 125],"color": "#facc14"},
					{"name": "荔枝","data": [75, 50, 65],"color": "#F00000"}, 
					{"name": "火龙果","data": [55, 40, 55],"color": "#182E6C"}],
				}
			}
		},
		onLoad(e) {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
			this.role=e.role
			console.log(this.role)
		},
		methods: {
			touchColumn(e){
				canvaColumn.scrollStart(e);
			},
			moveColumn(e) {
				canvaColumn.scroll(e);
			},
			touchEndColumn(e) {
				canvaColumn.scrollEnd(e);
				canvaColumn.touchLegend(e, {
					animation:true,
				});
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					fontSize:11,
					padding:[5,15,15,15],
					legend:{
						show:true,
						position:'top',
						float:'center',
						itemGap:30,
						padding:5,
						margin:5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth :1
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
					yAxis: {
						//disabled:true
						gridType:'dash',
						splitNumber:4,
						min:10,
						max:150,
						format:(val)=>{return val.toFixed(0)+'元'}//如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width:12
						}
					},
				});
			},
			refresh(item){
				this.$api.msg(item.name+"刷新")
				this.showDialog=false
			},
			restart(item){
				this.$api.msg(item.name+"重启")
				this.showDialog=false
			},
			getServerData() {
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let Column={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Column.categories=res.data.data.LineA.categories;
						Column.series=res.data.data.LineA.series;
						// _self.textarea = JSON.stringify(res.data.data.LineA);
						
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
				
				let Column= {
					"categories": ["第一季度", "第二季度", "第三季度", "第四季度", "第五季度", "第六季度"],
					"series": [
						  {"name": "荔枝","data": [ 80, 60, 75, 67, 100, 80],"color": "#F00000"}, 
						  {"name": "绿橙","data": [ 110,100,130,34, 60, 110],"color": "#2fc25b"}, 
						  {"name": "百香果","data":[60, 75, 90, 40, 80, 60],"color": "#1890ff"}, 
						  {"name": "香蕉","data": [ 70, 45, 40, 70, 70, 120],"color": "#facc14"},
						  ]};
				_self.showColumn("canvasColumn",Column);
				
				let data = {
					"series": [
						{"name": "绿橙","data": 50,"color": "#2fc25b"}, 
						{"name": "百香果","data": 30,"color": "#1890ff"}, 
						{"name": "香蕉","data": 20,"color": "#facc14"},
						{"name": "荔枝","data": 18,"color": "#F00000"}, 
						{"name": "火龙果","data": 18,"color": "#182E6C"},
					]
				}
				// uni.request({
				// 		url: 'https://www.ucharts.cn/data.json',
				// 		data:{
				// 		},
				// 		success: function(res) {
				// 			console.log(res.data.data)
				let Pie = {
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Pie.series = data.series;
				_self.showPie("canvasPie", Pie);
				// 	},
				// 	fail: () => {
				// 		_self.tips="网络错误，小程序端请检查合法域名";
				// 	},
				// });
				let date1 = {
					"categories": ["6月", "7月", "8月", "9月", "10月", "11月"],
					"series": [{
						"name": "香蕉",
						"data": [140, 120, 125, 180, 152, 152],
						"color": "#facc14"
					}, {
						"name": "绿橙",
						"data": [120, 80, 95, 110, 174, 148],
						"color": "#2fc25b"
					}, {
						"name": "百香果",
						"data": [100, 70, 75, 90, 150, 120],
						"color": "#1890ff"
					}, {
						"name": "荔枝",
						"data": [75, 50, 65, 77, 130, 110],
						"color": "#F00000"
					}, {
						"name": "火龙果",
						"data": [55, 40, 55, 67, 104, 100],
						"color": "#182E6C"
					}]
				}
			
				let Area = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Area.categories = date1.categories;
				Area.series = date1.series;
				// _self.textarea = JSON.stringify(res.data.data.Area);
				_self.showArea("canvasArea", Area);
				
				
				// let date2 =  {
				//       "categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
				//       "series": [{
				//         "name": "曲面",
				//         "data": [70, 50, 85, 130, 64, 88],
				//         "type": "area",
				//         "style": "curve"
				//       }, {
				//         "name": "柱1",
				//         "data": [40, 30, 55, 110, 24, 58],
				//         "type": "column"
				//       }, {
				//         "name": "曲线",
				//         "data": [70, 50, 85, 130, 64, 88],
				//         "type": "line",
				//         "style": "curve",
				//         "color": "#1890ff",
				//         "disableLegend": true
				//       }]
				//     }
				// let Mix={categories:[],series:[]};
				// //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				// Mix.categories=date2.categories;
				// Mix.series=date2.series;
				// _self.textarea = JSON.stringify(date2);
				// _self.showMix("canvasMix",Mix);
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding: [0, 15, 10, 15],
					legend: {
						position: 'top',
						show: true,
						padding: 20,
						margin: 0,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							border: true,
							borderColor: '#FFFFFF',
							borderWidth: 3
						}
					},
				});
			},
			showArea(canvasId, chartData) {
				canvaArea = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					padding: [0, 15, 10, 15],
					legend: {
						show: true,
						position: 'top',
						float: 'center',
						padding: 20,
						margin: 0,
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						boundaryGap: 'justify'
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						area: {
							type: 'curve',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});
			
			},
			touchArea(e) {
				canvaArea.touchLegend(e);
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					canvaArea.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
					canvaPie.updateData({
						series: newdata.series,
						categories: newdata.categories
					});
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					})
				}
			},
			touchPie(e) {
				canvaPie.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
				canvaPie.touchLegend(e, {
					animation: true
				});
			},
			navigator(){
				uni.navigateTo({
					url:'play?role='+this.role
				})
			}
		},
	}
</script>

<style>
	.line-gray {
		border: 1upx solid #aaaaaa;
		color: #FFF;
	}
	.btn-selectclass {
		background-image: url('../../static/selected.png');
		background-repeat: no-repeat;
		background-size: 60upx 60upx;
		background-position: 100% 100%;
	}
	.qiun-charts {
		width: 750upx;
		height: 600upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
