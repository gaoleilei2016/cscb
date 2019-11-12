<template>
	<view>
		<view class="padding">
			<view class="bg-green percent100 solid-all padding-left">一号设备信息</view>
			<view class="flex text-center">
				<view class="bg-blue percent30 solid-all ">名称</view>
				<view class="bg-cyan percent40 solid-all">状态</view>
				<view class="no-radius bg-green percent40 solid-all">操作</view>
			</view>
			<view class="flex text-center" v-for="(item,index) in sbList" :key="index">
				<view class="bg-blue percent30 solid-all ">{{item.name}}</view>
				<view class="bg-cyan percent40 solid-all">{{item.state}}</view>
				<view @tap="refresh" class="no-radius bg-green percent20 solid-all">刷新</view>
				<view @tap="restart" class="no-radius bg-orange percent20 solid-all">重启</view>
			</view>
		</view>
		<view class="bg-white">
			<view class="padding-sm solid-bottom">
				设备状态
			</view>
			<view class="grid margin text-center col-2 justify-between padding">
				<button v-for="(item,index) in List" :key="index" :style="item.state=='primary'?style1:item.state=='warn'?style2:style3"
				 class="cu-btn no-radius percent40 margin-bottom bg-theme line-gray block btn-selectclass">设备{{index+1}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style1: 'background-color:#1EA558;',
				style2: 'background-color:#f37b1d;',
				style3: 'background-color:#e54d42;',
				sbList: [
					{id: 1,name: "主摄像头",state: "运行中"},
					{id: 2,name: "温度传感器",state: "已离线"},
					{id: 3,name: "湿度传感器",state: "数据异常"},
					{id: 4,name: "GPS模块",state: "数据丢失"},
					{id: 5,name: "网关模块",state: "运行中"}
				],
				List: [
					{id: 1,name: "设备1",state: 'primary'},
					{id: 2,name: "设备2",state: 'warn'},
					{id: 3,name: "设备3",state: 'primary'},
					{id: 4,name: "设备4",state: 'error'},
					{id: 5,name: "设备5",state: 'primary'},
					{id: 6,name: "设备6",state: 'primary'}
				],
			}
		},
		onLoad() {
			_self = this;
		},
		methods: {
			refresh() {

			},
		}
	}
</script>

<style lang="scss">
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

	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
