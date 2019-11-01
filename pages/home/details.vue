<template>
	<view>
		<image src="../../static/基地概况.png" style="width: 100%;" mode="widthFix"></image>
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
		</view>
		<view class="cu-modal" :class="showDialog?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">设备信息</view>
					<view class="action" @tap="showDialog=false">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="bg-img" style="background-image: url(../../static/状态弹窗.png);height:200px;">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				role:'ncz',//用户角色:ncz 农场主，zfgljfw 政府管理及服务，sjfw 商家服务 ，hzdw 合作单位，ylkj 昱隆科技
				showDialog:true
			}
		},
		onLoad(e) {
			this.role=e.role
			console.log(this.role)
		},
		methods: {
			navigator(){
				uni.navigateTo({
					url:'play?role='+this.role
				})
			}
		},
	}
</script>

<style>
	
</style>
