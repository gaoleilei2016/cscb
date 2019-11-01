<template>
	<view>
		<view class="bg-green percent100 solid-all">
			一号设备信息
		</view>
		<view class="flex text-center">
			<view class="bg-blue percent30 solid-all ">名称</view>
			<view class="bg-cyan percent40 solid-all">状态</view>
			<button class="no-radius cu-btn bg-green percent40 solid-all">操作</button>
		</view>
		<view class="flex text-center" v-for="(item,index) in sbList" :key="index">
			<view class="bg-blue percent30 solid-all ">{{item.name}}</view>
			<view class="bg-cyan percent40 solid-all">{{item.state}}</view>
			<button class="no-radius cu-btn bg-green percent20 solid-all">刷新</button>
			<button class="no-radius cu-btn bg-orange percent20 solid-all">重启</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sbList:[
					{id:1,name:"主摄像头",state:"运行中"},
					{id:2,name:"温度传感器",state:"已离线"},
					{id:3,name:"湿度传感器",state:"数据异常"},
					{id:4,name:"GPS模块",state:"数据丢失"},
					{id:5,name:"网关模块",state:"运行中"}
				]
			}
		},
	}
</script>

<style>
</style>
